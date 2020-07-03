import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {IBookAuthor} from '../interfaces/bookauthor';

@Injectable({
  providedIn: 'root'
})
export class BookauthorService {

  private bookauthorurl : string = "https://localhost:44307/api/Books/"

  constructor(private http : HttpClient) { }

  getBookAuthor(id : number) : Observable<IBookAuthor> {
    return this.http.get<IBookAuthor>(this.bookauthorurl+id);
  }

}
