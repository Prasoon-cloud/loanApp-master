import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defaulter-report',
  templateUrl: './defaulter-report.component.html',
  styleUrls: ['./defaulter-report.component.scss'],
})
export class DefaulterReportComponent implements OnInit {
  displayedColumns: string[] = [
    'paymentTrackId',
    'loanAppId',
    'monthNo',
    'year',
    'status',
    'dueDateOfPayment',
  ];
  constructor(private http:HttpClient) {}
  dataSource!:any[];
  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:9191/api/debtCollection/listOfdefaulters').subscribe(res=>{
      this.dataSource=res;
      })
  }
}
