import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-loan',
  templateUrl: './edit-loan.component.html',
  styleUrls: ['./edit-loan.component.scss'],
})
export class EditLoanComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  editLoanForm = this.fb.group({
    amount: ['', Validators.required],
    years: ['', Validators.required],
    applyDate: ['', Validators.required],
    purpose: ['', Validators.required],
    type: ['', Validators.required],
    status: ['', Validators.required],
  });
  ngOnInit(): void {
    this.editLoanForm.patchValue(this.data);
    console.log(this.editLoanForm, 'form');
  }
  updateLoan() {
    alert('HI');
   
  }
}
