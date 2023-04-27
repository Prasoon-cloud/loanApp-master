import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

constructor(private http: HttpClient) { }
ans!:any;
 Customersubject = new BehaviorSubject(this.ans);
 customerList() {
    return this.http.get<any[]>('http://localhost:5083/getall');
  }
  LoanList(){
    return this.http.get<any[]>('http://localhost:5083/getallLoan');
  }
  LoanType(){
    return this.http.get<any[]>('http://localhost:5083/loan');
  }
}
