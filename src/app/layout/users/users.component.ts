import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, MinLengthValidator } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { GuardGuard } from 'src/app/guard.guard';
import { UserListModel } from './user-list.model'
import { UserModelList } from './user.model';
import { AppComponent } from 'src/app/app.component';
import { environment } from '../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  returnUrl: any;
  page: Number;
  commonpage: Number = 1;
  sessionpage: Number;
  pages: any;
  searchdata: String;
  usermodel: UserListModel;
  result: UserModelList[];
  nodata: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private guard: GuardGuard,
    private service: UsersService,
    private appspinner: AppComponent,
    private cookie: CookieService
  ) {
   }
  async ngOnInit() {
    this.nodata = false;
    if (this.cookie.get('userlist') === '') {
      this.getUsers(1);      
    } else {
      var cookiepage = parseInt(this.cookie.get('userlist'));
      await this.getUsers(cookiepage);
    }

  }
  getUsersSerchPage(page) {
    if (this.searchdata !== undefined) {
      if (this.searchdata.length > 0) {

        this.findname(this.searchdata, this.page);
      } else {
        this.getUsers(page);
      }
    } else {
      this.getUsers(page);
    }
  }


  getUsers(page) {
    new Promise((resolve) => {
      this.cookie.set('userlist', page);
      this.appspinner.spinnerAlert('show');
      this.service.usersListView(page).subscribe((res) => {
        if (res['error']) {
          environment.swalalert('nodata', res['msg']);
          this.appspinner.spinnerAlert('hide');
        } else {
          this.usermodel = new UserListModel(res['body']['error'], res['body']['msg'], res['body']['data']);
          if (this.usermodel['data'].length > 0) {
            this.pages = this.usermodel['data'][0].Count;
            this.page = page;
            this.result = this.usermodel['data'][0].data;
            this.appspinner.spinnerAlert('hide');
          } else {
            environment.swalalert('nodata', 'No Data Available ');
            this.appspinner.spinnerAlert('hide');
          }
        }
      },
        (err) => {
          console.log(err);
        })      
    })
  }

  reset() {
    this.searchdata = '';
    this.page = this.commonpage;
    this.cookie.set('userlist', this.commonpage.toString());
    this.getUsers(this.commonpage);
    this.nodata = false;
  }

  findname(search, page) {
    this.cookie.set('userlist', page);
    if (page) {
      this.page = page;
    }    
    var data = { search: search, typename: 'users', page: page }
    this.service.usersearchdataView(data).subscribe((res) => {
      if (res['error']) {
        // environment.swalalert('nodata', res['msg']);
        // this.appspinner.spinnerAlert('hide');
      } else {
        this.usermodel = new UserListModel(res.body['error'], res.body['msg'], res.body['data']);
        if (this.usermodel['error'] === true && this.usermodel['data'] === undefined) {
          this.result = [];      
          this.pages = [];
          this.nodata = true;
        }
        if (res.body['data'].length > 0 && this.usermodel['data'][0].data.length > 0) {
          this.pages = this.usermodel['data'][1].Count;
          this.result = this.usermodel['data'][0].data;
          // this.appspinner.spinnerAlert('hide');
        } else {
          // environment.swalalert('nodata', 'No Data Available ');
          // this.appspinner.spinnerAlert('hide');
        }
      }
    },
      (err) => {
        console.log(err);
      });
  }
}
