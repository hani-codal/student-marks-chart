import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-marks-chart',
  templateUrl: './marks-chart.component.html',
  styleUrls: ['./marks-chart.component.css']
})
export class MarksChartComponent implements OnInit {

  @Input() nameInput :string;

  constructor() { }

  ngOnInit(): void {
    console.log("name",this.nameInput)
  }

}
