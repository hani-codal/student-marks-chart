import { Component, OnInit, Input } from '@angular/core';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';
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
  columnNames :any[];
  options = {
    colors:["#a52714", "#0000ff"],   
     hAxis: {
        title: 'Subject'
     },
     vAxis:{
        title: 'Marks'
     },
   pointSize:5
  };
  selectTemp:any;
  selectedStudent:any;
 
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
    this.selectTemp = ' ';
    this.selectTemp = "Select Student";
    let temp =index;
    this.selectedStudent = index;
  this.title = this.nameInput[index]+"'s marks";
  
  console.log("vvvvvv",(this.subjectMarks[index]["AI"]))
  console.log("total ttal",this.marksInput[index]);
  this.marksInput.forEach((element,i) => {
    
    console.log("temp before",temp)
    if(element>this.marksInput[index]){
      if(element>this.marksInput[temp]){
      temp = i;
      console.log("temp afer",temp)}
    }
    
  });
  console.log("ss",this.selectTemp)
   
    this.columnNames = ["Name", this.nameInput[index]+"'s marks",this.nameInput[temp]+"'s marks"];
    
  
  this.data = [
       ["AI",Number(this.subjectMarks[index]["AI"]),Number(this.subjectMarks[temp]["AI"]) ],
       ["Python", Number( this.subjectMarks[index]["Python"]), Number( this.subjectMarks[temp]["Python"])],
       ["Maths",  Number(this.subjectMarks[index]["Maths"]), Number(this.subjectMarks[temp]["Maths"])],
       ["Angular",  Number(this.subjectMarks[index]["Angular"]),Number(this.subjectMarks[temp]["Angular"])],

  ];
    
  }

  selectedStudentMarks(student){
    let temp;
    this.columnNames = ["Name", this.nameInput[this.selectedStudent]+"'s marks",student+"'s marks"];
     this.nameInput.forEach((element,i) => {
      if(element == student){
        temp =i;
        
      }
    });
  
    this.data = [
         ["AI",Number(this.subjectMarks[this.selectedStudent]["AI"]),Number(this.subjectMarks[temp]["AI"]) ],
         ["Python", Number( this.subjectMarks[this.selectedStudent]["Python"]), Number( this.subjectMarks[temp]["Python"])],
         ["Maths",  Number(this.subjectMarks[this.selectedStudent]["Maths"]), Number(this.subjectMarks[temp]["Maths"])],
         ["Angular",  Number(this.subjectMarks[this.selectedStudent]["Angular"]),Number(this.subjectMarks[temp]["Angular"])],
  
    ];
    
  }
 
}
