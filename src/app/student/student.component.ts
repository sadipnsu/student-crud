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
  studentmodelobj:studentdata = new studentdata;

  formValue! : FormGroup;
  users: any;
  updateData: any;
  constructor(private formBuilder: FormBuilder, private api:ApiService) { }
  inputArray: studentdata[] = [];

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      id:0,
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

  edit(data:any){
    this.showadd = false;
    this.showupdate = true;
    this.studentmodelobj= data.id;
   console.log('id',data.id);
   
    this.formValue.controls['id'].setValue(data.id);
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['mobile'].setValue(data.mobile);
    this.formValue.controls['city'].setValue(data.city);
  }

  addPwd(){
    let newData: studentdata = new studentdata;
    newData.id = this.inputArray.length+1;   
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

pwdUpdate(){

  let updateData: studentdata = new studentdata;    
  updateData.id= this.formValue.value.id;
  console.log('kkll',updateData.id);
 let updateValue = this.inputArray.find(x=>x.id==updateData.id)
 console.log('yyy',updateValue); 
}

  
}
