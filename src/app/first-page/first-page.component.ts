import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loginadmin(){
    this.router.navigate(['./loginAdmin']);
  }

  loginuser(){
    this.router.navigate(['./loginUser']);
  }

}
