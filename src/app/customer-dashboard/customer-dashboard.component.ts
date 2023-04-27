import { EditCustomerComponent } from './../edit-customer/edit-customer.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss'],
})
export class CustomerDashboardComponent implements OnInit {
  customer!:any;
  // customer = {
  //   fist_name: 'Harsh',
  //   last_name: 'Kushwah',
  //   address: 'Indore',
  //   city: 'Indore',
  //   gender: 'Female',
  //   age: 0,
  //   state: 'MP',
  //   contact_no: 54745,
  //   addhar_card: 554454,
  //   email: 'harsh@gmail.com',
  //   salary: 500,
  //   date_of_birth: '2020-05-01',
  //   password: 'admin',
  //   credit_score: 0,
  // };
 

  constructor(private customerService:CustomerService,private dialog: MatDialog,private http:HttpClient) { }

  ngOnInit(): void {
   this.customerService.Customersubject.subscribe(res=>{
    if(res){
    this.http.get<any>(`http://localhost:5083/getCustomer/${res.custId}`).subscribe(res=>{
    this.customer=res;
    })
  }
  })
}

openEditModal(customer: any) {
  const dialogRef = this.dialog.open(EditCustomerComponent, {
    data: customer,
    panelClass: 'editComp',
    height: '600px',
    width: '550px',
  });

  dialogRef.afterClosed().subscribe((result) => {
    console.log('The dialog was closed');
  });
}
}
