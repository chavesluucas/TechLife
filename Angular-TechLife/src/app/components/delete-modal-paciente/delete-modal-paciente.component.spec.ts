import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteModalPacienteComponent } from './delete-modal-paciente.component';

describe('DeleteModalPacienteComponent', () => {
  let component: DeleteModalPacienteComponent;
  let fixture: ComponentFixture<DeleteModalPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteModalPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteModalPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
