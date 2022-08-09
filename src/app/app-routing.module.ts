import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { ReportComponent } from './report/report.component';
import { MarriageCertificateComponent } from './marriage-certificate/marriage-certificate.component';
import { QuizCertificateComponent } from './quiz-certificate/quiz-certificate.component';
import { StudentCertificateComponent } from './student-certificate/student-certificate.component';
import { LeavingCertificateComponent } from './leaving-certificate/leaving-certificate.component';

const routes: Routes = [
  {path: "loginAdmin", component: LoginAdminComponent},
  {path: "loginUser", component: LoginUserComponent},
  {path: "firstPage", component: FirstPageComponent},
  {path: "home", component:HomePageComponent},
  {path:"addUser",component:AddUserComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"report",component:ReportComponent},
  {path:"marriage",component:MarriageCertificateComponent},
  {path:"leaving",component:LeavingCertificateComponent},
  {path:"quiz",component:QuizCertificateComponent},
  {path:"student",component:StudentCertificateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
