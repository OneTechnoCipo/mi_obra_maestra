import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

import { ServiciosComponent } from './pages/servicios/servicios.component';

import { ProyectosComponent } from './pages/proyectos/proyectos.component';

const routes: Routes = [/* inicio y equipo que van de componentes */
{path:'inicio', component: InicioComponent},
{path:'',component:InicioComponent},
{path:'equipo',component:EquipoComponent},
{path:'contacto',component:ContactoComponent},
{path:'servicios',component:ServiciosComponent},
{path:'proyectos',component:ProyectosComponent},
{path:'**',component:InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
