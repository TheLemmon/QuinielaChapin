import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuinielaFormComponent } from './quiniela-form.component';

describe('QuinielaFormComponent', () => {
  let component: QuinielaFormComponent;
  let fixture: ComponentFixture<QuinielaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuinielaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuinielaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
