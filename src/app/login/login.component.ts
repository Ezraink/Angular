import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,  Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports:[FormsModule,ReactiveFormsModule,HttpClientModule,HttpClient]
})
export class LoginComponent implements OnInit {
  LoginFrm : FormGroup;

  
  constructor(private formBuilder : FormBuilder) {
    this.LoginFrm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],

  }); 

  }

  ngOnInit() {}
    
  onSubmit() {
      if (this.LoginFrm.valid) {
    
        const apiUrl = 'https://apiurl/login';
        const formData = this.LoginFrm.value;
  }
}
}
