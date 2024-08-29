import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BordmerComponent } from './bordmer.component';

describe('BordmerComponent', () => {
  let component: BordmerComponent;
  let fixture: ComponentFixture<BordmerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BordmerComponent]
    });
    fixture = TestBed.createComponent(BordmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
