import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieCartService } from './movie-cart.service';
import { appRoutes } from './app.routes';
import { AppRoutingModule } from './app-routing.module';
import { InputNumberComponent } from './input-number/input-number.component';
import { CarritoAppComponent } from './carrito-app/carrito-app.component';
import { SinopsisAppComponent } from './sinopsis-app/sinopsis-app.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    InputNumberComponent,
    CarritoAppComponent,
    SinopsisAppComponent,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [ MovieCartService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

