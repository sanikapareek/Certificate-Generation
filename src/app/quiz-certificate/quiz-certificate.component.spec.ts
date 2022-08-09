import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCertificateComponent } from './quiz-certificate.component';

describe('QuizCertificateComponent', () => {
  let component: QuizCertificateComponent;
  let fixture: ComponentFixture<QuizCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizCertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
