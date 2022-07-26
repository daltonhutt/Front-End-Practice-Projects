import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoworkerCreateComponent } from './coworker-create.component';

describe('CoworkerCreateComponent', () => {
  let component: CoworkerCreateComponent;
  let fixture: ComponentFixture<CoworkerCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoworkerCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoworkerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
