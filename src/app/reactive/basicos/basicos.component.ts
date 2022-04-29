import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  //Nombre de mi fomulario inicializado, ahora debo pasarselo a mi HTML
 /*  miFormulario: FormGroup = new FormGroup({
    nombreProducto: new FormControl('RTX 4563'),   //Entre parentesis es el valor que tendra por defecto y es el mismo que debe tener el HTML
    precio        : new FormControl(1500),
    existencias   : new FormControl(5)
  }) */



  miFormulario: FormGroup = this.fb.group({
    nombreProducto: [ , [ Validators.required, Validators.minLength(3) ] ],
    precio        : [ , [ Validators.required, Validators.min(0) ] ],
    existencias   : [ , [ Validators.required, Validators.min(0) ]]
  })

              //Puedo utilizar FormBuilder para formularios mas complejos, es practicamente lo mismo que "new FormGroup()" pero mas legible, queda a gusto de cada uno
  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    //Por si necesito inicializar los campos de mi formulario setValue, pero todos los valores del objeto deben venir
    this.miFormulario.reset({  //Por eso mejor ocupo reset, aqui puedo poner los que quiera
      nombreProducto: 'RTW ASDS',   
      precio: 1200
    })
  }

  campoNoValido(campo: string) {
    return this.miFormulario.controls[campo].errors
          && this.miFormulario.controls[campo].touched;
  }

  guardar() {
    //Otra manera de ver si es invalido el formulario, o podemos poner el [disabled]="miFormulario.invalid" en el HTML
    if(this.miFormulario.invalid){  
      this.miFormulario.markAllAsTouched();   //Metodo para que toque todos los campos
      return;
    }
    console.log("Mi Formulario value es ", this.miFormulario.value);
    this.miFormulario.reset();        //Metodo para resetear todo el formulario
  }

}
