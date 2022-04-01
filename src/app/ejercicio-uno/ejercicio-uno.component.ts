import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio-uno',
  templateUrl: './ejercicio-uno.component.html',
  styleUrls: ['./ejercicio-uno.component.css']
})
export class EjercicioUnoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'ejercicio-one';
  edadUno ='';
  edadDos = '';
  prom = '';
  suma = '';

  limpiar(){
    this.edadUno = '';
    this.edadDos = '';
    this.prom = '';
    this.suma = '';
  }

  calcular(){
    this.suma= (parseInt(this.edadUno)+parseInt(this.edadDos)).toString();
    this.prom= (parseInt(this.suma)/2).toString();
  }

}
