import {IPublisher} from './publisher';
import {IAuthor} from './author';

export interface IBookAuthor{
    id:number;
    title:string;
    publisher:IPublisher;
    authors:IAuthor[];
}