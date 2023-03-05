import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { User } from 'src/app/Interfaces';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  updateForm!:FormGroup
  id!:string;
  constructor(private UserService:AuthenticationService){}
  ngOnInit():void{
    this.updateForm = new FormGroup({
      name:new FormControl(null,[Validators.required]),
      email:new FormControl(null,[Validators.required, Validators.email]),
      password:new FormControl(null,[Validators.required])
    })
  }


  updateProfile(){
    console.log(this.updateForm);
    // this.UserService.updateUser({id:this.id,user:this.updateForm.value});
  }

}
