import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper/helper';

@Injectable({
  providedIn: 'root'
})
export class QuizesService {

  constructor(private http:HttpClient) { }
  public getAllQuizes(){
   return this.http.get(`${baseUrl}/quiz/`);
  }
// get All quiz
  public addQuiz(quiz:any){
    return this.http.post(`${baseUrl}/quiz/`,quiz);
   }

  //  delete By Id quiz
   public deleteQuiz(quiz_id:any){
    console.log(quiz_id);
    
    return this.http.delete(`${baseUrl}/quiz/`+quiz_id, {responseType:'text'});
   }

   //  get quis By Id
   public getQuizById(quiz_id:any){
    return this.http.get(`${baseUrl}/quiz/`+quiz_id);
   }

   //  upDate quis By Id
   public upDateQuizById(quizData:any){
    return this.http.put(`${baseUrl}/quiz/`,quizData);
   }

   //  get quis of category

   public getQuizOfCategory(category_id:any){
    return this.http.get(`${baseUrl}/quiz/category/`+category_id);
   }

   // get active quizzes
   public getActiveQuizzes(){
    return this.http.get(`${baseUrl}/quiz/active`);
   }

   // get active quizzes Of Category
public getActiveQuizzesOfCategory(category_id:any){
  return this.http.get(`${baseUrl}/quiz/category/active`,category_id);
}

}
