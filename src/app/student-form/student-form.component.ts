import { Component } from '@angular/core';
import { FormBuilder ,Validators, FormGroup } from '@angular/forms';
import {Student,Marks} from './student-form.model';
@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  studentList: any[] = (JSON.parse(localStorage.getItem('StudentList'))) || [];
  //studentList: Student[] = (JSON.parse(localStorage.getItem('StudentList'))) || [];
  // name :string[] = [];
  name ="hani";
  // marks :Marks;
  submitValue = true;
  showError = false;
  AIError = false;
  PyError = false;
  NgError = false;
  MaError = false;
  studentValue : FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder ){}
 
  ngOnInit(){
    this.studentValue = this.fb.group({
      name : ['',Validators.required],
      marks : this.fb.group({
        AI : ['',Validators.required],
        Python : ['',Validators.required],
        Maths : ['',Validators.required],
        Angular: ['',Validators.required]
      })
    
    });
    // this.studentList.forEach(e => {
    //   this.name.push(e.name);
    // });
    // this.name = "hani";
    console.log("nnnnn",this.name)
    // this.studentValue = this.fb.group({
    //     name : ['',Validators.required],
    //      AI : ['',Validators.required],
    //       Python : ['',Validators.required],
    //       Maths : ['',Validators.required],
    //       Angular: ['',Validators.required]       
    //   });
    // console.log("hani");
    // console.log("value", this.studentValue.value.marks)
    // console.log("list",this.studentList[0].Marks)
  }
  onSubmit(){
    this.submitted = true;
    console.log("list",this.studentList);
    this.studentList.push(this.studentValue.value);
    // this.name.push(this.studentValue.value.name);
   // console.log("name",this.name)
    localStorage.setItem('StudentList',JSON.stringify(this.studentList));
    }
    checkAI(event){
      console.log("marks",event.target.value)
      if(!(event.target.value  &&event.target.value >=0 && event.target.value <= 60)){
        this.AIError = true ;
      
      }
      else{
        this.AIError = false;
      }
         }
         checkPython(event){
          console.log("marks",event.target.value)
          if(!(event.target.value  &&event.target.value >=0 && event.target.value <= 60)){
            this.PyError = true ;
          }
          else{
            this.PyError = false;
          }
         
        }
        checkMaths(event){
          console.log("marks",event.target.value)
          if(!(event.target.value  &&event.target.value >=0 && event.target.value <= 60)){
            this.MaError = true ;
          }
          else{
            this.MaError = false;
          }
         
        }
        checkAngular(event){
          console.log("marks",event.target.value)
          if(!(event.target.value  &&event.target.value >=0 && event.target.value <= 60)){
            this.NgError = true ;
          }
          else{
            this.NgError = false;
          }
         
        }
     getSubmitValue(){
       console.log(this.studentValue.value.marks.AI)
       if((this.studentValue.value.name!= 0) 
       && (this.studentValue.value.marks.AI  &&this.studentValue.value.marks.AI >=0 && this.studentValue.value.marks.AI <= 60) 
       &&(this.studentValue.value.marks.Angular  &&this.studentValue.value.marks.Angular >=0 && this.studentValue.value.marks.Angular <= 60) 
    && (this.studentValue.value.marks.Maths  &&this.studentValue.value.marks.Maths >=0 && this.studentValue.value.marks.Maths <= 60) 
    &&(this.studentValue.value.marks.Python  &&this.studentValue.value.marks.Python >=0 && this.studentValue.value.marks.Python <= 60)){
    
        this.submitValue = false;
        console.log("submit value",this.submitValue)
    
    }
    else{
      this.submitValue = true;
    }
    }
  get fval() {
    //console.log("controls",this.studentValue.controls)
   //this.marksfval();
    return this.studentValue.controls;
    }
    
  // get marksfval() {
  //   console.log(" marks controls",this.studentValue.controls)
  //   return this.studentValue[1].controls;
  //   }
}
