import { Component, OnInit } from '@angular/core';
import{AuthService} from '../auth/auth.service';
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
  email;
  constructor(private as:AuthService) { }

  ngOnInit(): void {
    console.log("lissssst",this.studentList)
    this.studentList.forEach(e => {
      this.name.push(e.name);
      this.marks.push(e.marks);
    });
this.email = this.as.getEmail();
console.log(this.email)

    this.studentList.forEach(e => {

      this.totalMarks.push(Number(e.marks.AI) +Number(e.marks.Angular)+Number(e.marks.Python)+Number(e.marks.Maths));
    });

    console.log(this.marks)
  }


}
