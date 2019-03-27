import { Component, OnInit } from '@angular/core';
import { ParticipanteService} from 'src/app/participante.service';
import { Participante } from 'src/app/participante.model';

@Component({
  selector: 'app-participante-list',
  templateUrl: './participante-list.component.html',
  styleUrls: ['./participante-list.component.css']
})

export class ParticipanteListComponent implements OnInit {
  participantes: Participante[];

  constructor(private participanteService: ParticipanteService) { }

  ngOnInit() {
    this.participanteService.getParticipantes().subscribe(data => {
      this.participantes = data.map(e => {
        return {
          parId: e.payload.doc.id,
          ... e.payload.doc.data()
        } as Participante;
      })
    })
  }
  create(participante: Participante){
    this.participanteService.createParticipante(participante);
  }
  update(participante: Participante){
    this.participanteService.updateParticipante(participante);
  }
  delete(id: String){
    this.participanteService.deleteParticipante(id);
  }

}
