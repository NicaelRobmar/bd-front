import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParticipantesRoutingModule } from './participantes-routing.module';
import { ParticipantesListaComponent } from './participantes-lista/participantes-lista.component';
import { ParticipantesFormComponent } from './participantes-form/participantes-form.component';


@NgModule({
  declarations: [ParticipantesListaComponent, ParticipantesFormComponent],
  imports: [
    CommonModule,
    ParticipantesRoutingModule
  ]
})
export class ParticipantesModule { }
