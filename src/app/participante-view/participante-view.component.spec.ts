import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipanteViewComponent } from './participante-view.component';

describe('ParticipanteListComponent', () => {
  let component: ParticipanteViewComponent;
  let fixture: ComponentFixture<ParticipanteViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipanteViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipanteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
