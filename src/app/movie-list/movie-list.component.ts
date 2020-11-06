import { Component, OnInit } from '@angular/core';
import { MovieCartService } from '../movie-cart.service';
import { Movies } from './Movie';



@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  

  movies: Movies[] = [{
    img: 'assets/img/lamonja.jpg',
    titulo : "La Monja",
    clasificacion : "Mayores de 16",
    duracion : "90 min",
    precio : 200,
    stock: 20,
    cantidad: 0,
  },
  {
    img: 'assets/img/toystory.jpg',
    titulo : "Toy Story 3",
    clasificacion : "ATP",
    duracion : "120 min",
    precio : 250,
    stock: 5,
    cantidad: 0,
  },
  {
    img: 'assets/img/thebatman.jpg',
    titulo : "The Batman",
    clasificacion : "Mayores de 13",
    duracion : "120 min",
    precio : 250,
    stock: 15,
    cantidad: 0,
  },
  {
    img: 'assets/img/fordferrari.jpg',
    titulo : "Ford vs Ferrari",
    clasificacion : "ATP",
    duracion : "153 min",
    precio : 250,
    stock: 10,
    cantidad: 0,
  },
];

  constructor(private cart: MovieCartService) { }

  ngOnInit(): void {
  }

  addToCart(movie){
    this.cart.addToCart(movie);
    movie.stock -= movie.cantidad; // a stock le resta la cantidad
    movie.cantidad = 0; // reinicia cantidad para la próxima compra
  }

  maxReached(m: string){
    alert(m);
  }

}
