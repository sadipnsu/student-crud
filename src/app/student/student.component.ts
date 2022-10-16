import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { studentdata } from './pwd.model';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  //hide
  showadd! : boolean;
  showupdate! : boolean;
  studentmodelobj:studentdata = new studentdata


  formValue! : FormGroup;
  constructor(private formBuilder: FormBuilder, private api:ApiService) { }
  inputArray: studentdata[] = [];

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      city: ['', Validators.required],
    })
  }

  add(){
    this.showadd = true;
    this.showupdate = false;
  }

  update(){
    this.showadd = false;
    this.showupdate = true;
  }

  addPwd(){
    this.studentmodelobj.name = this.formValue.value.name;
    this.studentmodelobj.email = this.formValue.value.email;
    this.studentmodelobj.mobile = this.formValue.value.mobile;
    this.studentmodelobj.city = this.formValue.value.city;
    
    this.inputArray.push(this.studentmodelobj);
    // this.api.postPWD(this.studentmodelobj).subscribe(res=>{
    //   console.log(res)
    //   alert("Record Added Successfully");
    // },
    // err=>{
    //   alert('Something went wrong');
    // }
    
  }

pwdDelete(id:number){
    this.inputArray = this.inputArray.filter(item => item.id !== id);
}

  
}
