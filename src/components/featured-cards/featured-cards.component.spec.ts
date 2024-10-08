import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedCardsComponent } from './featured-cards.component';

describe('FeaturedCardsComponent', () => {
  let component: FeaturedCardsComponent;
  let fixture: ComponentFixture<FeaturedCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturedCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
