import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';
import { User } from '../interface/user';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private toastr: ToastrService,
    private _userService: UserService,
    private router: Router) {  }

  ngOnInit(): void {
    
  }

  addUser() {

    //Validamos que el usuario ingrese valores
    if(this.username == '' || this.password == '' || this.confirmPassword == ''){
      this.toastr.error('Todos los campos son obligatorios!', 'Error');
      return;
    }

    //Validamos que las password sean iguales
    if(this.password != this.confirmPassword){
      this.toastr.error('Las password ingresadas son distintas!', 'Error');
      return;
    }

    //Creamos el objeto
    const user: User = {
      username: this.username,
      password: this.password
    } 

    this._userService.signIn(user).subscribe(data => {
      this.toastr.success(`El usuario ${this.username} fue registrado con exito!`, 'Usuario registrado!');
    }, (event : HttpErrorResponse) => {
      if(event.error.msg){
        this.toastr.error(event.error.msg, 'Error');
      }else{
        this.toastr.error('Ocurio un error, comuniquese con el administrador!', 'Error');
      }
    })

  }

  login() {

    // Validamos que el usuario ingrese datos
    if(this.username == '' || this.password == ''){
      this.toastr.error('Todos los campos son obligatorios!', 'Error');
      return;
    }

    // Creamos el body
    const user: User = {
      username: this.username,
      password: this.password
    }
    
    this._userService.login(user).subscribe({
      next: (token) => {
        this.router.navigate(['/dashboard']);
        localStorage.setItem('token', token);
      },
      error: (e: HttpErrorResponse) => {
        this.msjError(e);
      }
    })
  }

  msjError(e: HttpErrorResponse) {
    if(e.error.msg) {
      this.toastr.error(e.error.msg, 'Error');
    } else {
      this.toastr.error('Error, comunicaquese con el administrador!', 'Error');
    }
  }

}
