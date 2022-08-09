import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-student-certificate',
  templateUrl: './student-certificate.component.html',
  styleUrls: ['./student-certificate.component.css']
})
export class StudentCertificateComponent implements OnInit {

  constructor(private service:AppServiceService,private router:Router) { }
  adminname:any
  use:any
  show:any
  student:any
  student_name:any
  item:any=[]

  @ViewChild('pdfTable')
  pdfTable!: ElementRef;

  ngOnInit(): void {
    this.adminname =localStorage.getItem("user");
    this.use=localStorage.getItem("use");
    if(this.use=="admin"){
      this.show=true;
    }else{
      this.show=false;
    }
    this.student =localStorage.getItem("student");
    this.student_name=localStorage.getItem("student_name");
    console.log("Hello"+this.student+" "+this.student_name);
    this.service.getStudent(this.student,this.student_name).subscribe((response:any)=>{
      console.log(response);
      this.item=response;
      console.log(this.item[0]);
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

  generateImage(){
    var container = this.pdfTable.nativeElement; // full page 
    var name_par=this.item[0].name;
			html2canvas(container).then(function(canvas) {
                var link = document.createElement("a");
                document.body.appendChild(link);
                link.download = name_par+".png";
                link.href = canvas.toDataURL("image/png");
                link.target = '_blank';
                link.click();
            });
  }

  
 
}
