import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormuarioComponent } from './components/formuario/formuario.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { PersonaComponent } from './components/persona/persona.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ProductoComponent } from './components/producto/producto.component';

const routes: Routes = [
  {path : "persona" , component : PersonaComponent },
  {path : "formulario" , component : FormuarioComponent },
  {path : "producto" , component : ProductoComponent },
  {path : "pedido" , component : PedidoComponent },
  {path : "principal" , component : PrincipalComponent },
  {path : "**" , component : PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
