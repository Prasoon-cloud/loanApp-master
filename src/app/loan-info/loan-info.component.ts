import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-loan-info',
  templateUrl: './loan-info.component.html',
  styleUrls: ['./loan-info.component.scss'],
})
export class LoanInfoComponent implements OnInit {
  constructor(private customerService: CustomerService) {}
  dataSource!: any[];
  ngOnInit(): void {
    this.customerService.LoanType().subscribe((res) => {
      this.dataSource = res;
    });
  }
  displayedColumns: string[] = ['loan_id','type_of_loan', 'interest_rate'];
}
