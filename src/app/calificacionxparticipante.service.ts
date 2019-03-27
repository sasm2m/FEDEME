import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Calificacionxparticipante } from 'src/app/calificacionxparticipante.model';
@Injectable({
  providedIn: 'root'
})
export class CalificacionxparticipanteService {

  constructor(private firestore: AngularFirestore) { }

  getCalificaciones(){
      return this.firestore.collection("CALIFICACIONXPARTICIPANTE").snapshotChanges();
  }
  createCalificacion(calificacionxparticipante: Calificacionxparticipante){
    return this.firestore.collection('CALIFICACIONXPARTICIPANTE').add(calificacionxparticipante);
  }

  updateCalificacion(calificacionxparticipante: Calificacionxparticipante){
    delete calificacionxparticipante.parId;
    this.firestore.doc("CALIFICACIONXPARTICIPANTE/"+calificacionxparticipante.parId).update(calificacionxparticipante);
  }
  deleteCalificacion(parID: String){
    this.firestore.doc('CALIFICACIONXPARTICIPANTE/'+parID).delete();
  }
}

