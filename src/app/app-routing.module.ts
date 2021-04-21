import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'

import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';

import {FeedbackComponent} from './feedback/feedback.component'
import { StartComponent } from './start/start.component';
import { QuizComponent } from './quiz/quiz.component';
import { AppointComponent } from './appoint/appoint.component';
const routes: Routes = [
  {path:'appoint',component:AppointComponent},
  {path:'',component:HomeComponent},
  {path:'info',component:InfoComponent},
  {path:'home',component:HomeComponent},
  {path:'quiz',component:QuizComponent},
  {path:'feed',component:FeedbackComponent},
  {path:'start',component:StartComponent}
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers:[]
})
export class AppRoutingModule { }
