import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  adminname:any
  constructor(private router:Router,public service:AppServiceService) { }

  ngOnInit(): void {
    this.adminname=localStorage.getItem("user");
  }
  user=""
  pass=""
  organization=""
  certificate=""
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
    localStorage.clear();
    this.router.navigate(['./firstPage']);
  }

  user_add(){
    console.log(this.user+" "+this.pass+" "+this.organization+" "+this.certificate);
    this.service.checkUser(this.user).subscribe((response:any)=>{
      console.log(response);
      var items=response;
      if(items[0]!=null){
        Swal.fire({
          icon: 'error',
          title: 'Error Occurred',
          text: 'User with this username already exists!',
          confirmButtonColor: "#0059b3",
          showCancelButton: false
        });
      }
      else{
        this.service.addUserData(this.user,this.pass,this.organization,this.certificate).subscribe((response:any)=>{
          console.log(response);
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'User Added Successfully!',
            confirmButtonColor: "#0059b3",
            showCancelButton: false
          });
          this.router.navigate(['./home']);
            
          }),(error: any)=>{
            console.log("There is some error in getting the data from the server");
            
          }
        this.router.navigate(['./home']);
          
      }

      
      }),(error: any)=>{
        console.log("There is some error in getting the data from the server");
        
      }
    
   
  }


}
