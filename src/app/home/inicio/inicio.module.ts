import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { CabeceraComponent } from '../../components/cabecera/cabecera.component';
import { RouterOutlet } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InicioRoutingModule,
    CabeceraComponent,
    RouterOutlet
  ]
})
export class InicioModule { }
