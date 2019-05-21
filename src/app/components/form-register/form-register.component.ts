import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styles: []
})
export class FormRegisterComponent implements OnInit {

  public formData: FormGroup;

  constructor(
    private FormBuilder: FormBuilder
  ) {}

  private resetForm = () => {
    this.formData = this.FormBuilder.group({
      first_name: ['toto', Validators.required],
      last_name: ['tutu', Validators.required],
      email: ['toto@hetic.net', Validators.required],
      password: ['123456', Validators.required],
      password_repeate: ['123456', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      birthdate: ['', Validators.required],
      position: ['NULL', Validators.required],
      profil: ['admin', Validators.required],
      cgu: [false, Validators.required]
    })
  }

  public submitForm = () => {
    console.log(this.formData);
  }

  ngOnInit() {
    this.resetForm();
  }

}
