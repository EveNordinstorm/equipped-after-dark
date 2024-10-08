import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeInspiredComponent } from './be-inspired.component';

describe('BeInspiredComponent', () => {
  let component: BeInspiredComponent;
  let fixture: ComponentFixture<BeInspiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeInspiredComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeInspiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
