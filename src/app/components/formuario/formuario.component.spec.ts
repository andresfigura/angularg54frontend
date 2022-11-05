import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuarioComponent } from './formuario.component';

describe('FormuarioComponent', () => {
  let component: FormuarioComponent;
  let fixture: ComponentFixture<FormuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
