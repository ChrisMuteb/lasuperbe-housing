import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiedpistesComponent } from './piedpistes.component';

describe('PiedpistesComponent', () => {
  let component: PiedpistesComponent;
  let fixture: ComponentFixture<PiedpistesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PiedpistesComponent]
    });
    fixture = TestBed.createComponent(PiedpistesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
