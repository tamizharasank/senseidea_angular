import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators, FormControl, MinLengthValidator } from '@angular/forms';
import { Router, ActivatedRoute, RouterLinkActive } from '@angular/router';
import { GuardGuard } from '../guard.guard';
import { ValidationService } from './validation.service';
import * as $ from '../../assets/plugins/jquery/jquery.min.js';
import { from } from 'rxjs';
import { LoginService } from './login.service';
import { environment } from '../../environments/environment';
import { AppComponent } from '../app.component';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  returnUrl: string;
  loginForm: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private service: LoginService,
    private cookie: CookieService) {
    this.loginForm = this.formBuilder.group({
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'password': ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
$(function() {

   $(".input input").focus(function() {

      $(this).parent(".input").each(function() {
         $("label", this).css({
            "line-height": "18px",
            "font-size": "18px",
            "font-weight": "100",
            "top": "0px"
         })
         $(".spin", this).css({
            "width": "100%"
         })
      });
   }).blur(function() {
      $(".spin").css({
         "width": "0px"
      })
      if ($(this).val() == "") {
         $(this).parent(".input").each(function() {
            $("label", this).css({
               "line-height": "60px",
               "font-size": "24px",
               "font-weight": "300",
               "top": "10px"
            })
         });

      }
   });

   $(".button").click(function(e) {
      var pX = e.pageX,
         pY = e.pageY,
         oX = parseInt($(this).offset().left),
         oY = parseInt($(this).offset().top);

      $(this).append('<span class="click-efect x-' + oX + ' y-' + oY + '" style="margin-left:' + (pX - oX) + 'px;margin-top:' + (pY - oY) + 'px;"></span>')
      $('.x-' + oX + '.y-' + oY + '').animate({
         "width": "500px",
         "height": "500px",
         "top": "-250px",
         "left": "-250px",

      }, 600);
   })

   $(".alt-2").click(function() {
      if (!$(this).hasClass('material-button')) {
         $(".shape").css({
            "width": "100%",
            "height": "100%",
            "transform": "rotate(0deg)"
         })

         setTimeout(function() {
            $(".overbox").css({
               "overflow": "initial"
            })
         }, 600)

         $(this).animate({
            "width": "140px",
            "height": "140px"
         }, 500, function() {
            $(".box").removeClass("back");

            $(this).removeClass('active')
         });

         $(".overbox .title").fadeOut(300);
         $(".overbox .input").fadeOut(300);
         $(".overbox .button").fadeOut(300);

         $(".alt-2").addClass('material-buton');
      }

   })

   $(".material-button").click(function() {

      if ($(this).hasClass('material-button')) {
         setTimeout(function() {
            $(".overbox").css({
               "overflow": "hidden"
            })
            $(".box").addClass("back");
         }, 200)
         $(this).addClass('active').animate({
            "width": "700px",
            "height": "700px"
         });

         setTimeout(function() {
            $(".shape").css({
               "width": "50%",
               "height": "50%",
               "transform": "rotate(45deg)"
            })

            $(".overbox .title").fadeIn(300);
            $(".overbox .input").fadeIn(300);
            $(".overbox .button").fadeIn(300);
         }, 700)

         $(this).removeClass('material-button');

      }

      if ($(".alt-2").hasClass('material-buton')) {
         $(".alt-2").removeClass('material-buton');
         $(".alt-2").addClass('material-button');
      }

   });

});



    this.returnUrl = this.route.snapshot.queryParams['return'] || 'dashboard';
    if (this.cookie.get('Token')) {
      this.router.navigateByUrl(this.returnUrl);
    }
  }
  login() {
    if (this.loginForm.dirty && this.loginForm.valid) {

      var data = { email: this.loginForm.value.email, password: this.loginForm.value.password };
      this.service.login_authentication(data).subscribe(async res => {
        if (res.body['error'] === false) {
          // sessionStorage.setItem('Token', res.body['data'].token );
          this.cookie.set('Token', res.body['data'].token);
          // console.log(this.cookie.get('token'));
          environment.swalalert('success', res.body['msg']).then(value => {
            if (value) {
              this.router.navigateByUrl(this.returnUrl);
            }
          });
        } else {
           environment.swalalert('error', '管理者の資格情報が正しくありません');
        }
      });
    }
    else {
       environment.swalalert('warning', '有効な詳細を入力してください');
    }
  }
}
