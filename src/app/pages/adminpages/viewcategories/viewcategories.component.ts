import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CategoryService } from '../../all-services/categoryService/category.service';

@Component({
  selector: 'app-viewcategories',
  templateUrl: './viewcategories.component.html',
  styleUrls: ['./viewcategories.component.css']
})
export class ViewcategoriesComponent implements OnInit {

  constructor(private categoriesService:CategoryService) { }
categoriData:any =[];
  ngOnInit(): void {
    this.categoriesService.getAllCategories().subscribe(
      (respons)=>{
        console.log(respons);
        this.categoriData = respons;        
      },(error)=>{console.log(error);
      })
  }

  deleteCategory(category_id:any){
    console.log(category_id);
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      // showCancelButton: true,
      confirmButtonText: 'DELETE',
      denyButtonText: `Cancel`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.categoriesService.deleteCategoriesById(category_id).subscribe(
          (Response)=>{
            console.log(Response);
        },(error)=>{
          console.log(error);
        })
        Swal.fire('Delete!', '', 'success');
        window.location.reload();
      } else if (result.isDenied) {
        Swal.fire('Changes are Cancel', '', 'info');
      }
    })
    
  }

}
