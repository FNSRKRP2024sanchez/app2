import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimecardComponent } from './animecard.component';

describe('AnimecardComponent', () => {
  let component: AnimecardComponent;
  let fixture: ComponentFixture<AnimecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimecardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
