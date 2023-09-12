import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.css']
})
export class NotificacionComponent implements OnInit{

  constructor (private router: Router) {  }

  ngOnInit(): void {
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  dashboard() {
    localStorage.removeItem('token');
    this.router.navigate(['/dashboard']);
  }

  ganancia() {
    localStorage.removeItem('token');
    this.router.navigate(['/ganancia']);
  }

  analitica() {
    localStorage.removeItem('token');
    this.router.navigate(['/analitica']);
  }

}
