import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailServiceService } from 'src/app/services/email-service.service';

@Component({
  selector: 'app-mail-detail',
  templateUrl: './mail-detail.component.html',
  styleUrls: ['./mail-detail.component.scss']
})
export class MailDetailComponent implements OnInit {
  public id: string;
  public emailDetails: any;

  constructor(private activatedroute:ActivatedRoute, private emailService: EmailServiceService) {
    this.activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
   }

  ngOnInit(): void {
    this.getEmail();
  }

  getEmail() {
    this.emailService.getEmails().subscribe(emails=>{
      this.emailDetails = emails.filter(email=>email.id === this.id);
    })
  }

}
