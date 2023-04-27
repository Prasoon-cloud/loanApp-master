import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { getMaxListeners } from 'process';
const ELEMENT_DATA = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
@Component({
  selector: 'app-update-payment-status',
  templateUrl: './update-payment-status.component.html',
  styleUrls: ['./update-payment-status.component.scss'],
})
export class UpdatePaymentStatusComponent implements OnInit {
  displayedColumns: string[] = [
    'paymentTrackId',
    'loanAppId',
    'monthNo',
    'year',
    'status',
    'dueDateOfPayment',
    'pay',
  ];
  constructor(private http: HttpClient) {}
  dataSource!: any[];
  // getList() {
  //   this.http.get<any>('http://localhost:9191/api/debtCollection/pull').subscribe(res=>{
  //     this.dataSource=res;
  //   })
  // }
  ngOnInit(): void {
    // this.getList;
    this.http.get<any>('http://localhost:9191/api/debtCollection/pull').subscribe(res=>{
      this.dataSource=res;
    })
  }
  makePayment(ele: any) {
    ele.status='recieved'
    this.http
      .put<any[]>('http://localhost:9191/api/debtCollection/update',ele)
      .subscribe((res) => {
       if(res){
        this.http.get<any>('http://localhost:9191/api/debtCollection/pull').subscribe(res=>{
        this.dataSource=res;
    })
       }
      });
  }
}
