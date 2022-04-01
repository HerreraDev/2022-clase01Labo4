import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjercicioDosRoutingModule } from './ejercicio-dos-routing.module';
import { LoginComponent } from './components/login/login.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { ErrorComponent } from './components/error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    BienvenidoComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    EjercicioDosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class EjercicioDosModule { }
