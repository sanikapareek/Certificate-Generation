import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http:HttpClient) { }

  getAdminData(username: String,password:String){
    console.log("hello");
    return this.http.post('/api/adminDetails',{'username':username,'password':password});
  }

  addUserData(username:string,password:string,organization:string,certificate_type:string){
    return this.http.post('/api/userData',{'username':username,'password':password,'organization':organization,'certificate_type':certificate_type});
  }

  getUserData(username:String,password:String){
    return this.http.post('/api/userDetails',{'username':username,'password':password});
  }

  getType(username:String){
    return this.http.post('/api/getType',{'username':username});
  }

  getMarriage(mail:String,husband_name:string,wife_name:string){
    return this.http.post('/api/getMarriage',{'mail':mail,'husband_name':husband_name,'wife_name':wife_name});
  }

  checkUser(username:String){
    return this.http.post('/api/userCheck',{'username':username});
  }

  getQuiz(mail:string,name:string){
    return this.http.post('/api/getQuiz',{'mail':mail,'name':name});
  }

  marriageAdd(husband_name:string,h_religion:string,h_status:string,h_birth:string,h_street:string,h_state:string,h_city:string,h_zip:string,wife_name:string,w_religion:string,w_status:string,w_birth:string,w_street:string,w_state:string,w_city:string,w_zip:string,marriage_date:string,mail:string,m_date:string){
    return this.http.post('/api/addMarriage',{'husband_name':husband_name,'h_religion':h_religion,'h_status':h_status,'h_birth':h_birth,'h_street':h_street,'h_state':h_state,'h_city':h_city,'h_zip':h_zip,'wife_name':wife_name,'w_religion':w_religion,'w_status':w_status,'w_birth':w_birth,'w_street':w_street,'w_state':w_state,'w_city':w_city,'w_zip':w_zip,'marriage_date':marriage_date,'mail':mail,'m_date':m_date});
  }

  studentAdd(name:string,organization:string,program:string,venue:string,issue_date:string,mail:string,q_date:Date){
    return this.http.post('/api/addStudent',{'name':name,'organization':organization,'program':program,'venue':venue,'issue_date':issue_date,'mail':mail,'s_date':q_date});
  }

  leavingAdd(name:string,mother:string,enrollment:string,state:string,nationality:string,caste:string,birth_place:string,birth_date:string,ad_date:string,leaving_date:string,reason:string,mail:string,l_date:string,school:string){
    return this.http.post('/api/addLeaving',{'name':name,'mother':mother,'enrollment':enrollment,'state':state,'nationality':nationality,'caste':caste,'birth_place':birth_place,'birth_date':birth_date,'ad_date':ad_date,'leaving_date':leaving_date,'reason':reason,'mail':mail,'l_date':l_date,'school':school});
  }

  quizAdd(name:string,organization:string,issue_date:string,name_quiz:string,venue:string,position:string,mail:string,s_date:string){
    console.log(issue_date+" "+position);
    return this.http.post('/api/addQuiz',{'name':name,'organization':organization,'issue_date':issue_date,'name_quiz':name_quiz,'venue':venue,'certificate_for':position,'mail':mail,'q_date':s_date});
  }

  getStudent(mail:string,name:string){
    //console.log(issue_date+" "+position);
    return this.http.post('/api/getStudent',{'mail':mail,'name':name});
  }

  getLeaving(mail:string,name:string){
    //console.log(issue_date+" "+position);
    return this.http.post('/api/getLeaving',{'mail':mail,'name':name});
  }

  getQuizFull(curr_date:string){
    return this.http.post('\api\getQuizFull',{'q_date':curr_date});
  }

  getMarriageFull(curr_date:string){
    return this.http.post('\api\getMarriageFull',{'m_date':curr_date});
  }

  getLeavingFull(curr_date:string){
    return this.http.post('\api\getLeavingFull',{'l_date':curr_date});
  }

  getStudentFull(curr_date:string){
    return this.http.post('\api\getStudentFull',{'s_date':curr_date});
  }

  

//   postFile(fileToUpload: File): Observable<boolean> {
//     const endpoint = '../assets/';
//     const formData: FormData = new FormData();
//     formData.append('fileKey', fileToUpload, fileToUpload.name);
//     return this.http.post(endpoint, formData, { })
//       .pipe(map(() => { return true; }));
// }

// upload(file: File): Observable<HttpEvent<any>> {
//   const formData: FormData = new FormData();
//   formData.append('file', file);
//   const req = new HttpRequest('POST', '/api/upload', formData, {
//     reportProgress: true,
//     responseType: 'json'
//   });
//   return this.http.request(req);
// }
// getFiles(): Observable<any> {
//   return this.http.get('/api/uploads');
// }


  
}
