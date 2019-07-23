import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, MinLengthValidator } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GuardGuard } from 'src/app/guard.guard';
import { ValidationService } from 'src/app/login/validation.service';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppComponent } from 'src/app/app.component';
import { UsersviewService } from './usersview.service';
import { UsersViewModel } from './usersview.model';

@Component({
  selector: 'app-usersview',
  templateUrl: './usersview.component.html',
  styleUrls: ['./usersview.component.css']
})
export class UsersviewComponent implements OnInit {

  returnUrl: string;
  paramsid: any;
  ideaslist: [];
  usersview: UsersViewModel;
  firstname: String;
  lastname: String;
  mobile: String;
  dob: String;
  balanceamnt: Number;
  totalamnt: String;
  email: String;
  gender: String;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private guard: GuardGuard,
    private service: UsersviewService,
    private appspinner: AppComponent
  ) {
  }

  ngOnInit() {
    this.appspinner.spinnerAlert('show');
    this.route.params.subscribe(params => {
      this.paramsid = params.id;
      this.service.getUserViewList(this.paramsid).subscribe((res) => {
        if (res['body']['error']) {
          environment.swalalert('nodata', res['msg']);
          this.appspinner.spinnerAlert('hide');
        } else {
          this.usersview = res.body['data'];
          this.firstname = this.usersview.FirstName;
          this.lastname = this.usersview.LastName;
          this.mobile = this.usersview.Mobile;
          this.email = this.usersview.Email;
          this.gender = this.usersview.Gender;
          this.dob = this.usersview.Dob;
          this.balanceamnt = this.usersview.BalanceAmount;
          this.totalamnt = this.usersview.TotalAmount;                              
          this.appspinner.spinnerAlert('hide');
        }
      },
        (err) => {
          console.log(err);
        })
      this.service.getUserIdeasList(this.paramsid).subscribe((res) => {
        if (res['body']['error']) {
          environment.swalalert('nodata', 'User not added any ideas yet.');
          this.appspinner.spinnerAlert('hide');
        } else {
          this.ideaslist = res.body['data'];
          this.appspinner.spinnerAlert('hide');
        }
      },
        (err) => {
          console.log(err);
        })    
    });
  }
}
