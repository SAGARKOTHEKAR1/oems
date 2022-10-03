import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CategoryService } from '../../all-services/categoryService/category.service';

@Component({
  selector: 'app-adcategories',
  templateUrl: './adcategories.component.html',
  styleUrls: ['./adcategories.component.css']
})
export class AdcategoriesComponent implements OnInit {
  hide = true;
  addcategory = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  })
  constructor(private categoryService:CategoryService, private router:Router) { }

  ngOnInit(): void {
  }

  addcategories(){
    console.log(this.addcategory.value);
    this.categoryService.addCategories(this.addcategory.value).subscribe((res)=>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your Category has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['admin/viewCategories']);
    },(err)=>{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Your Category has been Not saved',
        showConfirmButton: false,
        timer: 1500
      })
      console.log(err);
      
    })
  }

}
