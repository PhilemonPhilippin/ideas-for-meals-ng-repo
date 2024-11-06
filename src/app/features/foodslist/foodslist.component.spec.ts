import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodslistComponent } from './foodslist.component';

describe('FoodslistComponent', () => {
  let component: FoodslistComponent;
  let fixture: ComponentFixture<FoodslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
