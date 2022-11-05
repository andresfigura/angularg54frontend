import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { PersonaComponent } from './components/persona/persona.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ProductoComponent } from './components/producto/producto.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormuarioComponent } from './components/formuario/formuario.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PersonaComponent,
    PedidoComponent,
    PrincipalComponent,
    ProductoComponent,
    PageNotFoundComponent,
    FormuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
