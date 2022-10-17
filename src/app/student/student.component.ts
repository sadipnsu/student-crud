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
    let newData: studentdata = new studentdata;    
    newData.name = this.formValue.value.name;
    newData.email = this.formValue.value.email;
    newData.mobile = this.formValue.value.mobile;
    newData.city = this.formValue.value.city;
    
    this.inputArray.push(newData);

    
  }

pwdDelete(element: studentdata){
    this.inputArray.forEach((value,index)=>{
      if(value==element){
        this.inputArray.splice(index,1);
      }
    });
}

  
}
