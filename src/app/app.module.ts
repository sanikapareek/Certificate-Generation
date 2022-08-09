import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ReportComponent } from './report/report.component';
import { MarriageCertificateComponent } from './marriage-certificate/marriage-certificate.component';
import { LeavingCertificateComponent } from './leaving-certificate/leaving-certificate.component';
import { QuizCertificateComponent } from './quiz-certificate/quiz-certificate.component';
import { StudentCertificateComponent } from './student-certificate/student-certificate.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    LoginAdminComponent,
    LoginUserComponent,
    HomePageComponent,
    ContactusComponent,
    AboutusComponent,
    AddUserComponent,
    ReportComponent,
    MarriageCertificateComponent,
    LeavingCertificateComponent,
    QuizCertificateComponent,
    StudentCertificateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
