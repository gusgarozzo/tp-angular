import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieCartService } from '../movie-cart.service';
import { Movies } from '../movie-list/Movie';

@Component({
  selector: 'app-carrito-app',
  templateUrl: './carrito-app.component.html',
  styleUrls: ['./carrito-app.component.scss']
})
export class CarritoAppComponent implements OnInit {

  cartList$: Observable <Movies[]>;
  constructor(private cart: MovieCartService) { 
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }



}
