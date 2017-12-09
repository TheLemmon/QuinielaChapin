import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuinielaComponent } from './quiniela.component';

describe('QuinielaComponent', () => {
  let component: QuinielaComponent;
  let fixture: ComponentFixture<QuinielaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuinielaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuinielaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
