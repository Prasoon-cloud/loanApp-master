import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss'],
})
export class EditCustomerComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: any,private http:HttpClient
  ) {}

  editForm = this.fb.group({
    fist_name: ['', Validators.required],
    last_name: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    gender: ['', Validators.required],
    state: ['', Validators.required],
    contact_no: ['', Validators.required],
    addhar_card: ['', Validators.required],
    email: ['', Validators.required],
    salary: ['', Validators.required],
    date_of_birth: ['', Validators.required],
    password: ['', Validators.required],
    credit_score: ['', Validators.required],
  });

  ngOnInit(): void {
    console.log(this.editForm);

    this.editForm.patchValue(this.data);
    this.editForm.get('gender')?.setValue(this.data.gender);
  }
  modify() {
    const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
   const body = {
      custoer_id:this.data.custoer_id,
      fist_name: this.editForm.get('fist_name')?.value,
      last_name: this.editForm.get('last_name')?.value,
      address: this.editForm.get('address')?.value,
      city: this.editForm.get('city')?.value,
      gender: this.editForm.get('gender')?.value,
      state: this.editForm.get('state')?.value,
      contact_no: parseInt(this.editForm.get('contact_no')?.value),
      addhar_card: this.editForm.get('addhar_card')?.value,
      email: this.editForm.get('email')?.value,
      salary: this.editForm.get('salary')?.value,
      date_of_birth: this.editForm.get('date_of_birth')?.value,
      password: this.editForm.get('password')?.value,
      credit_score: this.editForm.get('credit_score')?.value,
    };
    console.log(this.editForm);
    this.http
      .put<any>('http://localhost:5083/update', body,httpOptions)
      .subscribe((res) => {
        if (res) {
          console.log('modified')
        } else {
          console.log('error');
        }
      });
  }

}
