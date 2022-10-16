import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from 'src/app/pages/all-services/questionsService/questions.service';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {
  quize_id:any;
  quize_title:any;
  
  addquestion=new FormGroup({
    content: new FormControl('',[Validators.required]) ,
    option1: new FormControl('',[Validators.required]) ,
    option2: new FormControl('',[Validators.required]) ,
    option3: new FormControl('',[Validators.required]) ,
    option4: new FormControl('',[Validators.required]) ,
    answer: new FormControl('',[Validators.required]) 
  });
  question = {
    "quiz": {
      quiz_id:""
    },
    "content": this.addquestion.value.content,
    "option1": this.addquestion.value.option1,
    "option2": this.addquestion.value.option2,
    "option3": this.addquestion.value.option3,
    "option4": this.addquestion.value.option4,
    "answer": this.addquestion.value.answer
    }

  constructor(private activated:ActivatedRoute, private questionService:QuestionsService, private router:Router ) { 
    this.quize_id = this.activated.snapshot.params['id'];
    this.quize_title = this.activated.snapshot.params['title'];
    this.question.quiz['quiz_id'] = this.quize_id;
  }

  ngOnInit(): void {
  }
  addQuestionSubmit(){
    console.log(this.addquestion.value);

    this.questionService.addQuestions(this.question).subscribe(
      (response)=>{
        console.log(response);
        this.router.navigate([`admin/view-questions/${this.quize_id}/${this.quize_title}`]);
      },
      (error)=>{console.log(error);
      })
    
  }
}
