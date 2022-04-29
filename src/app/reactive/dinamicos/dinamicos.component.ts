import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: [ , [ Validators.required, Validators.minLength(3) ] ],
    favoritos: this.fb.array( [
      ['Smite'   , Validators.required ],
      ['Halo'    , Validators.required],
      ['Brawhala', Validators.required],
    ], [ Validators.required, Validators.minLength(2) ] )
  });

  //Creo esta nueva variable de tipo FormControl por que no sera parte de mi formulario pero la ocupo para añadirle al campo favoritos
  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  //Creando este get puedo quitar el texto espantoso del HTML, solo indicando cual es el valor de mi objeto y con el "as" ayudandole diciendo que tipo es
  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
  }
  
  campoNoValido(campo: string) {
    return this.miFormulario.controls[campo].errors
          && this.miFormulario.controls[campo].touched;
  }

  agregarFavorito() {
    if(this.nuevoFavorito.invalid){ return; }
    
    //Puedo volver a usar el get para obtener su referencia a favoritos y en el push tambien podria usar "this.fb.control()", ejemplo abajo
    //Aparte de añadir su valor tambien añado la validacion required para que no deje mandar el formulario con el campo vacio
    this.favoritosArr.push( this.fb.control( this.nuevoFavorito.value, Validators.required ));
    //this.favoritosArr.push( new FormControl(this.nuevoFavorito.value, Validators.required) );
    this.nuevoFavorito.reset();
  }

  borrar(i: number) {   //Borra bien pero hay una restriccion en "miFormulario" que el array "favoritos" debe ser required, hay que atender
    this.favoritosArr.removeAt(i);
  }

  guardar() {
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log("Valor del fomrulario value ", this.miFormulario.value);
  }

}
