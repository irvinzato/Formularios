//Deberia tener una carpeta pages con todos los folders de las pagina "basicos", "dinamicos" y "switches"
//Pero en este caso solo usare una directiva
//Las Directivas tambien deben ser incluidas en el Modulo

import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validators } from '@angular/forms';


@Directive({
    selector: '[customMin][ngModel]',    //El input tiene que tener customMin y ngModel si no no va a entrar a mi directiva
    providers: [{           //Ocupa ciertas dependencias, un provider es como un servicio
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi: true
    }]
})

export class CustomMinDirective implements Validators {
   
    @Input() minimo: number;

    constructor() {
        //console.log("Directiva ", this.minimo);
    }

    validate(control: FormControl) {
        const inputValue = control.value;
        //console.log("inputValue tiene ", inputValue);
        //console.log("minimo tiene ", this.minimo);

        return (inputValue < this.minimo)
                ? {'customMin': true}
                : null;
    }

}