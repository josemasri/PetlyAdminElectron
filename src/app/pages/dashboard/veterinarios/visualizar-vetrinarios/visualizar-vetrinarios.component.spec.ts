import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarVetrinariosComponent } from './visualizar-vetrinarios.component';

describe('VisualizarVetrinariosComponent', () => {
  let component: VisualizarVetrinariosComponent;
  let fixture: ComponentFixture<VisualizarVetrinariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarVetrinariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarVetrinariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
