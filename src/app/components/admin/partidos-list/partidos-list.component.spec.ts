import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidosListComponent } from './partidos-list.component';

describe('PartidosListComponent', () => {
  let component: PartidosListComponent;
  let fixture: ComponentFixture<PartidosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartidosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
