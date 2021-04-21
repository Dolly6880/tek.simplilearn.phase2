import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule,HttpHeaders} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import { Quiz } from './quiz.model';
@Injectable({
  providedIn: 'root'
})
export class QuizService {
  name="";
  quizzes:Quiz[]=[];
  quiz='./assets/quiz.json';

  httpOptions={header: new HttpHeaders({'content-type':'application/json'})}
  constructor(private httpserver:HttpClient) { }

  getquizzes():Observable<Quiz[]>{
    return this.httpserver.get<Quiz[]>(this.quiz)

  };

  
}
