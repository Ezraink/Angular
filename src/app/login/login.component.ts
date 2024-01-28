import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormGroup, FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  LoginFrm : FormGroup;

  
  constructor(private formBuilder : FormBuilder) {
    this.LoginFrm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  }); 
  }

  ngOnInit() {

    }
}
