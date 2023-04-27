import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-debt',
  templateUrl: './add-debt.component.html',
  styleUrls: ['./add-debt.component.scss']
})
export class AddDebtComponent implements OnInit {

  ans:any;
  closePopup=true;
  constructor(private fb: FormBuilder,private http:HttpClient) {}
  debtForm = this.fb.group({
    loanAppId: ['', Validators.required],
    monthNo: ['', Validators.required],
    year: ['', Validators.required],
    dueDateOfPayment: ['', Validators.required],
    paymentRecieveDate: ['', Validators.required],
  });
  ngOnInit(): void {
  }
  addDebt() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let  ans1=new Date(this.debtForm.get('dueDateOfPayment')?.value) 
    let  ans2=new Date(this.debtForm.get('paymentRecieveDate')?.value) 
  //   {
  //     "paymentTrackId": 8,
  //     "loanAppId": "3232",
  //     "monthNo": 4,
  //     "year": 2023,
  //     "status": "not received",
  //     "dueDateOfPayment": "2023-04-15",
  //     "paymentRecieveDate": ""
  // }
    let body={
      loanAppId:this.debtForm.get('loanAppId')?.value,
      monthNo:this.debtForm.get('monthNo')?.value,
      paymentRecieveDate:ans1.toJSON().slice(0,10) ,
      dueDateOfPayment:ans2.toJSON().slice(0,10) ,
      year: this.debtForm.get('year')?.value,
      status: 'not recieved',
    }
    if (this.debtForm.valid) {
      this.http.post<any>('http://localhost:9191/api/debtCollection/create',body,httpOptions).subscribe((res:any)=>{
      if(res){
       this.closePopup=false;
      }
      else{
       console.log('err');

      }
      })
    }
  }

}
