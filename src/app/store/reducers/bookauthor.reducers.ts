import { Action } from '@ngrx/store'
import { IBookAuthor } from '../../interfaces/bookauthor'
import * as BookAuthorActions from './../actions/bookauthor.actions'
import { isNgTemplate } from '@angular/compiler';
import { title } from 'process';

// Section 1
export const initialState : IBookAuthor = {
    id:0,
    title:"default",
    publisher:null,
    authors:null
}

// Section 2
export function reducer(state: IBookAuthor[] = [initialState], action: BookAuthorActions.ActionUnion) {

    // Section 3
    switch(action.type) {

        case BookAuthorActions.GET_BOOKAUTHOR_SUCCESS:
            console.log("Payload at reducer before returning and joining with state:", action.payload);
            return [...state, action.payload];
            
        default:
            return state;
            
    }
}