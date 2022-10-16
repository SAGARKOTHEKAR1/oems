import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper/helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http:HttpClient) { }
  public viewAllQuestions(quiz_id:any){
    return this.http.get(`${baseUrl}/question/quiz/all/${quiz_id}`);
  };

  public getByIdQuestion(quiz_id:any){
    return this.http.get(`${baseUrl}/question/${quiz_id}`);
  };

  public addQuestions(data:any){
    return this.http.post(`${baseUrl}/question/`,data);
  };

  public deleteQuestions(questions_id:any){
    return this.http.delete(`${baseUrl}/question/${questions_id}`);
  };

  public updateQuestions(questions_data:any){
    return this.http.put(`${baseUrl}/question/`,questions_data);
  };

}
