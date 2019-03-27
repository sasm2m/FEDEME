import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ParticipanteListComponent } from './participante-list/participante-list.component';
import { environment } from 'src/environments/environment';
// ya vengo ok
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
// import {CalificacionxparticipanteComponent } from 'calificacionxparticipanteComponent'
import { RouterModule, Routes} from '@angular/router';
import { CalificacionxparticipanteService } from './calificacionxparticipante.service';
const appRoutes: Routes = [
  {
    path: 'participantes',
    component: ParticipanteListComponent,
    data: { title: 'Listado Participantes' }
  },
  /*{
    path: 'calificacion-participante/:id',
    component: CalificacionxparticipanteComponent,
    data: { title: 'Calificación Participante' }
  },
  {
    path: 'scoreboard',
    component: ScoreBoardComponent,
    data: { title: 'ScoreBoard' }
  }*/
];
@NgModule({

  declarations: [
    AppComponent,
    ParticipanteListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
