import { EditCustomerComponent } from './../edit-customer/edit-customer.component';
import { CustomerAuthComponent } from './../customer-auth/customer-auth.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerService } from '../service/customer.service';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  custId=new FormControl('');
  cust!:any;
  customers:any[]=[];
  constructor(public dialog: MatDialog,private customerService:CustomerService,private http:HttpClient) {}

  ngOnInit(): void {
this.customerService.customerList().subscribe((res:any)=>{
this.customers=res;
})
  }
  // customers = [
  //   {
  //     fist_name: 'Harsh',
  //     last_name: 'Kushwah',
  //     address: 'Indore',
  //     city: 'Indore',
  //     gender: 'Female',
  //     age: 0,
  //     state: 'MP',
  //     contact_no: 54745,
  //     addhar_card: 554454,
  //     email: 'harsh@gmail.com',
  //     salary: 500,
  //     date_of_birth: '2020-05-01',
  //     password: 'admin',
  //     credit_score: 0,
  //   },
  //   {
  //     fist_name: 'Satyam',
  //     last_name: 'Kumar',
  //     address: 'Indore',
  //     city: 'Indore',
  //     gender: 'Male',
  //     age: 0,
  //     state: 'MP',
  //     contact_no: 54745,
  //     addhar_card: 554454,
  //     email: 'harsh@gmail.com',
  //     salary: 500,
  //     date_of_birth: '2020-05-01',
  //     password: 'admin',
  //     credit_score: 0,
  //   },
  // ];

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
  searchCustomer(){
this.http.get<any>(`http://localhost:5083/getCustomer/${this.custId.value}`).subscribe(res=>{
  this.cust=res;
})
  }
}
