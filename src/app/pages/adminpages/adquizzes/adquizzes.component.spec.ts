import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdquizzesComponent } from './adquizzes.component';

describe('AdquizzesComponent', () => {
  let component: AdquizzesComponent;
  let fixture: ComponentFixture<AdquizzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdquizzesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdquizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
