import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { BookauthorService} from '../../services/bookauthor.service';
import { ActionTypes } from '../actions/bookauthor.actions';
import * as Action from '../actions/bookauthor.actions';
import { IBookAuthor } from '../../interfaces/bookauthor';
 
@Injectable()
export class BookauthorEffects {

  
  @Effect()
  loadBookauthors$ = this.actions$.pipe(
    ofType(ActionTypes.GET_BOOKAUTHOR),
    switchMap((action: Action.GetBookauthor) => 
      this.bookauthorService.getBookAuthor(action.payload).pipe(
        map((bookauthors: IBookAuthor) => new Action.GetBookauthorSuccess(bookauthors))
      )
    )
  );
 
  constructor(
    private actions$: Actions,
    private bookauthorService: BookauthorService
  ) {}
}

  // loadBookauthors$ = createEffect(() => this.actions$.pipe(
  //   ofType(ActionTypes.GET_BOOKAUTHOR),
  //   mergeMap(() => this.bookauthorService.getBookAuthor(payload)
  //     .pipe(
  //       map(bookauthors => ({ type: '[Book API] Bookauthors Loaded Success', payload: bookauthors })),
  //       catchError(() => of({ type: '[Book API] Bookauthors Loaded Error'})
  //     ))
  //   )
  // ));

  // @Effect()
  // getAttendees$ = this.actions$.pipe(
  //   ofType(AttendeesActionTypes.LoadAttendees),
  //   switchMap((action: LoadAttendees) =>
  //     this.eventService.getAttendees().pipe(
  //       map((attendees: Attendee[]) => new LoadAttendeesSuccess(attendees)),
  //       catchError(error => of(new LoadAttendeesFail(error)))
  //     )
  //   )
  // );

//   private getAllAssets() {
//     return createEffect(() =>
//         this.actions.pipe(
//             ofType(getAssetsRequestStarted.type),
//             mergeMap(({ payload }: { payload: string[] }) =>
//                 this.coincap.getAssets(payload).pipe(
//                     map((response: GetAssetsResponseDto) => response.data),
//                     catchError(() => of(undefined))
//                 )
//             ),
//             filter(Boolean),
//             map((payload: Asset[]) => {
//                 return getAssetsRequestSuccess({ payload });
//             })
//         )
//     );
// }