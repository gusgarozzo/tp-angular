import { Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { MovieListComponent } from './movie-list/movie-list.component';

export const appRoutes: Routes = [
    {path : '', component : MovieListComponent},
    {path : 'movies', component : MovieListComponent},
    {path : 'contacto', component : ContactoComponent}
    
]