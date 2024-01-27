import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaliluHomepageComponent } from './nalilu-homepage.component';

describe('NaliluHomepageComponent', () => {
  let component: NaliluHomepageComponent;
  let fixture: ComponentFixture<NaliluHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaliluHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaliluHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
