import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// let ELEMENT_DATA:any[];
// let ELEMENT_DATA = [
//   {
//     paymentTrackId: 1,
//     loanAppId: '1',
//     monthNo: 2,
//     year: 'H',
//     status: 'Valid',
//     dueDateOfPayment: '21-12-2024',
//   },
//   {
//     paymentTrackId: 2,
//     loanAppId: '2',
//     monthNo: 4,
//     year: 'He',
//     status: 'Valid',
//     dueDateOfPayment: '21-12-2024',
//   },
//   {
//     paymentTrackId: 3,
//     loanAppId: '3',
//     monthNo: 6,
//     year: 'Li',
//     status: 'Valid',
//     dueDateOfPayment: '21-12-2024',
//   },
//   {
//     paymentTrackId: 4,
//     loanAppId: '4',
//     monthNo: 9,
//     year: 'Be',
//     status: 'Valid',
//     dueDateOfPayment: '21-12-2024',
//   },
//   {
//     paymentTrackId: 5,
//     loanAppId: '5',
//     monthNo: 10,
//     year: 'B',
//     status: 'Valid',
//     dueDateOfPayment: '21-12-2024',
//   },
//   {
//     paymentTrackId: 6,
//     loanAppId: '6',
//     monthNo: 12,
//     year: 'C',
//     status: 'Valid',
//     dueDateOfPayment: '21-12-2024',
//   },
//   {
//     paymentTrackId: 7,
//     loanAppId: '7',
//     monthNo: 10,
//     year: 'N',
//     status: 'Valid',
//     dueDateOfPayment: '21-12-2024',
//   },
// ];
@Component({
  selector: 'app-pull-monthly-payment-collection-list',
  templateUrl: './pull-monthly-payment-collection-list.component.html',
  styleUrls: ['./pull-monthly-payment-collection-list.component.scss'],
})
export class PullMonthlyPaymentCollectionListComponent implements OnInit {
  paymentIdResponse!:any;
  boolFlag=false;
  isPulled = false;
  displayedColumns: string[] = [
    'paymentTrackId',
    'loanAppId',
    'monthNo',
    'year',
    'status',
    'dueDateOfPayment',
  ];
  
  dataSource!:any[];
  paymentId=new FormControl('');
  constructor(private fb: FormBuilder,private http:HttpClient) {}
  calender = this.fb.group({
    month: ['', Validators.required],
    year: ['', Validators.required],
  });
 
  
  ngOnInit(): void {

  }
  pullHandler() {
    if (this.calender.valid) {
      this.isPulled = true;
      this.http.get<any[]>(`http://localhost:9191/api/debtCollection/pull/${this.calender.get('month')?.value}/${this.calender.get('year')?.value}`).subscribe(res=>{
      this.dataSource=res;
      this.isPulled=true;
      })
    }
    
  }
  paymentById(){
    let ans=this.paymentId.value;
    this.http.get<any>(`http://localhost:9191/PaymentTrack/${ans}`).subscribe(res=>{
      this.paymentIdResponse=res;
      this.boolFlag=true;
    })
  }
}
