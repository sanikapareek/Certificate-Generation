import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-leaving-certificate',
  templateUrl: './leaving-certificate.component.html',
  styleUrls: ['./leaving-certificate.component.css']
})
export class LeavingCertificateComponent implements OnInit {

  constructor(private service:AppServiceService,private router:Router) { }
  adminname:any
  use:any
  show:any
  leaving:any
  leaving_name:any
  item:any=[]
  image_name=""

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
    this.leaving =localStorage.getItem("leaving");
  this.leaving_name=localStorage.getItem("leaving_name");
    this.service.getLeaving(this.leaving,this.leaving_name).subscribe((response:any)=>{
      console.log(response);
      this.item=response['leaving_data'];
      this.image_name="/api/uploads/"+this.item[0].image;
      console.log(this.image_name);
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
