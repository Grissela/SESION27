import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
//Primero creamos una variable datos
operadores;

valor1!:number;
valor2 !:number;

//aqui el resultado
resultado!:number;

//luego creamos una variable para guardar la opcion selecionada
//contra esta variable vamos con el ngModel
selected: string = '0'; // Iniciamos

//cremoa la variable donde lo guardare
Opcion: string = '';

constructor() {
  this.operadores = ['+', '-', '*', '/'];
}

capturar() {
  this.Opcion = this.selected;
}

calcular() {
  return (this.resultado = eval(this.valor1 + this.Opcion + this.valor2));
}}
