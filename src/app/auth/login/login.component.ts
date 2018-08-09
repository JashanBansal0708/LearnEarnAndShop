import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') form: NgForm;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.form);
    // console.log(this.form.controls.email);
  }

}
