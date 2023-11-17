import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  listProduct: Product[] = [];

  constructor (private router: Router,
              private _productService: ProductService
              ) {  }

  ngOnInit(): void {
    this.getProduct();
    // this.getUsers();
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

  analitica() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getProduct() { 
    this._productService.getProduct().subscribe(data => {
      this.listProduct = data;
    })
  }

}
