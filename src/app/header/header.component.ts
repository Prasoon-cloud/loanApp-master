import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default';
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerService.Customersubject.subscribe(res=>{
      this.menuType=res?.customerState?res?.customerState:'default'
    })
  }
  handler(){
    this.customerService.Customersubject.next({customerState:'default'});
  }
}
