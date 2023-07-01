import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms'

@Component({
  selector: 'app-website-content',
  templateUrl: './website-content.component.html',
  styleUrls: ['./website-content.component.css']
})
export class WebsiteContentComponent {
  websiteContent : FormGroup ;
  status : boolean = false ;
  message : string ="" ;
  constructor(private formBuilder : FormBuilder)
  {
    this.websiteContent = formBuilder.group(
                          {
                            webAppName : new FormControl('',Validators.required),
                            homePageWelcome : new FormControl('',Validators.required),
                            homePageCaption : new FormControl('',Validators.required),
                            aboutUsCaption : new FormControl('',Validators.required),
                            aboutUsHeader : new FormControl('',Validators.required),
                            aboutUsFooter : new FormControl('',Validators.required),
                            aboutUsPoints : new FormArray([formBuilder.group({
                              pont: new FormControl()})]),
                            ourServicesCaption: new FormControl('',Validators.required),
                            allOurServices: new FormArray([formBuilder.group({
                              serviceTitle: new FormControl(),
                              serviceDesc: new FormControl()})]),
                            ourProductsCaption: new FormControl('',Validators.required),
                            allourProducts: new FormArray([formBuilder.group({
                              productTitle: new FormControl(),
                              productDesc: new FormControl()})]),
                            footerMessage: new FormControl()
                          });
   
  }
  get webAppName(){
    return this.websiteContent.get('webAppName');
  }
  get homePageWelcome(){
    return this.websiteContent.get('homePageWelcome');
  }
  get homePageCaption(){
    return this.websiteContent.get('homePageCaption');
  }
  get aboutUsCaption(){
    return this.websiteContent.get('aboutUsCaption');
  }
  get aboutUsHeader(){
    return this.websiteContent.get('aboutUsHeader');
  }
  get aboutUsFooter(){
    return this.websiteContent.get('aboutUsFooter');
  }
  get ourServicesCaption(){
    return this.websiteContent.get('ourServicesCaption');
  }
  get ourProductsCaption(){
    return this.websiteContent.get('ourProductsCaption');
  }
  get footerMessage(){
    return this.websiteContent.get('footerMessage');
  }
  get aboutUsPoints()
  {
    return this.websiteContent.get('aboutUsPoints') as FormArray;
  }
  addaboutUsPoint($event: any)
  {
    this.aboutUsPoints.push(this.formBuilder.group({
      point: new FormControl()
    }));    
    $event.preventDefault();
  }
  get allOurServices()
  {
    return this.websiteContent.get('allOurServices') as FormArray;
  }
  addService($event: any)
  {
    this.allOurServices.push(this.formBuilder.group({
      serviceTitle: new FormControl(),
      serviceDesc: new FormControl()}));    
    $event.preventDefault();
  }
  get allourProducts()
  {
    return this.websiteContent.get('allourProducts') as FormArray;
  }
  addProduct($event: any)
  {
    this.allourProducts.push(this.formBuilder.group({
      productTitle: new FormControl(),
      productDesc: new FormControl()}));    
    $event.preventDefault();
  }

  save(){
    this.status = true;
    this.message = "Content updated successfully";
  }

}
