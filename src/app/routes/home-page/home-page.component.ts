import { Component, OnInit } from '@angular/core';
import { MerchantService } from "../../services/merchant/merchant.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  providers: [ MerchantService ]
})
export class HomePageComponent implements OnInit {

  public merchantCollection: Array<any>

  constructor(
    private MerchantService: MerchantService
  ) { }

  private getMerchantList = () => {
    this.MerchantService.getItems()
    .then( apiResponse => this.merchantCollection = apiResponse.data)
    .catch( apiResponse => console.error(apiResponse) )
  }

  ngOnInit() {
    this.getMerchantList()
  }

}
