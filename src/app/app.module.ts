import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';

import { HomeComponent } from './home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import { InfoComponent } from './info/info.component';
import { FeedbackComponent } from './feedback/feedback.component';
import {MatDialogModule} from '@angular/material/dialog';
import { StartComponent } from './start/start.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatSliderModule} from '@angular/material/slider';
import {MatChipsModule} from '@angular/material/chips';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { QuizComponent } from './quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';
import { AppointComponent } from './appoint/appoint.component';


@NgModule({
  declarations: [
    AppComponent,
    
  
    HomeComponent,
    
    InfoComponent,
    FeedbackComponent,
    StartComponent,
    QuizComponent,
    AppointComponent,

   
    
    
  ],
  imports: [
    BrowserModule,
    
   
    BrowserAnimationsModule,
    
    FlexLayoutModule ,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    AppRoutingModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule,
    MatListModule,
    MatSliderModule,
    MatChipsModule,
    HttpClientModule
    


  ],
  providers: [],
  exports:[RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
