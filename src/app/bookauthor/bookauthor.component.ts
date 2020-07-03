import { Component, OnInit } from '@angular/core';
import {IBookAuthor} from '../interfaces/bookauthor';
import {BookauthorService} from '../services/bookauthor.service';
import { Observable, of } from 'rxjs';
import { Store, State } from '@ngrx/store';
import * as BookAuthorActions from '../store/actions/bookauthor.actions';
import {AppState} from '../store/app.state';

@Component({
  selector: 'app-bookauthor',
  templateUrl: './bookauthor.component.html',
  styleUrls: ['./bookauthor.component.css']
})
export class BookauthorComponent implements OnInit {

  bookauthors$: Observable<IBookAuthor[]>;

  constructor(private store: Store<AppState>) {
    store.select(state => state.bookauthor)
        .subscribe((data: any) => {
          this.bookauthors$ = data;
        });
  }

  ngOnInit(): void {
    this.store.dispatch(new BookAuthorActions.GetBookauthor(1));
  }

  teststate(){
    console.log(this.bookauthors$);
  }

  teststatewithanothrbook(){
    this.store.dispatch(new BookAuthorActions.GetBookauthor(2));
  }

}
