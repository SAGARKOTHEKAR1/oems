import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from 'src/app/pages/all-services/questionsService/questions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatequestion',
  templateUrl: './updatequestion.component.html',
  styleUrls: ['./updatequestion.component.css']
})
export class UpdatequestionComponent implements OnInit {
  question_id:any;
  question_title:any;

  updateQuestion=new FormGroup({
    content: new FormControl('',[Validators.required]) ,
    option1: new FormControl('',[Validators.required]) ,
    option2: new FormControl('',[Validators.required]) ,
    option3: new FormControl('',[Validators.required]) ,
    option4: new FormControl('',[Validators.required]) ,
    answer: new FormControl('',[Validators.required]) 
  });
  updatequestion:any = {
    "quiz": {
      quiz_id:""
    },
    "content": this.updateQuestion.value.content,
    "option1": this.updateQuestion.value.option1,
    "option2": this.updateQuestion.value.option2,
    "option3": this.updateQuestion.value.option3,
    "option4": this.updateQuestion.value.option4,
    "answer": this.updateQuestion.value.answer
    }
    constructor(private activated:ActivatedRoute, private questionService:QuestionsService, private router:Router ) { 
   
    }
  ngOnInit(): void {
    this.question_id = this.activated.snapshot.params['question_id'];
    this.question_title = this.activated.snapshot.params['title'];
    this.questionService.getByIdQuestion(this.question_id).subscribe(
      (response)=>{
        console.log(response);
        this.updatequestion = response;
      },(error)=>{
        console.log(error);
        
      });
  }
  updateQuestionSubmit(){
    console.log(this.updatequestion);
    Swal.fire({
      title: 'Do you want to Update the changes?',
      showDenyButton: true,
      // showCancelButton: true,
      confirmButtonText: 'UPDATE',
      denyButtonText: `CANCELE`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
       this.questionService.updateQuestions(this.updatequestion).subscribe(
        (response)=>{
          Swal.fire('UPDATE!', '', 'success');
          this.router.navigate(['/admin/view-questions/'+this.updatequestion.quiz.quiz_id+'/'+this.updatequestion.quiz.title]);
          console.log(response); 
        },
        (error)=>{console.log(error);
        });
      } else if (result.isDenied) {
        Swal.fire('Changes are not Update', '', 'info')
      }
    })
    
  }
}
