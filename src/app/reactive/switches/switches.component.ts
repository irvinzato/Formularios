import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {

  //Formulario que utilizo en el HTML
  miFormulario: FormGroup = this.fb.group({
    genero: [ 'M', Validators.required ],
    notificaciones: [ true, Validators.required ],
    condiciones: [ false, Validators.requiredTrue ] //Como paso a ser null, Valido que afuerza sea true
  });

  //Objeto que tiene los datos que me interesan pasar o trabajar
  persona = {
    id: 123,
    genero: 'F',
    notificaciones: true
  }

  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    //Cuando hago este reset los campos que no tenga mi formulario de persona los pasa como "null" por defecto, por lo que debemos tratar esas condiciones
    //Tambien puedo pasarle los campos que no tiene mi objeto y establecer el valor que quiero
    this.miFormulario.reset({
      ...this.persona,
      condiciones: false
    }); 
    //this.miFormulario.reset( this.persona );  //Establezco los valores de mi objeto en mi formulario, los que no estan se vuelven null

    //PARA SABER INMEDIATAMENTE CUANDO CAMBIA SU VALOR
    //this.miFormulario.get('condiciones').valueChanges.subscribe( res => console.log(res) );

    //PARA SABER INMEDIATAMENTE QUE CAMBIA EL VALOR DEL FORMULARIO Y PASARLO AL OBJETO, NO ES MUY COMUN PERO PUEDE SERVIR
    /* this.miFormulario.valueChanges.subscribe( res => {
      delete res.condiciones;
      this.persona = res;
    }); */

  }

  guardar() {

    if(this.miFormulario.invalid){ return; }

    const formValue = this.miFormulario.value;
    delete formValue.condiciones;    //Podria borrar lo que no ocupe de mi formulario y pasarlo a mi objeto

    this.persona = formValue;
    //this.persona.genero = formValue.genero;   //Para mantener variables de mi objeto por que lo de arriba borra las variables que no tiene, como id
    //this.persona.notificaciones = formValue.notificaciones;

    console.log("formValue tiene ", formValue);
    console.log("objeto persona tine ", this.persona);
  }


}
