import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsPacienteComponent } from './cards-paciente.component';

describe('CardsPacienteComponent', () => {
  let component: CardsPacienteComponent;
  let fixture: ComponentFixture<CardsPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
