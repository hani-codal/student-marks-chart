import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentList: any[] = (JSON.parse(localStorage.getItem('StudentList'))) || [];
  name :string[] = [];
  totalMarks:number[] = [];
  marks:number[] = [];
  constructor() { }

  ngOnInit(): void {
    console.log("lissssst",this.studentList)
    this.studentList.forEach(e => {
      this.name.push(e.name);
      this.marks.push(e.marks);
    });

    this.studentList.forEach(e => {

      this.totalMarks.push(Number(e.marks.AI) +Number(e.marks.Angular)+Number(e.marks.Python)+Number(e.marks.Maths));
    });

    console.log(this.marks)
  }


}
