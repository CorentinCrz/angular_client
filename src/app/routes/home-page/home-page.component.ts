import { Component, OnInit } from '@angular/core';
import { MerchantService } from "../../services/merchant/merchant.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  providers: [ MerchantService ]
})
export class HomePageComponent implements OnInit {

  public merchantCollection: Array<any>
  public merchantCollectionRow: Array<any>
  public categoriesCollectionSlug: Array<string>
  public categoriesCollection: Array<any>
  public activeCategory: string

  constructor(
    private MerchantService: MerchantService
  ) {
    this.categoriesCollectionSlug = []
    this.categoriesCollection = []
    this.activeCategory = 'all'
  }

  private getMerchantList = () => {
    this.MerchantService.getItems()
    .then( apiResponse => {
      this.getMerchantCategories(apiResponse.data)
      this.merchantCollection = apiResponse.data
      this.merchantCollectionRow = apiResponse.data
    })
    .catch( apiResponse => console.error(apiResponse) )
  }

  private getMerchantCategories = (data: any) => {
    data.map( (item: any) => {
      if (this.categoriesCollectionSlug.indexOf(item.category.slug) === -1){
        this.categoriesCollectionSlug.push(item.category.slug)
        this.categoriesCollection.push(item.category)
      }
    } )
  }

  public sortMerchant = (cat: any) => {
    console.log(this.merchantCollection)
    this.activeCategory = cat.slug
    this.merchantCollection = []
    this.merchantCollectionRow.map( item =>{
      if (item.category.slug === cat.slug){
        this.merchantCollection.push(item)
      }
    })
    //console.log(`%c red comment`, `color: red`)
  }

  ngOnInit() {
    this.getMerchantList()
  }

}
