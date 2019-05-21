import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth/auth.service";
import { UserModel } from "../../models/user.model";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: []
})
export class RegisterPageComponent implements OnInit {

  constructor(
    private AuthService: AuthService
  ) { }

  private registerUser = ( userdata: UserModel ) => {
    this.AuthService.register(userdata)
    .then( apiResponse => console.log(apiResponse) )
    .catch( apiResponse => console.error(apiResponse) )
  }

  ngOnInit() {
  }

}
