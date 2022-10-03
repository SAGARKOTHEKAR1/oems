import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdcategoriesComponent } from './adcategories.component';

describe('AdcategoriesComponent', () => {
  let component: AdcategoriesComponent;
  let fixture: ComponentFixture<AdcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdcategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
