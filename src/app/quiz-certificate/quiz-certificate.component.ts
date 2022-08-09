import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import * as htmlToImage from 'html-to-image';
import * as pdfMake from "pdfmake/build/pdfmake";  
import * as pdfFonts from "pdfmake/build/vfs_fonts";  
import html2canvas from 'html2canvas';
declare var require: any;
const htmlToPdfmake = require("html-to-pdfmake");
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;



@Component({
  selector: 'app-quiz-certificate',
  templateUrl: './quiz-certificate.component.html',
  styleUrls: ['./quiz-certificate.component.css']
})
export class QuizCertificateComponent implements OnInit {

  constructor(private service:AppServiceService,private router:Router) { }
  adminname:any
  use:any
  show:any
  quiz:any
  name_quiz:any
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
    this.quiz =localStorage.getItem("quiz");
    this.name_quiz=localStorage.getItem("quiz_name");
    this.service.getQuiz(this.quiz,this.name_quiz).subscribe((response:any)=>{
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

  downloadAsPDF() {
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download(); 
     
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
