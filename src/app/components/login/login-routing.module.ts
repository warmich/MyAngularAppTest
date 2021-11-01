import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { AuthService } from 'src/app/services/auth.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthService
  ]
})
export class LoginRoutingModule { }
