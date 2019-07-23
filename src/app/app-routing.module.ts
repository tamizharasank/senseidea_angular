import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { from } from 'rxjs';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { GuardGuard } from './guard.guard';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { UsersComponent } from './layout/users/users.component';
import { UsersviewComponent } from './layout/usersview/usersview.component';
import { IdeasviewComponent } from './layout/ideasview/ideasview.component';
import { CategoryviewComponent } from './layout/categoryview/categoryview.component';
import { CategoryaddComponent } from './layout/categoryadd/categoryadd.component';
import { CategoryeditComponent } from './layout/categoryedit/categoryedit.component';
import { IdeasComponent } from './layout/ideas/ideas.component';
import { WithdrawrequestsComponent } from './layout/withdrawrequests/withdrawrequests.component';
import { TransactionsComponent } from './layout/transactions/transactions.component';
import { WithdrawlrequestsviewComponent } from './layout/withdrawlrequestsview/withdrawlrequestsview.component';
import { SettingsComponent } from './layout/settings/settings.component';
import { PasswordeditComponent } from './layout/passwordedit/passwordedit.component';
import { BankeditComponent } from './layout/bankedit/bankedit.component';
import { TransactionsviewComponent } from './layout/transactionsview/transactionsview.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [GuardGuard] },
      { path: 'users', component: UsersComponent, canActivate: [GuardGuard] },
      { path: 'passwordEdit', component: PasswordeditComponent, canActivate: [GuardGuard] },
      { path: 'bankEdit', component: BankeditComponent, canActivate: [GuardGuard] },            
      { path: 'category', component: CategoryviewComponent, canActivate: [GuardGuard] },
      { path: 'withdrawlRequest', component: WithdrawrequestsComponent, canActivate: [GuardGuard] },
      { path: 'withdrawlrequestsView/:id', component: WithdrawlrequestsviewComponent, canActivate: [GuardGuard] },            
      { path: 'transactionsView/:id', component: TransactionsviewComponent, canActivate: [GuardGuard] },      
      { path: 'transactions', component: TransactionsComponent, canActivate: [GuardGuard] },            
      { path: 'ideas', component: IdeasComponent, canActivate: [GuardGuard] },     
      { path: 'settings', component: SettingsComponent, canActivate: [GuardGuard] },            
      { path: 'categoryAdd', component: CategoryaddComponent, canActivate: [GuardGuard] },      
      { path: 'categoryEdit/:id', component: CategoryeditComponent, canActivate: [GuardGuard] },                  
      { path: 'usersView/:id', component: UsersviewComponent, canActivate: [GuardGuard] },
      { path: 'ideasView/:id', component: IdeasviewComponent, canActivate: [GuardGuard] }
      

    ], canActivate: [GuardGuard]
  },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
