import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Participante } from 'src/app/participante.model';

@Injectable({
  providedIn: 'root'
})
export class ParticipanteService {

  constructor(private firestore: AngularFirestore) { }

  getParticipantes() {
    return this.firestore .collection('PARTICIPANTE').snapshotChanges();
  }
  createParticipante(participante: Participante) {
    return this.firestore.collection('PARTICIPANTE').add('participante');
  }

  updateParticipante(participante: Participante){
    delete participante.parId;
    this.firestore.doc('PARTICIPANTE/' + participante.parId).update(participante);
  }

  deleteParticipante(participanteId: String){
    this.firestore.doc('PARTICIPANTE/'+ participanteId).delete();
  }
}
