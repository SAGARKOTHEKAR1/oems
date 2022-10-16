import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/pages/all-services/questionsService/questions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewquestions',
  templateUrl: './viewquestions.component.html',
  styleUrls: ['./viewquestions.component.css']
})
export class ViewquestionsComponent implements OnInit {
quiz_id:any;
quiz_title:any;
allQuestion:any;
  constructor(private activated:ActivatedRoute, private questionService:QuestionsService) { 
    this.quiz_id = this.activated.snapshot.params['id'];
    this.quiz_title = this.activated.snapshot.params['title'];
  }

  ngOnInit(): void {
    this.questionService.viewAllQuestions(this.quiz_id).subscribe(
      (response)=>{
        this.allQuestion = response;
        console.log(response);
      },
    (error)=>{console.log(error);
    })
  }


  deleteQuestion(question_id:any){
    console.log(question_id);

    Swal.fire({
      title: 'Do you want to Delete the question?',
      showDenyButton: true,
      // showCancelButton: true,
      confirmButtonText: 'DELETE',
      denyButtonText: `CANCELE`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
       this.questionService.deleteQuestions(question_id).subscribe(
        (response)=>{
          Swal.fire('DELETE!', '', 'success');
          console.log(response); 
          window.location.reload();
        },
        (error)=>{console.log(error);
        });
      } else if (result.isDenied) {
        Swal.fire('Changes are not DELETED', '', 'info');
      }
    });

  }
}
