import { Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { CarritoAppComponent } from './carrito-app/carrito-app.component';

export const appRoutes: Routes = [
    {path : '', component : MovieListComponent},
    {path : 'movies', component : MovieListComponent},
    
]