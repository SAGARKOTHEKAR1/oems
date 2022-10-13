import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../all-services/categoryService/category.service';
import { QuizesService } from '../../all-services/quizzesService/quizes.service';

@Component({
  selector: 'app-adquizzes',
  templateUrl: './adquizzes.component.html',
  styleUrls: ['./adquizzes.component.css']
})
export class AdquizzesComponent implements OnInit {
  category: any;

  addquize = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    maxMarks: new FormControl('', [Validators.required]),
    numberOfQuestions: new FormControl('', [Validators.required]),
    active: new FormControl(true, [Validators.required]),
    ctegory_Id: new FormControl('', [Validators.required]),
  })

  

  constructor(private quizesService: QuizesService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((res) => {
      this.category = res;
      console.log(this.category);

    }, (err) => {
      console.log(err);
    })
  }

  addquizes() {

    let addquizess: any = {
      title: this.addquize.value.title,
      description: this.addquize.value.description,
      maxMarks: this.addquize.value.maxMarks,
      numberOfQuestions: this.addquize.value.numberOfQuestions,
      active: this.addquize.value.active,
      category: {
        category_id: this.addquize.value.ctegory_Id,
        description: this.category.description,
        title: this.category.title
      }
    }
    console.log(addquizess);
    this.quizesService.addQuiz(addquizess).subscribe((res) => {
      console.log(res);

    }, (err) => {
      console.log(err);

    })

  }

}
