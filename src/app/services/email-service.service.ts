import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {
  private emails;

  constructor(private http: HttpClient) { }

  getEmails(): Observable<any>{
    const mockURL = "assets/mocks/emails.json";
    return this.http.get<any>(mockURL);
  }

  getInboxCount() {
    const mockURL = "assets/mocks/emails.json";
    this.http.get(mockURL).subscribe(response=>{
      if(response!==null|| response!==undefined){
        this.emails = response;
      }
    })

    return this.emails.count;
  }

}
