import { Component, OnInit, Input } from '@angular/core';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-marks-chart',
  templateUrl: './marks-chart.component.html',
  styleUrls: ['./marks-chart.component.css']
})
export class MarksChartComponent implements OnInit {
  isRememberMeChecked: any;
  @Input() nameInput: string[];
  @Input() marksInput: number[];
  @Input() subjectMarks: number[];
 
  showMarks = false;
  title: any;
  width = 650;
  height = 400;
  type = 'LineChart';
  data: any[] = [];
  columnNames: any[] = [];
  clr: any;
  options = {
    // colors:[],
    colors: ["#a52714", "#0000ff", "#E94421", "#BBBE05", "#6ABE05", "#05BE91", "#95706C", "#0D8BA4", "#A40DA4"],
    hAxis: {
      title: 'Subject'
    },
    vAxis: {
      title: 'Marks'
    },
    pointSize: 5
  };
  selectTemp: any;
  selectedStudent: any;
  isCheck = true;
  columnsData: any[] = [];
  marksData: any[] = [];
  columnNameTemp :any[] =[];
  dataTemp :any[] =[];
  columnStudent : any[] = [];
  dataStudent : any[] =[];
  constructor() { }

  //for ngOninit()

  ngOnInit(): void {
    this.getMainGraph();
  }
  
  //for hide and show graph

  checkHideShowGraph(e) {
    this.columnNames = ["Name"];
    this.data = [
      ["AI"],
      ["Python"],
      ["Maths"],
      ["Angular"]
    ];
    this.columnsData.forEach((element, index) => {
      if (index == e.target.id) {
        if (e.target.checked) {
          element.checked = true;
        }
        else {
          element.checked = false;
        }
      }
      if (element.checked) {
        this.columnNames.push(element.name);
      }
    });
     this.marksData.forEach((element, index) => {
      if (index == e.target.id) {
        if (e.target.checked) {
          element.checked = true;
        }
        else {
          element.checked = false;
        }
      }
      if (element.checked) {
        this.data[0].push(element.marks[0]);
        this.data[1].push(element.marks[1]);
        this.data[2].push(element.marks[2]);
        this.data[3].push(element.marks[3]);
      }
    });
    console.log(this.columnNames)
  }

  //for hide and show individual student graph

  checkHideShowStudentGraph(e){
    this.columnNames = ["Name"];
    this.data = [
      ["AI"],
      ["Python"],
      ["Maths"],
      ["Angular"]
    ];
    this.columnStudent.forEach((element, index) => {
      if (index == e.target.id) {
        if (e.target.checked) {
          element.checked = true;
        }
        else {
          element.checked = false;
        }
      }
      if (element.checked) {
        this.columnNames.push(element.name);
      }
    });
     this.dataStudent.forEach((element, index) => {
      if (index == e.target.id) {
        if (e.target.checked) {
          element.checked = true;
        }
        else {
          element.checked = false;
        }
      }
      if (element.checked) {
        this.data[0].push(element.marks[0]);
        this.data[1].push(element.marks[1]);
        this.data[2].push(element.marks[2]);
        this.data[3].push(element.marks[3]);
      }
    });
    console.log(this.columnNames)

  }
//all listed students resultant graph

  getMainGraph() {
    this.title = "All Students marks will be shown here";
   
    this.columnNames = ["Name"];
    this.data = [
      ["AI"],
      ["Python"],
      ["Maths"],
      ["Angular"]
    ];
    let temp;
    let temp1;
    this.nameInput.forEach((name, index) => {
      // this.clr = "#b"+Number(52714+index*6);
      // this.options.colors.push(this.clr)
      this.columnNames.push(name);
      temp = { "name": name, checked: true };
      this.columnsData.push(temp);
      console.log(this.columnNames)
      this.data[0].push(Number(this.subjectMarks[index]["AI"]));
      this.data[1].push(Number(this.subjectMarks[index]["Python"]));
      this.data[2].push(Number(this.subjectMarks[index]["Maths"]));
      this.data[3].push(Number(this.subjectMarks[index]["Angular"]));
      temp1 = {
        "marks": [Number(this.subjectMarks[index]["AI"]),
        Number(this.subjectMarks[index]["Python"]),
        Number(this.subjectMarks[index]["Maths"]),
        Number(this.subjectMarks[index]["Angular"])],
        checked: true
      },
      this.marksData.push(temp1);
    });
    this.columnNameTemp = this.columnNames;
    this.dataTemp = this.data;
   }

