import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analitica',
  templateUrl: './analitica.component.html',
  styleUrls: ['./analitica.component.css']
})
export class AnaliticaComponent implements OnInit{

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

  notificacion() {
    localStorage.removeItem('token');
    this.router.navigate(['/notificacion']);
  }
  
  users() {
    localStorage.removeItem('token');
    this.router.navigate(['/users']);
  }

}
