import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaForMealComponent } from './idea-for-meal.component';

describe('IdeaForMealComponent', () => {
  let component: IdeaForMealComponent;
  let fixture: ComponentFixture<IdeaForMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdeaForMealComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdeaForMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
