import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CategoryService } from '../../all-services/categoryService/category.service';
import { QuizesService } from '../../all-services/quizzesService/quizes.service';

@Component({
  selector: 'app-updatequizzess',
  templateUrl: './updatequizzess.component.html',
  styleUrls: ['./updatequizzess.component.css']
})
export class UpdatequizzessComponent implements OnInit {
  category: any;
  category_data: any;
  id:any;
  updatequize = new FormGroup({
    quiz_id: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    maxMarks: new FormControl('', [Validators.required]),
    numberOfQuestions: new FormControl('', [Validators.required]),
    active: new FormControl(true, [Validators.required]),
    category_Id: new FormControl('', [Validators.required]),
  })
  constructor(private quizeService:QuizesService,private categoryService:CategoryService,
    private router:Router, private activated:ActivatedRoute) {
    this.id = this.activated.snapshot.params['id'];
    console.log(this.id);
    this.quizeService.getQuizById(this.id).subscribe(
      (response)=>{
        this.category_data = response;
        console.log(response);
        
      },
      (error)=>{console.log(error);
      });
    
   }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(
      (response)=>{
        this.category = response;
        console.log(response); 
      },
      (error)=>{console.log(error);
      });

  }
  updatequizes(){
    let updatequizess: any = {
      title: this.updatequize.value.title,
      description: this.updatequize.value.description,
      maxMarks: this.updatequize.value.maxMarks,
      numberOfQuestions: this.updatequize.value.numberOfQuestions,
      active: this.updatequize.value.active,
      category: {
        category_id: this.updatequize.value.category_Id
      }
    }
    console.log(updatequizess);
    


    Swal.fire({
      title: 'Do you want to Update the changes?',
      showDenyButton: true,
      // showCancelButton: true,
      confirmButtonText: 'UPDATE',
      denyButtonText: `CANCELE`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
       this.quizeService.upDateQuizById(updatequizess).subscribe(
        (response)=>{
          Swal.fire('UPDATE!', '', 'success');
          this.router.navigate(['admin/allquizzes']);
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
