import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconiquesComponent } from './iconiques.component';

describe('IconiquesComponent', () => {
  let component: IconiquesComponent;
  let fixture: ComponentFixture<IconiquesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconiquesComponent]
    });
    fixture = TestBed.createComponent(IconiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
