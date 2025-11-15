import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChocolateCardsComponent } from './chocolate-cards.component';

describe('ChocolateCardsComponent', () => {
  let component: ChocolateCardsComponent;
  let fixture: ComponentFixture<ChocolateCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChocolateCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChocolateCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
