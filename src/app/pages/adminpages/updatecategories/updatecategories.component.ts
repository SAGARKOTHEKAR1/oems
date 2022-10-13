import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CategoryService } from '../../all-services/categoryService/category.service';

@Component({
  selector: 'app-updatecategories',
  templateUrl: './updatecategories.component.html',
  styleUrls: ['./updatecategories.component.css']
})
export class UpdatecategoriesComponent implements OnInit {
  updatecategory=new FormGroup({
      category_id:new FormControl('',[Validators.required]),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
  });
  category_id:any;
  constructor(private categoriesService:CategoryService, private active:ActivatedRoute, private router:Router) {
    this.category_id  = this.active.snapshot.params['id'];
    this.categoriesService.getCategoriesById(this.category_id).subscribe((respons)=>{
      this.categoryData =  respons;
      console.log('Update component', this.categoryData);
    },(error)=>{
        console.log(error);
        
      });
   
  }
  categoryData:any;
  
  
  ngOnInit(): void {
  }


  upDateCategory(){
    console.log(this.updatecategory.value);

    Swal.fire({
      title: 'Do you want to Update the changes?',
      showDenyButton: true,
      // showCancelButton: true,
      confirmButtonText: 'UPDATE',
      denyButtonText: `CANCELE`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.categoriesService.upDateCategoriesById(this.updatecategory.value).subscribe(
      (respons)=>{
        console.log(respons);
      },
    (error)=>{console.log(error);
    })
      Swal.fire('UPDATE!', '', 'success');
        this.router.navigate(['admin/viewCategories'])
      } else if (result.isDenied) {
        Swal.fire('Changes are not Update', '', 'info')
      }
    })
    

    
  }
}
