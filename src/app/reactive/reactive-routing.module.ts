import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwitchesComponent } from './switches/switches.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { BasicosComponent } from './basicos/basicos.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'basicos', component: BasicosComponent },
      { path: 'dinamicos', component: DinamicosComponent },
      { path: 'switches', component: SwitchesComponent },
      { path: '**', redirectTo: 'basicos' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
  /*Lo mismo, no ocupamos la exportacion
  ,exports: [
    RouterModule
  ] */
})
export class ReactiveRoutingModule { }
