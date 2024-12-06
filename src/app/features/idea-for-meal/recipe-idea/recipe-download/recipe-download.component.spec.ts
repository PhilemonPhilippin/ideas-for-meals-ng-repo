import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDownloadComponent } from './recipe-download.component';

describe('RecipeDownloadComponent', () => {
  let component: RecipeDownloadComponent;
  let fixture: ComponentFixture<RecipeDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeDownloadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
