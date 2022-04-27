import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombreFav: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})

export class DinamicosComponent implements OnInit {

  nuevoJuego: string = '';

  persona1: Persona = {
    nombre: 'Irving',
    favoritos: [
      {id: 1, nombreFav: 'Smite' },
      {id: 2, nombreFav: 'Metal Slug' }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

  guardar(miFormulario: NgForm) {
    console.log("Formulario accionado, el formulario trae ", miFormulario.value);
  }

  agregar() {
    console.log("Valor de variable nuevoJuego ", this.nuevoJuego);
    const nuevoFavorito: Favorito = {
      id: this.persona1.favoritos.length + 1,
      nombreFav: this.nuevoJuego
    }

    this.persona1.favoritos.push(nuevoFavorito); //Podria usar para asegurar {...nuevoFavorito}
    this.nuevoJuego = '';
  }

  borrar(index: number) {
    this.persona1.favoritos.splice(index,1);
  }


}
