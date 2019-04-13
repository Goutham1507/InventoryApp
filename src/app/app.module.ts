import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{AuthService} from './auth.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router'
import {AuthGuard} from './auth.guard'
import{UserService} from './user.service'
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    LogoutComponent,
    DashboardComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
    {
      path:'login',
      component:LoginComponent
    },
    {
      path:'admin',
      component:AdminComponent,
     canActivate:[AuthGuard]
    },
    {
      path:'logout',
      component:LogoutComponent

    },
    {
      path:'dashboard',
      component:DashboardComponent

    },
    {
      path:'register',
      component:RegisterComponent

    },
    {
      path:'',
      component:HomeComponent

  }
  ])
    
  ],
  providers: [AuthService,AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
