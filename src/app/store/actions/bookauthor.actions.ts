// Section 1
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { IBookAuthor } from '../../interfaces/bookauthor'

// Section 2
export const GET_BOOKAUTHOR     = '[BOOKAUTHOR] Get'
export const GET_BOOKAUTHOR_SUCCESS = '[BOOKAUTHOR] Get Success'

export enum ActionTypes{
    GET_BOOKAUTHOR = '[BOOKAUTHOR] Get',
    GET_BOOKAUTHOR_SUCCESS = '[BOOKAUTHOR] Get Success'
}

// Section 3
export class GetBookauthor implements Action {
    readonly type = ActionTypes.GET_BOOKAUTHOR

    constructor(public payload: number) {}
}

export class GetBookauthorSuccess implements Action{
    readonly type = ActionTypes.GET_BOOKAUTHOR_SUCCESS

    constructor(public payload: IBookAuthor) {}
}

// Section 4
export type ActionUnion = GetBookauthor | GetBookauthorSuccess;