import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  //Se añadio a la vesion 8 en adelante el argumento "{ static: true }" mas info en:  https://angular.io/api/core/ViewChild#description
  @ViewChild ('miFormulario', { static: true } ) miFormulario!: NgForm;

  initForm = {    //Para darle valores por defecto al formulario, solo hacemos ahora en el HTML [ngModel]="producto", etc
    producto: 'RX-12',
    precio: 1000,
    existencias: 2
  }
  

  constructor() { }

  ngOnInit() {
  }

  nombreValido(): boolean {  //Algunas versiones de Tys no leen esta anotacion "this.miFormulario.controls.producto?.invalid" por lo que puede salir un error en la consola, por el "?." Sin embargo funciona, pero la consola del navegador puede dar ese detalle como error
    return this.miFormulario.controls.producto.invalid
           && this.miFormulario.controls.producto.touched;
  }

  precioValido(): boolean { //Lo mismo del "?."
    return this.miFormulario.controls.precio.touched &&
           (this.miFormulario.controls.precio.value<0);
  }

  //guardar(miFormulario: NgForm) {
  guardar() {
    console.log("valor de variable, miFormulario ", this.miFormulario);
    this.miFormulario.resetForm();  //Para limpiar el formulario
  }

}
