import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieCartService } from '../movie-cart.service';
import { Movies } from '../movie-list/Movie';

@Component({
  selector: 'app-sinopsis-app',
  templateUrl: './sinopsis-app.component.html',
  styleUrls: ['./sinopsis-app.component.scss']
})

export class SinopsisAppComponent implements OnInit {

  cartList$: Observable <Movies[]>;
  constructor(private cart: MovieCartService){
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }


}
