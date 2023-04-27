import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-my-loan',
  templateUrl: './my-loan.component.html',
  styleUrls: ['./my-loan.component.scss']
})
export class MyLoanComponent implements OnInit {
  apploanId=new FormControl('',[Validators.required]);
  apploanId1=new FormControl('',[Validators.required]);
  principle=new FormControl('',[Validators.required]);
  time=new FormControl('',[Validators.required]);
   loan!:any;
   checkLoan!:string;
   checkFlag=false;
  constructor(private http:HttpClient,private customerService:CustomerService,private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
   
  }
  fetchLoan(){
    this.http.get<any>(`http://localhost:5083/loanapps/view/${this.apploanId.value}`).subscribe(res=>{
    this.loan=res;
    this.checkFlag=true;
    })
  }
checkAcceptance(){
  this.http.get<any>(`http://localhost:5083/loanapps/check_Accptance/${this.apploanId1.value}`).subscribe(
    (res)=>{
this.checkLoan=res;
    },
    (err)=>{
this.checkLoan=err.error.text;
this._snackBar.open(this.checkLoan, 'close', {
  horizontalPosition: 'start',
  verticalPosition: 'top',
})
    }
  )
}
openEditModal(loan:any){

}
emi(){
  this.customerService.Customersubject.subscribe(res=>{
    if(res){
      this.http.get<any>(`http://localhost:5083/calculate/${res.custId}/${this.principle.value}/${this.time.value}`).subscribe(res=>{
        this._snackBar.open(res, 'close', {
          horizontalPosition: 'start',
          verticalPosition: 'top',
        })
      })
    }
  })
}
}
