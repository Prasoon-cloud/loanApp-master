import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  getUrl() {
    return "url('http://estringsoftware.com/wp-content/uploads/2017/07/estring-header-lowsat.jpg')";
  }
}
