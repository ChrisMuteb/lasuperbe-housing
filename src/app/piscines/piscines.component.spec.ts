import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiscinesComponent } from './piscines.component';

describe('PiscinesComponent', () => {
  let component: PiscinesComponent;
  let fixture: ComponentFixture<PiscinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PiscinesComponent]
    });
    fixture = TestBed.createComponent(PiscinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
