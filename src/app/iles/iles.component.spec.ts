import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlesComponent } from './iles.component';

describe('IlesComponent', () => {
  let component: IlesComponent;
  let fixture: ComponentFixture<IlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IlesComponent]
    });
    fixture = TestBed.createComponent(IlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
