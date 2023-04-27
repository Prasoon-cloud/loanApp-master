import { HttpClient } from '@angular/common/http';
import { Component,  OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-loan-by-date-status',
  templateUrl: './loan-by-date-status.component.html',
  styleUrls: ['./loan-by-date-status.component.scss']
})
export class LoanByDateStatusComponent implements OnInit{

  constructor(private http:HttpClient,private _snackBar:MatSnackBar) { }

 emiResponse!:any;
  loans!:any;
  loan1!:any;
  ans!:any;
  boolFlag=false;
  date=new FormControl('');
  status=new FormControl('');

  apploanId1=new FormControl('',[Validators.required]);
  principle=new FormControl('',[Validators.required]);
  time=new FormControl('',[Validators.required]);
  apploanId=new FormControl('',[Validators.required]);
   loan!:any;
   checkLoan!:string;
   checkFlag=false;
  ngOnInit(): void {
  }
  
loanByDate(){
this.http.get<any>(`http://localhost:5083/api/customers/loan/date/${this.date.value}`).subscribe(res=>{
  this.loans=res;
})
}
loanByStatus(){
  this.http.get<any>(`http://localhost:5083/api/customer/loan/${this.status.value}`).subscribe(res=>{
    this.loan1=res;
  })
}
emi(){
  this.http.get<any>(`http://localhost:5083/calculate/${this.apploanId.value}`).subscribe(res=>{
    this.emiResponse=res;
    this.boolFlag=true;
  })
}
checkAcceptance(){
  this.http.get<any>(`http://localhost:5083/loanapps/check_Accptance/${this.apploanId1.value}`).subscribe(
    (res:any)=>{
this.checkLoan=res;
    },
    (err)=>{
this.checkLoan=err.error.text;
if(this.checkLoan==='Cancelled by Bank'){
  this.ans=this.apploanId1.value;
}
this._snackBar.open(this.checkLoan, 'close', {
  horizontalPosition: 'start',
  verticalPosition: 'top',
})
    }
  )
}


}


