import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-customer-auth',
  templateUrl: './customer-auth.component.html',
  styleUrls: ['./customer-auth.component.scss'],
})
export class CustomerAuthComponent implements OnInit {
  showLogin = true;
  user!: any;
  constructor(
    private customerService: CustomerService,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  

  login() {
    this.customerService.customerList().subscribe((res: any) => {
      let user = res.find((a: any) => {
        return (
          a.email === this.loginForm.get('email')?.value &&
          a.password === this.loginForm.get('password')?.value
        );
      });
      console.log(user, 'sdjjd');
      if (user) {
        this.customerService.Customersubject.next({custId:user.custoer_id,customerState:'customerDashboard'});
        this.router.navigate(['/customer_dashboard']);
      } else {
        // alert('error')
      }
    });
  }

  customerForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    gender: ['', Validators.required],
    state: ['', Validators.required],
    phone: ['', Validators.required],
    aadhaar: ['', Validators.required],
    email: ['', Validators.required],
    salary: ['', Validators.required],
    dob: ['', Validators.required],
    password: ['', Validators.required],
    creditScore: ['', Validators.required],
  });
  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit(): void {
    // this.customerService.customerList().subscribe(res=>{
    //   console.log(res)
    // })
  }
  openLogin() {
    this.showLogin = true;
  }
  openSignUp() {
    this.showLogin = false;
  }
  signUp() {
    const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
   const body = {
      fist_name: this.customerForm.get('firstName')?.value,
      last_name: this.customerForm.get('lastName')?.value,
      address: this.customerForm.get('address')?.value,
      city: this.customerForm.get('city')?.value,
      gender: this.customerForm.get('gender')?.value,
      state: this.customerForm.get('state')?.value,
      contact_no: parseInt(this.customerForm.get('phone')?.value),
      addhar_card: this.customerForm.get('aadhaar')?.value,
      email: this.customerForm.get('email')?.value,
      salary: this.customerForm.get('salary')?.value,
      date_of_birth: this.customerForm.get('dob')?.value,
      password: this.customerForm.get('password')?.value,
      credit_score: this.customerForm.get('creditScore')?.value,
    };
    console.log(this.customerForm);
    this.http
      .post<any>('http://localhost:5083/addnew', body,httpOptions)
      .subscribe((res) => {
        if (res) {
         this.showLogin=true;
        } else {
          console.log('error');
        }
      });
  }

 
}
