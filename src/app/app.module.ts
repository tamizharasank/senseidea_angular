import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgbModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationModule } from 'ngx-pagination-bootstrap'
import { ChartsModule } from 'ng2-charts';


import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { UsersComponent } from './layout/users/users.component';
import { TransactionsComponent } from './layout/transactions/transactions.component';
import { NotificationsComponent } from './layout/notifications/notifications.component';
import { IdeasComponent } from './layout/ideas/ideas.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { UsersviewComponent } from './layout/usersview/usersview.component';
import { IdeasviewComponent } from './layout/ideasview/ideasview.component';
import { CategoryviewComponent } from './layout/categoryview/categoryview.component';
import { CategoryeditComponent } from './layout/categoryedit/categoryedit.component';
import { CategoryaddComponent } from './layout/categoryadd/categoryadd.component';
import { WithdrawrequestsComponent } from './layout/withdrawrequests/withdrawrequests.component';
import { SettingsComponent } from './layout/settings/settings.component';
import { WithdrawlrequestsviewComponent } from './layout/withdrawlrequestsview/withdrawlrequestsview.component';
import { TransactionsviewComponent } from './layout/transactionsview/transactionsview.component';
import { PasswordeditComponent } from './layout/passwordedit/passwordedit.component';
import { BankeditComponent } from './layout/bankedit/bankedit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    NotFoundComponent,
    DashboardComponent,
    UsersComponent,
    TransactionsComponent,
    NotificationsComponent,
    IdeasComponent,
    SidebarComponent,
    NavbarComponent,
    UsersviewComponent,
    IdeasviewComponent,
    CategoryviewComponent,
    CategoryeditComponent,
    CategoryaddComponent,
    WithdrawrequestsComponent,
    SettingsComponent,
    WithdrawlrequestsviewComponent,
    TransactionsviewComponent,
    PasswordeditComponent,
    BankeditComponent
  ],
  imports: [
    NgbModule,
    NgbAlertModule,    
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    FormsModule,
    NgProgressModule.forRoot(),    
    HttpClientModule,
    PaginationModule,
    ChartsModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
