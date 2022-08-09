import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  constructor(private router: Router,public service : AppServiceService) { }
  
  ngOnInit(): void {
  }
  user=""
  pass=""
  item:any=[]

  home(){
    this.router.navigate(['./firstPage']);
  }

  contactus(){
    this.router.navigate(['./contactus']);
  }

  aboutus(){
    this.router.navigate(['./aboutus']);

  }


  loginuser(){
    this.router.navigate(['./loginUser']);
  }
  dashboard(){
    console.log(this.user+" "+this.pass);
    this.service.getAdminData(this.user,this.pass).subscribe((response:any)=>{
      console.log(this.user+" "+this.pass);
              this.item = response;
              console.log("The response from the server is : ",response);
              if(this.item[0]==null){
                Swal.fire({
                  icon: 'error',
                  title: 'Error Occurred',
                  text: 'Please try again!',
                  confirmButtonColor: "#0059b3",
                  showCancelButton: false
                });
              }else{
                if(this.item[0].username==this.user && this.item[0].password==this.pass){
                  let adminname = this.user;
                  localStorage.setItem("user",adminname);
                  let use="admin";
                  localStorage.setItem("use",use);
                  Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Login Successful!',
                    confirmButtonColor: "#0059b3",
                    showCancelButton: false
                  });
                  this.router.navigate(['./home']);
                }
              }
              
            }),(error: any)=>{
              
              console.log("There is some error in getting the data from the server");
              
            }
   
  }

}
