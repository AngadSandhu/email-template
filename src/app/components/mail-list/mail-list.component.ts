import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmailServiceService } from 'src/app/services/email-service.service';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.scss']
})
export class MailListComponent implements OnInit {
  public emailList :any;
  public emptyInbox: boolean;

  constructor( private mailService : EmailServiceService) { }

  ngOnInit(): void {
    this.mailService.getEmails().subscribe(mails=>{
      if(mails.length ===0){
        this.emptyInbox =  true;
      }
      console.log(mails)
    })
  }

}
