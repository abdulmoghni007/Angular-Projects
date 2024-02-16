import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialarrangementComponent } from './specialarrangement.component';

describe('SpecialarrangementComponent', () => {
  let component: SpecialarrangementComponent;
  let fixture: ComponentFixture<SpecialarrangementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialarrangementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialarrangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
