import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-marks-chart',
  templateUrl: './marks-chart.component.html',
  styleUrls: ['./marks-chart.component.css']
})
export class MarksChartComponent implements OnInit {

  @Input() nameInput :string[];
  @Input() marksInput :number[] ;
  @Input() subjectMarks :number[];
  showMarks = false;
  title:any;
  width = 550;
  height = 400;
  type = 'LineChart';
  data : any[]=[];
  columnNames = ["Name", "Marks"];
  options = {
    colors :['#0A9D9B'],   
     hAxis: {
        title: 'Subject'
     },
     vAxis:{
        title: 'Marks'
     },
   pointSize:5
  };
 
  constructor() { }

  ngOnInit(): void {
    console.log("name",this.nameInput);
    console.log("total",this.marksInput);
    console.log("mra",this.subjectMarks)
  
  }
  displayMarks(){
    if(!this.showMarks){
      this.showMarks = true;
    }
  
  }
  showGraph(index){
  this.title = this.nameInput[index]+"'s marks";
  console.log("vvvvvv",(this.subjectMarks[index]["AI"]))
 this.data = [
       ["AI",Number(this.subjectMarks[index]["AI"]) ],
       ["Python", Number( this.subjectMarks[index]["Python"])],
       ["Maths",  Number(this.subjectMarks[index]["Maths"])],
       ["Angular",  Number(this.subjectMarks[index]["Angular"])],
      
  ];
    
  }
 
}
