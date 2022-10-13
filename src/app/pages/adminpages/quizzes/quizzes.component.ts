import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { QuizesService } from '../../all-services/quizzesService/quizes.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {
allQuizzess:any;
  constructor(private quizzesService:QuizesService) { }

  ngOnInit(): void {
    this.quizzesService.getAllQuizes().subscribe(
      (respons)=>{
        this.allQuizzess = respons;
        console.log(this.allQuizzess);
        
      },(error)=>{console.log(error);
      })
  }

  deleteQuize(quiz_id:any){
    console.log(quiz_id);
    Swal.fire({
      title: 'Do you want to delete the Quizes?',
      showDenyButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Cancel`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.quizzesService.deleteQuiz(quiz_id).subscribe(
          (respons)=>{
            console.log(respons);
            this.allQuizzess = this.allQuizzess.filter((quiz:any)=>quiz.quiz_id != quiz_id);
            Swal.fire('Delete!', '', 'success');
            window.location.reload();
          },(error)=>{console.log(error);
          })
      } else if (result.isDenied) {
        Swal.fire('Changes are not delet', '', 'info');
      }
    })
    
    
  }

}
