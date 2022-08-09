import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  constructor(private router:Router,private service:AppServiceService) { }

  ngOnInit(): void {
  }
  user=""
  pass=""
  item: any=[]
  home(){
    this.router.navigate(['./firstPage']);
  }

  contactus(){

  }

  aboutus(){

  }

  loginadmin(){
    this.router.navigate(['./loginAdmin']);
  }
  dashboard(){
    this.service.getUserData(this.user,this.pass).subscribe((response:any)=>{
      this.item=response;
      if(this.item[0]==null){
        Swal.fire({
          icon: 'error',
          title: 'Error Occurred',
          text: 'Please try again!',
          confirmButtonColor: "#0059b3",
          showCancelButton: false
        });
      }
      if(this.item[0].username==this.user && this.item[0].password==this.pass){
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Login Successful!',
          confirmButtonColor: "#0059b3",
          showCancelButton: false
        });
        let adminname = this.user;
        localStorage.setItem("user",adminname);
        let use="user";
        localStorage.setItem("use",use);
        console.log(response);
        this.router.navigate(['./home']);
      }
      
      
        
      }),(error: any)=>{
       
        console.log("There is some error in getting the data from the server");
        
      }
    
  }

  user_add(){
    
    
   
  }

}
