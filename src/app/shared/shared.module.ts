import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidemenuComponent } from './sidemenu/sidemenu.component';

//El modulo "shared" contendra componentes de manera global en la aplicacion

@NgModule({
  declarations: [
    SidemenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [  //Debemos exportar todo lo que queremos que sea publico fuera de este modulo(SI NO EXPORTAMOS NADA NO SERA VISIBLE NADA DE ESTE MODULO)
    SidemenuComponent
  ]
})
export class SharedModule { }
