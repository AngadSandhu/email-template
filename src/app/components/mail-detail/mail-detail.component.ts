import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailServiceService } from 'src/app/services/email-service.service';

@Component({
  selector: 'app-mail-detail',
  templateUrl: './mail-detail.component.html',
  styleUrls: ['./mail-detail.component.scss']
})
export class MailDetailComponent implements OnInit {
  public id: any;
  public emailDetails: any;

  constructor(private activatedroute:ActivatedRoute, private emailService: EmailServiceService) {
    this.activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
   }

  ngOnInit(): void {
    let emails;
    this.emailService.getEmails().subscribe(mails=>{
        emails = mails;
        this.activatedroute.paramMap.subscribe(params => {
          this.id = params.get('id');
          emails.forEach((email) => {
            if (email.id == this.id) {
              this.emailDetails = email;
            }
          });
        });
    },error =>{
      console.log('Oops ! Unable to fetch your email !');
    });
  }

}
