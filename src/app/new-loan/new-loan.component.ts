import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-new-loan',
  templateUrl: './new-loan.component.html',
  styleUrls: ['./new-loan.component.scss'],
})
export class NewLoanComponent implements OnInit {
  ans:any;
  closePopup=true;
  constructor(private fb: FormBuilder,private http:HttpClient,private customerService:CustomerService) {}
  loanForm = this.fb.group({
    bank_loan_id:['',Validators.required],
    amount: ['', Validators.required],
    years: ['', Validators.required],
    applyDate: ['', Validators.required],
    purpose: ['', Validators.required],
    type: ['', Validators.required],
    status: ['', Validators.required],
  });
  ngOnInit(): void {
    this.customerService.Customersubject.subscribe(res=>{
    if(res){
      this.ans=res.custId;
    }
    }) 
  }
  applyLoan() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let  ans1=new Date(this.loanForm.get('applyDate')?.value) 
    let body={
      bank_loan_id:this.loanForm.get('bank_loan_id')?.value,
      customer_id: this.ans,
      loan_amount:this.loanForm.get('amount')?.value,
      no_of_years:this.loanForm.get('years')?.value,
      loanAppDate:ans1.toJSON().slice(0,10) ,
      purpose: this.loanForm.get('purpose')?.value,
      type_of_loan:this.loanForm.get('type')?.value,
      appStatus:this.loanForm.get('status')?.value,
      status: 'No Status',
    }
    if (this.loanForm.valid) {
      this.http.post<any>('http://localhost:5083/addLoan',body,httpOptions).subscribe((res:any)=>{
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
