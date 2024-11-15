import { TestBed } from '@angular/core/testing';

import { IdeaForMealService } from './idea-for-meal.service';

describe('IdeaForMealService', () => {
  let service: IdeaForMealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdeaForMealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
