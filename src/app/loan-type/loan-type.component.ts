import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectorRef,
  Component,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-loan-type',
  templateUrl: './loan-type.component.html',
  styleUrls: ['./loan-type.component.scss'],
})
export class LoanTypeComponent implements OnChanges ,OnInit {
  dataSource!:any[];
  @ViewChild(MatTable) table!: MatTable<any>;
  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    private changeDetectorRefs: ChangeDetectorRef,
    private customerService:CustomerService,
    private http:HttpClient
  ) {}
  ngOnChanges(): void {
    console.log(this.dataSource, 'chnages');
  }
  ngOnInit(): void {
      this.customerService.LoanType().subscribe(res=>{
       res.map(resp=>{
        [{...resp,edit:'',isEditable:false}]
       })
       this.dataSource=res;
       console.log(this.dataSource,'ds')
      })
  }
  isClicked = false;
  typeForm = this.fb.group({
    type: ['', Validators.required],
    rate: ['', Validators.required],
  });
  displayedColumns: string[] = ['type_of_loan', 'interest_rate', 'edit'];
  // dataSource = [
  //   {
  //     loanType: 'Home loan',
  //     interestRate: '7',
  //     edit: '',
  //     isEditable: false,
  //   },
  //   {
  //     loanType: 'Car loan',
  //     interestRate: '5',
  //     edit: '',
  //     isEditable: false,
  //   },
  // ];
  editLoan(ele: any) {
    ele.isEditable = true;
  }
  setRate(ele: any) {
    ele.isEditable = false;
  }
  changed(ele: any) {
    console.log(ele);

    ele.element.interestRate = ele.$event.data;
  }
  clickHandler() {
    if (this.typeForm.valid) {
      // this.dataSource.push({
      //   loanType: this.typeForm.get('type')?.value,
      //   interestRate: this.typeForm.get('rate')?.value,
      //   edit: '',
      //   isEditable: false,
      // });
       this.http.post<any>('http://localhost:5083/loan/new',{type_of_loan:this.typeForm.get('type')?.value,interest_rate: this.typeForm.get('rate')?.value}).subscribe(res=>{
        console.log(res);
        this.ngOnInit();
       })
    }
    this.isClicked = false;
    this.typeForm.get('type')?.reset();
    this.typeForm.get('rate')?.reset();
    this.table.renderRows();
  }
}
