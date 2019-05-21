import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styles: []
})
export class FormRegisterComponent implements OnInit {

  public formData: FormGroup;

  @Output() formSubmit = new EventEmitter();

  constructor(
    private FormBuilder: FormBuilder
  ) {}

  private resetForm = () => {
    this.formData = this.FormBuilder.group({
      first_name: ['corentin', Validators.required],
      last_name: ['croizat', Validators.required],
      email: ['corentin@hetic.net', Validators.required],
      password: ['123456', Validators.required],
      password_repeate: ['123456', Validators.required],
      street: ['1 rue toto', Validators.required],
      city: ['toto', Validators.required],
      zip_code: ['91130', Validators.required],
      country: ['France', Validators.required],
      birthdate: ['25/11/1995', Validators.required],
      position: ['NULL', Validators.required],
      type: ['admin', Validators.required],
      cgu: [true, Validators.required]
    })
  }

  public submitForm = () => {
    if (this.formData.value.password === this.formData.value.password_repeate) {
      this.formSubmit.emit(this.formData.value)
    }
  }

  ngOnInit() {
    this.resetForm();
  }

}
