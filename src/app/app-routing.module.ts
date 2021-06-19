import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailDetailComponent } from './components/mail-detail/mail-detail.component';

const routes: Routes = [
  { path: 'email/:id', component: MailDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
