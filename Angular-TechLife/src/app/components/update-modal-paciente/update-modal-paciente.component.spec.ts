import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateModalPacienteComponent } from './update-modal-paciente.component';

describe('UpdateModalPacienteComponent', () => {
  let component: UpdateModalPacienteComponent;
  let fixture: ComponentFixture<UpdateModalPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateModalPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateModalPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
