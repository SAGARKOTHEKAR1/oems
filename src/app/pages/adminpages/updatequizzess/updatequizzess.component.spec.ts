import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatequizzessComponent } from './updatequizzess.component';

describe('UpdatequizzessComponent', () => {
  let component: UpdatequizzessComponent;
  let fixture: ComponentFixture<UpdatequizzessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatequizzessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatequizzessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
