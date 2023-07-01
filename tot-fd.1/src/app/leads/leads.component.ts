import { Component } from '@angular/core';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent {
  leads: any[];
  constructor(){
    this.leads = [
      {sno:1, name:'Vijay', mobileNo:945098450, email:'a@a.com', date:'12-march-2023', status:'new'},
      {sno:1, name:'Vijay', mobileNo:945098450, email:'a@a2.com', date:'11-march-2023', status:'opened'},
      {sno:1, name:'Vijay', mobileNo:945098450, email:'a3@a.com', date:'11-march-2023', status:'new'},
      {sno:1, name:'Vijay', mobileNo:945098450, email:'a@a3.com', date:'10-march-2023', status:'processed'},
      {sno:1, name:'Vijay', mobileNo:945098450, email:'a4@a.com', date:'10-march-2023', status:'new'},
      {sno:1, name:'Vijay', mobileNo:945098450, email:'a@a4.com', date:'09-march-2023', status:'closed'}      
    ];
  }
}
