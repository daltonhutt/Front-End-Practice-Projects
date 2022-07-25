import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoworkerDetailsComponent } from './coworker-details.component';

describe('CoworkerDetailsComponent', () => {
  let component: CoworkerDetailsComponent;
  let fixture: ComponentFixture<CoworkerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoworkerDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoworkerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
