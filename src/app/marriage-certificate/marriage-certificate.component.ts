import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-marriage-certificate',
  templateUrl: './marriage-certificate.component.html',
  styleUrls: ['./marriage-certificate.component.css']
})
export class MarriageCertificateComponent implements OnInit {
  constructor(private service:AppServiceService,private router:Router) { }
  adminname:any
  use:any
  show:any
  marriage:any
  husband:any
  wife:any
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
    this.marriage =localStorage.getItem("marriage");
    this.husband=localStorage.getItem("husband");
    this.wife=localStorage.getItem("wife");
    this.service.getMarriage(this.marriage,this.husband,this.wife).subscribe((response:any)=>{
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
    var name_par=this.item[0].husband_name+"_"+this.item[0].wife_name;
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
