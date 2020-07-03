import {IAuthorContact} from './authorcontact';

export interface IAuthor{
    id:number;
    name:string;
    authorcontact:IAuthorContact;
}