import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-ganacia',
  templateUrl: './ganancia.component.html',
  styleUrls: ['./ganancia.component.css']
})
export class GananciaComponent implements OnInit{

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

  notificacion() {
    localStorage.removeItem('token');
    this.router.navigate(['/notificacion']);
  }

  analitica() {
    localStorage.removeItem('token');
    this.router.navigate(['/analitica']);
  }

}
