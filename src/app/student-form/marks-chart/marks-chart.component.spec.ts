import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksChartComponent } from './marks-chart.component';

describe('MarksChartComponent', () => {
  let component: MarksChartComponent;
  let fixture: ComponentFixture<MarksChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarksChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarksChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
