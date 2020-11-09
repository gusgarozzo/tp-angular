import { isNull } from '@angular/compiler/src/output/output_ast';
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
    sinopsis: "Una monja se suicida en una abadía rumana y el Vaticano envía a un sacerdote y una novicia a investigar lo sucedido. Lo que ambos encuentran allá es un secreto perverso que los enfrentará cara a cara con el mal en su esencia más pura."
  },
  {
    img: 'assets/img/toystory.jpg',
    titulo : "Toy Story 3",
    clasificacion : "ATP",
    duracion : "120 min",
    precio : 250,
    stock: 5,
    cantidad: 0,
    sinopsis: "Cuando su dueño Andy se prepara para ir a la universidad, el vaquero Woody, el astronauta Buzz y el resto de sus amigos juguetes comienzan a preocuparse por su incierto futuro. Todos acaban en una guardería donde comenzarán una serie de trepidantes y divertidas aventuras."
  },
  {
    img: 'assets/img/thebatman.jpg',
    titulo : "The Batman",
    clasificacion : "Mayores de 13",
    duracion : "120 min",
    precio : 250,
    stock: 15,
    cantidad: 0,
    sinopsis: "Nuevo reinicio del popular personaje de DC Comics, Batman, que desarrollará en los comienzos del cruzado de la capa de Gotham con Robert Pattinson en el papel de Bruce Wayne / Batman. Esta historia contará con varios villanos icónicos del caballero oscuro"
  },
  {
    img: 'assets/img/fordferrari.jpg',
    titulo : "Ford vs Ferrari",
    clasificacion : "ATP",
    duracion : "153 min",
    precio : 250,
    stock: 10,
    cantidad: 0,
    sinopsis: "El visionario automovilístico Carroll Shelby y su conductor británico Ken Miles reciben la misión de construir un nuevo automóvil con el fin de derrocar el dominio de Ferrari en el Campeonato del Mundo de Le Mans de 1966."
  },
];

  constructor(private cart: MovieCartService) { }

  ngOnInit(): void {
  }

  addToCart(movie){
    if (movie.cantidad === 0){
      alert("La cantidad tiene que ser mayor a cero");
    }else{
      this.cart.addToCart(movie);
      movie.stock -= movie.cantidad; // a stock le resta la cantidad
      movie.cantidad = 0; // reinicia cantidad para la próxima compra
      this.getMovies(movie);
    }

  }

  maxReached(m: string){
    alert(m);
  }

  getMovies(movie){    
      this.cart.getMovies(movie);
  }

    
  
}