  displayMarks() {
    if (!this.showMarks) {
      this.showMarks = true;
    }
  }


  checkShowChart() {
   // if (this.showMarks) {
 // this.columnNames =[];
      // this.data =[];
      this.title = "All Students marks will be shown here";
      console.log(this.columnNameTemp)
      this.columnNames = this.columnNameTemp;
  this.columnsData.forEach(element => {
        element.checked =true;
      });
      //this.isCheck =true;
      this.data = this.dataTemp;
      this.showMarks = false;
     
      //this.getMainGraph();
   // } 
      }

//show the specific student  graph

  showGraph(index) {
    this.columnStudent = [];
    this.dataStudent = [];
    this.selectTemp = ' ';
    this.selectTemp = "Select Student";
    let temp = index;
    this.selectedStudent = index;
    this.title = this.nameInput[index] + "'s marks";
    console.log("vvvvvv", (this.subjectMarks[index]["AI"]))
    console.log("total ttal", this.marksInput[index]);
    this.marksInput.forEach((element, i) => {
      console.log("temp before", temp)
      if (element > this.marksInput[index]) {
        if (element > this.marksInput[temp]) {
          temp = i;
          console.log("temp afer", temp)
        }
      }
    });
    this.columnNames = ["Name", this.nameInput[index] , this.nameInput[temp] ];
    let temp1,temp3;
    // this.columnNames.forEach((element,index) => {
    //   console.log(element)
    for(let i=1;i<this.columnNames.length;i++){
      temp1 = {"name" : this.columnNames[i] ,checked :true }
      this.columnStudent.push(temp1);
      // temp2 = {"name" : this.columnNames[2] ,checked :true }
      // this.columnStudent.push(temp2);
    }
    
    //  });
    
    
    this.data = [
      ["AI", Number(this.subjectMarks[index]["AI"]), Number(this.subjectMarks[temp]["AI"])],
      ["Python", Number(this.subjectMarks[index]["Python"]), Number(this.subjectMarks[temp]["Python"])],
      ["Maths", Number(this.subjectMarks[index]["Maths"]), Number(this.subjectMarks[temp]["Maths"])],
      ["Angular", Number(this.subjectMarks[index]["Angular"]), Number(this.subjectMarks[temp]["Angular"])],
    ]; 
        for (let i=1;i<this.data[0].length;i++)
    {   temp3 = {
        "marks": [Number(this.data[0][i]),
        Number(this.data[1][i]),
        Number(this.data[2][i]),
        Number(this.data[3][i])],
        checked: true
      },
      this.dataStudent.push(temp3);       
  }
  console.log(this.dataStudent)
  }
  printPage(){
    window.print();
  }
  //for dropdown selected students 

  selectedStudentMarks(student) {
    let temp;
    this.columnNames = ["Name", this.nameInput[this.selectedStudent] , student ];
    this.nameInput.forEach((element, i) => {
      if (element == student) {
        temp = i;
        }
    });
    this.columnStudent.pop();
    this.dataStudent.pop();
    let temp2,temp3;    
      temp2 = {"name" : this.columnNames[2] ,checked :true }
      this.columnStudent.push(temp2);
    this.data = [
      ["AI", Number(this.subjectMarks[this.selectedStudent]["AI"]), Number(this.subjectMarks[temp]["AI"])],
      ["Python", Number(this.subjectMarks[this.selectedStudent]["Python"]), Number(this.subjectMarks[temp]["Python"])],
      ["Maths", Number(this.subjectMarks[this.selectedStudent]["Maths"]), Number(this.subjectMarks[temp]["Maths"])],
      ["Angular", Number(this.subjectMarks[this.selectedStudent]["Angular"]), Number(this.subjectMarks[temp]["Angular"])],
    ];
    temp3 = {
      "marks": [Number(this.data[0][2]),
      Number(this.data[1][2]),
      Number(this.data[2][2]),
      Number(this.data[3][2])],
      checked: true
    },
    this.dataStudent.push(temp3); 
    console.log(this.dataStudent)
  }
}

