import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexQuinielaComponent } from './index-quiniela.component';

describe('IndexQuinielaComponent', () => {
  let component: IndexQuinielaComponent;
  let fixture: ComponentFixture<IndexQuinielaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexQuinielaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexQuinielaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
