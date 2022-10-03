import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper/helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  public getAllCategories(){
     return this.http.get(`${baseUrl}/category/`);
  }

  public addCategories(data:any){
    return this.http.post(`${baseUrl}/category/`,data);
 }

 public upDateCategoriesById(data:any){
  return this.http.put(`${baseUrl}/category/`,data);
}

public getCategoriesById(id:any){
  return this.http.get(`${baseUrl}/category/`+id);
}

public deleteCategoriesById(id:any){
  return this.http.delete(`${baseUrl}/category/`+id);
}

}
