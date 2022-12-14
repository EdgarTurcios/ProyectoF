import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoLibroComponent } from './tipo-libro.component';

describe('TipoLibroComponent', () => {
  let component: TipoLibroComponent;
  let fixture: ComponentFixture<TipoLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoLibroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