//trial

 // names :any[] =[
  //   {name:'hani',checked :true},
  //   {name:'hi',checked :true},
  //   {name:'ani',checked :true},
  //   {name:'pni',checked :true}
  // ]

  // checkHideShowGraph(e){
  //   this.columnNames = ["Name"] ;

  //   this.data = [
  //     ["AI"],
  //     ["Python"],
  //     ["Maths"],
  //     ["Angular"]
  //   ];

  //   if(!e.target.checked){
  //     console.log("not checked")


  //    console.log("checked",e.target.id)
  //    this.nameInput.forEach((name, index ) => {

  //     console.log(e.target.id , index)
  //     // if((index-1) == e.target.id){
  //     //  console.log(e.target.id,index)
  //     //   // this.columnNames.splice(index,1);
  //     //   // this.data[0].splice(index,1);
  //     //   // this.data[1].splice(index,1);
  //     //   // this.data[2].splice(index,1);
  //     //   // this.data[3].splice(index,1);
  //     //   this.columnNames.pop();
  //     //   console.log(this.columnNames)
  //     //   this.data[0].pop();
  //     //   this.data[1].pop();
  //     //   this.data[2].pop();
  //     //   this.data[3].pop();
  //     // //return;
  //     // }
  //     if(index == e.target.id){
  //       return;
  //     }
  //     this.columnNames.push(name);

  //     this.data[0].push(Number(this.subjectMarks[index]["AI"]));
  //     this.data[1].push(Number(this.subjectMarks[index]["Python"]));
  //     this.data[2].push(Number(this.subjectMarks[index]["Maths"]));
  //     this.data[3].push(Number(this.subjectMarks[index]["Angular"]));


  //   });
  //   localStorage.setItem('ColumnData',JSON.stringify(this.columnNames));

  //   // console.log("ccclm", this.columnNames);
  //   // console.log("data",this.data)
  //   }
  //   else{
  //     // this.columnNames = ["Name"];
  //     // this.data = [
  //     //   ["AI"],
  //     //   ["Python"],
  //     //   ["Maths"],
  //     //   ["Angular"]
  //     // ];
  //    console.log("checked",e.target.id)
  //    this.nameInput.forEach((name, index) => {
  //     // if(index == e.target.id){
  //     //   return;}
  //     this.columnNames.push(name);
  //     console.log("ccclm", this.columnNames);
  //     this.data[0].push(Number(this.subjectMarks[index]["AI"]));
  //     this.data[1].push(Number(this.subjectMarks[index]["Python"]));
  //     this.data[2].push(Number(this.subjectMarks[index]["Maths"]));
  //     this.data[3].push(Number(this.subjectMarks[index]["Angular"]));


  //   });
  //   localStorage.setItem('ColumnData',JSON.stringify(this.columnNames));

  //   }
  // //}
  // }


  
  //for demo
  //clmnData :any[];

  // checkShowGraph(e){
  //   this.clmnData = [] ;
  //   console.log("clm",this.columnNames)
  //   console.log('dat',this.data)
  //   this.names.forEach((element,index)=> {
  //     if(index == e.target.id){
  //     if(e.target.checked)
  //     {
  //             element.checked =true;


  //     }
  //     else{
  //       element.checked = false;
  //     }
  //     // if(element.checked){
  //     //   this.clmnData.push(element);
  //     // }
  //   }

  //       if(element.checked){
  //         this.clmnData.push(element);
  //       }


  //   });
  //  // console.log(this.clmnData)
  //   // this.names.forEach(element => {
  //   //   if(element.checked){
  //   //     this.clmnData.push(element.name)
  //   //   }

  //   // });
  //   console.log(this.clmnData)
  // }