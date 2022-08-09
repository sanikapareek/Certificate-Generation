import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private router:Router) { }
  adminname:any
  use:any
  show:any
  ngOnInit(): void {
    this.adminname =localStorage.getItem("user");
    this.use=localStorage.getItem("use");
    console.log(this.use);
    if(this.use=="admin"){
      this.show=true;
    }else{
      this.show=false;
    }
  }

  home(){
    this.router.navigate(['./home']);
  }

  contactus(){
    this.router.navigate(['./contactus']);
  }

  aboutus(){
    this.router.navigate(['./aboutus']);
  }

  adduser(){
    this.router.navigate(['./addUser']);
  }
  report(){
      this.router.navigate(['./report']);

  }
  logout(){
    this.adminname =localStorage.removeItem("user");
    this.use=localStorage.removeItem("use");
    localStorage.clear();
    this.router.navigate(['./firstPage']);
  }

}
