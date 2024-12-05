import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeIdeaComponent } from './recipe-idea.component';

describe('RecipeIdeaComponent', () => {
  let component: RecipeIdeaComponent;
  let fixture: ComponentFixture<RecipeIdeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeIdeaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
