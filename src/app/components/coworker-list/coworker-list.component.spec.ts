import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoworkerListComponent } from './coworker-list.component';

describe('CoworkerListComponent', () => {
  let component: CoworkerListComponent;
  let fixture: ComponentFixture<CoworkerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoworkerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoworkerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
