import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainShellComponent } from './fragments/main-shell/main-shell.component';
import { AuthGuard } from './service/auth.guard';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    path: '',
    component: MainShellComponent,
    children: [
      {
        path: '', pathMatch: 'full',
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'login', pathMatch: 'full',
        component: LoginComponent
      },
      {
        path: 'logout', pathMatch: 'full',
        component: LogoutComponent
      },

    ]
  }]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }