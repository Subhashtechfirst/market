import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBuyNowComponent } from './update-buy-now.component';

describe('UpdateBuyNowComponent', () => {
  let component: UpdateBuyNowComponent;
  let fixture: ComponentFixture<UpdateBuyNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateBuyNowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBuyNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
