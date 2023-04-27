import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditLoanComponent } from '../edit-loan/edit-loan.component';
import { CustomerService } from '../service/customer.service';
import { MatSnackBar } from "@angular/material/snack-bar";
@Component({
  selector: 'app-loan-dashboard',
  templateUrl: './loan-dashboard.component.html',
  styleUrls: ['./loan-dashboard.component.scss'],
})
export class LoanDashboardComponent implements OnInit {
  loans:any[]=[];
  ans!:any;
  loaan!:any;
  constructor(private dialog: MatDialog,private customerService:CustomerService,private http:HttpClient,private _snackBar: MatSnackBar) {}
  apploanId = new FormControl('', [Validators.required]);
  apploanId1 = new FormControl('', [Validators.required]);
  
  ngOnInit(): void {
    this.customerService.LoanList().subscribe((res:any)=>{
      this.loans=res;
      })
  }
  openEditModal(loan: any) {
    // this.dialog.open(EditLoanComponent, {
    //   data: loan,
    //   height: '600px',
    //   width: '550px',
    // });
    this.http.get<any>(`http://localhost:5083/loanapps/updateStatus/${loan.loan_app_id}/accepted`).subscribe(res=>{
      this.ngOnInit();
    })
  }
  creditCheck(){
    let vall=this.apploanId.value;
    this.http.get<any>(`http://localhost:5083/loanapps/credit_score_check/${vall}`).subscribe(
      (res)=>{
      this.ans=res;
      },
      (err)=>{
      this.ans=err.error.text;
      this._snackBar.open(this.ans, 'close', {
        horizontalPosition: 'start',
        verticalPosition: 'top',
      })
      }
    )
  }
  searchLoan(){
    let vall=this.apploanId1.value;
    this.http.get<any>(`http://localhost:5083/loanapps/view/${vall}`).subscribe(res=>{
      this.loaan=res;
    })
  }
  
}
