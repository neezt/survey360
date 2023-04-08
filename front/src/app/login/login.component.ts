import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

  login:any ={
    correo: null,
    password: null
  }
  constructor(private authService:AuthService, private router: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      window.location.href = "/";
    }
  }

  public enviar(){
    this.authService.login(this.login.correo,this.login.password).subscribe(
      data=>{
        if(data){
          localStorage.setItem('token', data.token);
          window.location.href = "/";
        } else{
          this.toastr.error('La contraseña es equivocada', 'Error');
        }
      }
    );

  }

}
