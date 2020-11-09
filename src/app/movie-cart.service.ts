import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movies } from './movie-list/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieCartService {

  private _cartList: Movies[] = [];
  cartList: BehaviorSubject<Movies[]> = new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(movie: Movies) {
    let item: Movies = this._cartList.find((v1)=>v1.titulo == movie.titulo);
    if(!item){
      this._cartList.push({ ... movie})
    } else{
      item.cantidad += movie.cantidad;
    }
    this.cartList.next(this._cartList);
    
  }

  getMovies(movie: Movies){
    let item: Movies = this._cartList.find((v1)=>v1.titulo == movie.titulo);
    if(!item){
      this._cartList.push({ ... movie})
    }
    this.cartList.next(this._cartList);
  }

  
}
