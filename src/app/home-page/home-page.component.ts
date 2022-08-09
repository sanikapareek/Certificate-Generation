import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common'
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  adminname:any
  use:any
  show:any
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;

  //marriage
  mail_marriage:any
  husband:any
  wife:any
  //quiz
  mail_quiz:any
  quiz_c_name:any
  //student
  mail_student:any
  student_name:any
  //leaving
  mail_leaving:any
  leaving_name:any


  leaving=true
  marriage=true
  quiz=true
  student=true
  h_name=""
  h_religion=""
  h_status=""
  h_birth=""
  h_street=""
  h_state=""
  h_city=""
  h_zip=""
  w_name=""
  w_religion=""
  w_status=""
  w_birth=""
  w_street=""
  w_state=""
  w_city=""
  w_zip=""
  marriage_date=""
  m_mail=""
  //leaving
  s_name=""
  mother=""
  enroll=""
  state=""
  nationality=""
  birth_date=""
  birth_place=""
  caste=""
  ad_date=""
  leaving_date=""
  reason=""
  l_mail=""
  school=""
  img_up1:any
  //quiz
  q_name=""
  q_organization=""
  q_date=""
  quiz_name=""
  venue=""
  position=""
  q_mail=""
  //student
  a_name=""
  a_organization=""
  program=""
  s_place=""
  a_issue_date=""
  s_mail=""

  //date
  //date:any
 // latest_date:any
  today: Date = new Date();
  curr_date:any
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  constructor(private router: Router,private service:AppServiceService,public datepipe: DatePipe,private http:HttpClient) { }

  ngOnInit(): void {
    this.adminname =localStorage.getItem("user");
    this.use=localStorage.getItem("use");
    console.log(this.use);
    //console.log(this.date.getTime()-this.date1.getTime());
    this.curr_date=this.datepipe.transform(this.today, 'YYYY-MM-dd');
    console.log(this.curr_date+" "+typeof(this.curr_date));
    //this.latest_date =this.datepipe.transform(this.date, 'YYYY-MM-dd h:mm:ss');
    console.log("date:"+this.q_date+" "+this.position);
    if(this.use=="admin"){
      this.show=true;
      this.leaving=false;
      this.marriage=false;
      this.quiz=false;
      this.student=false;
    }else{
    
      this.service.getType(this.adminname).subscribe((response:any)=>{
          console.log(response);
          console.log(response[0].certificate_type)
          if(response[0].certificate_type=="Leaving Certificate"){
            this.leaving=false;
          }else if(response[0].certificate_type=="Marriage Certificate"){
            this.marriage=false;
          }else if(response[0].certificate_type=="Quiz Certificate"){
            this.quiz=false;
          }else if(response[0].certificate_type=="Student Achievement Certificate"){
            this.student=false;
          }
          
              }),(error: any)=>{
                console.log("There is some error in getting the data from the server");
                
              }
      this.show=false;
    }
    console.log("hello"+this.show);
    console.log(this.student+" "+this.marriage+" "+this.quiz+" "+this.leaving);
  }
  quiz_certificate_save(){
    let date:Date
    this.service.quizAdd(this.q_name,this.q_organization,this.q_date,this.quiz_name,this.venue,this.position,this.q_mail,this.curr_date).subscribe((response:any)=>{
      console.log(response);
      this.mail_quiz = this.q_mail;
      localStorage.setItem("quiz",this.mail_quiz);
      this.quiz_c_name = this.q_name;
      localStorage.setItem("quiz_name",this.quiz_c_name);
      console.log(this.mail_quiz+" "+this.q_mail+" "+this.q_date+" "+this.position);
        Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Data Added Successfully!',
        confirmButtonColor: "#0059b3",
        showCancelButton: false
      });
      this.router.navigate(['./quiz']);
          }),(error: any)=>{
            Swal.fire({
              icon: 'error',
              title: 'Error Occurred',
              text: 'Error!',
              confirmButtonColor: "#0059b3",
              showCancelButton: false
            });
            console.log("There is some error in getting the data from the server");
            
          }
          
    
  }

  student_certificate_save(){
    this.service.studentAdd(this.a_name,this.a_organization,this.program,this.s_place,this.a_issue_date,this.s_mail,this.curr_date).subscribe((response:any)=>{
      console.log(response);
      this.mail_student = this.s_mail;
      localStorage.setItem("student",this.mail_student);
      this.student_name = this.a_name;
      localStorage.setItem("student_name",this.student_name);
      console.log(this.mail_student+" "+this.s_mail+" "+this.program+" "+this.s_place+" "+this.a_issue_date+" "+this.s_name+" "+this.student_name);
        Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Data Added Successfully!',
        confirmButtonColor: "#0059b3",
        showCancelButton: false
      });
      this.router.navigate(['./student']);
          }),(error: any)=>{
            Swal.fire({
              icon: 'error',
              title: 'Error Occurred',
              text: 'Error!',
              confirmButtonColor: "#0059b3",
              showCancelButton: false
            });
            console.log("There is some error in getting the data from the server");
            
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

  addMarriage_save(){
    this.service.marriageAdd(this.h_name,this.h_religion,this.h_status,this.h_birth,this.h_street,this.h_state,this.h_city,this.h_zip,this.w_name,this.w_religion,this.w_status,this.w_birth,this.w_street,this.w_state,this.w_city,this.w_zip,this.marriage_date,this.m_mail,this.curr_date).subscribe((response:any)=>{
      console.log(response);
      this.mail_marriage = this.m_mail;
      localStorage.setItem("marriage",this.mail_marriage);
      this.husband = this.h_name;
      localStorage.setItem("husband",this.h_name);
      this.wife = this.w_name;
      localStorage.setItem("wife",this.wife);
        Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Data Added Successfully!',
        confirmButtonColor: "#0059b3",
        showCancelButton: false
      });
      this.router.navigate(['./marriage']);
          }),(error: any)=>{
            Swal.fire({
              icon: 'error',
              title: 'Error Occurred',
              text: 'Error!',
              confirmButtonColor: "#0059b3",
              showCancelButton: false
            });
            console.log("There is some error in getting the data from the server");
            
          }
  this.show=false;
}

