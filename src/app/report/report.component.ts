import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private service:AppServiceService,private router:Router) { }
  adminname:any
  use:any
  show:any
  curr_date=""
  marriage:any=[]
  student:any=[]
  leaving:any=[]
  quiz:any=[]

  show1=false


  ngOnInit(): void {
    this.adminname =localStorage.getItem("user");
    this.use=localStorage.getItem("use");
    if(this.use=="admin"){
      this.show=true;
    }else{
      this.show=false;
    }
  }

  reportGenerate(){
    this.show1=true;

    this.service.getStudentFull(this.curr_date).subscribe((response:any)=>{
      console.log(response);
      this.student=response;
      console.log(this.student[0]);
          }),(error: any)=>{
            console.log("There is some error in getting the data from the server");
            
          }

          this.service.getQuizFull(this.curr_date).subscribe((response:any)=>{
            console.log(response);
            this.quiz=response;
            console.log(this.quiz[0]);
                }),(error: any)=>{
                  console.log("There is some error in getting the data from the server");
                  
                }
                this.service.getMarriageFull(this.curr_date).subscribe((response:any)=>{
                  console.log(response);
                  this.marriage=response;
                  console.log(this.marriage[0]);
                      }),(error: any)=>{
                        console.log("There is some error in getting the data from the server");
                        
                      }
                      this.service.getLeavingFull(this.curr_date).subscribe((response:any)=>{
                        console.log(response);
                        this.leaving=response;
                        console.log(this.leaving[0]);
                            }),(error: any)=>{
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

  downloadFile() {
    const replacer = (key:any, value:any) => (value === null ? '' : value); // specify how you want to handle null values here
    const header = Object.keys(this.student[0]);
    const csv = this.student.map((row:any) =>
      header
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join(',')
    );
    csv.unshift(header.join(','));
    const csvArray = csv.join('\r\n');
  
    const a = document.createElement('a');
    const blob = new Blob([csvArray], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
  
    a.href = url;
    a.download = 'student_Achievement.csv';
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }
  downloadFile_quiz() {
    const replacer = (key:any, value:any) => (value === null ? '' : value); // specify how you want to handle null values here
    const header = Object.keys(this.quiz[0]);
    const csv = this.student.map((row:any) =>
      header
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join(',')
    );
    csv.unshift(header.join(','));
    const csvArray = csv.join('\r\n');
  
    const a = document.createElement('a');
    const blob = new Blob([csvArray], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
  
    a.href = url;
    a.download = 'Quiz.csv';
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }

  downloadFile_marriage() {
    const replacer = (key:any, value:any) => (value === null ? '' : value); // specify how you want to handle null values here
    const header = Object.keys(this.marriage[0]);
    const csv = this.student.map((row:any) =>
      header
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join(',')
    );
    csv.unshift(header.join(','));
    const csvArray = csv.join('\r\n');
  
    const a = document.createElement('a');
    const blob = new Blob([csvArray], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
  
    a.href = url;
    a.download = 'Marriage.csv';
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }

  downloadFile_leaving() {
    const replacer = (key:any, value:any) => (value === null ? '' : value); // specify how you want to handle null values here
    const header = Object.keys(this.leaving[0]);
    const csv = this.student.map((row:any) =>
      header
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join(',')
    );
    csv.unshift(header.join(','));
    const csvArray = csv.join('\r\n');
  
    const a = document.createElement('a');
    const blob = new Blob([csvArray], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
  
    a.href = url;
    a.download = 'Leaving.csv';
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }

}
