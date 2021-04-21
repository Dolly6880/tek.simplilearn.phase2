import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz.model';
import { QuizService } from '../quiz.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizzes: Quiz[]=[];
  x=0;
  score=0;
  y=0;
  submit=false;
  z=0;
  constructor(private router: Router,private quizservice: QuizService) { }

  ngOnInit(): void {
    this.quizservice.getquizzes().subscribe(
      quizzes =>{
        this.quizzes=quizzes;
      }
    )
  }

  get(correct:boolean,x:number,thyroid:boolean)
  {
    this.x++;
      if(correct && thyroid)
      {
        this.score=5;
      
        
      }
      else if(correct)
      {
        this.score++;
        
        
      }
      else{
        this.y++;
      }
      
      
  }

  
  result(){
    if(this.x>5){
      this.submit=true;
    }
  }
  consult() {
    this.router.navigate(['/appoint']);

  }
  back() {
    this.router.navigate(['/feed']);

  }
}