addLeaving_save(){

  this.service.leavingAdd(this.s_name,this.mother,this.enroll,this.state,this.nationality,this.caste,this.birth_date,this.birth_place,this.ad_date,this.leaving_date,this.reason,this.l_mail,this.curr_date,this.school).subscribe((response:any)=>{
    console.log(response);
    this.mail_leaving= this.l_mail;
    localStorage.setItem("leaving",this.mail_leaving);
    this.leaving_name = this.s_name;
      localStorage.setItem("leaving_name",this.leaving_name);
      Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Data Added Successfully!',
      confirmButtonColor: "#0059b3",
      showCancelButton: false
    });
    this.router.navigate(['./leaving']);
        }),(error: any)=>{
          Swal.fire({
            icon: 'error',
            title: 'Error Occurred',
            text: 'User with this mail id already exists!',
            confirmButtonColor: "#0059b3",
            showCancelButton: false
          });
          console.log("There is some error in getting the data from the server");
          
        }
this.show=false;
}



onChange(event:any) {
  if(event.target.files.length>0){
    const file=event.target.files[0];
    this.img_up1 = file;
    console.log(this.img_up1.name+" "+this.img_up1);
  }
         
        
        
    }

//   // OnClick of button Upload
  onUpload() {
    
    const formData=new FormData();
    formData.append('file',this.img_up1);
    console.log(formData);
    this.http.post<any>('/api/file',formData).subscribe((response:any)=>{
      (response:any)=>console.log(response);
      (error:any)=>console.log(error);
    });
  }







  }


