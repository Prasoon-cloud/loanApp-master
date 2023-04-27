import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pull-loan',
  templateUrl: './pull-loan.component.html',
  styleUrls: ['./pull-loan.component.scss'],
})
export class PullLoanComponent implements OnInit {
  noData = false;
  pulldateForm = this.fb.group({
    pullDate: ['', Validators.required],
  });
  displayedColumns: string[] = [
    'loan_app_id',
    'bank_loan_id',
    'customer_id',
    'loan_amount',
    'no_of_years',
    'loanAppDate',
    'purpose',
    'type_of_loan',
    'appStatus',
    'status',
  ];
  constructor(private http: HttpClient, private fb: FormBuilder) {}
  dataSource!: any[];
  ngOnInit(): void {
    this.http
      .get<any[]>(`http://localhost:5083/getallLoan`)
      .subscribe((res) => {
        if (res.length > 0) {
          this.dataSource = res;
          this.noData = false;
        } else {
          this.noData = true;
        }
      });
  }
  pullHandler() {
    if (this.pulldateForm.valid) {
      let datee = this.pulldateForm.get('pullDate')?.value;
      let year = datee.getFullYear();
      let mon = Number(datee.getMonth()) + 1;
      let month = mon < 10 ? '0' + mon : mon;
      let date = datee.getDate() < 10 ? '0' + datee.getDate() : datee.getDate();
      let formatDate = year + '-' + month + '-' + date;

      this.http
        .get<any[]>(`http://localhost:5083/loanapp/pull/${formatDate}`)
        .subscribe((res) => {
          if (res.length > 0) {
            this.dataSource = res;
            this.noData = false;
          } else {
            this.noData = true;
          }
        });
    }
  }
}
