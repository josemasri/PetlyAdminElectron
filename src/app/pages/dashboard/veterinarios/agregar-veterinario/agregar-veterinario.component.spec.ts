import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarVeterinarioComponent } from './agregar-veterinario.component';

describe('AgregarVeterinarioComponent', () => {
  let component: AgregarVeterinarioComponent;
  let fixture: ComponentFixture<AgregarVeterinarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarVeterinarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
