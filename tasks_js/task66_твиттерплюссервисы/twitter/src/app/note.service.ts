import { Injectable } from '@angular/core';
import { Twit } from './twit';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  
  private data: Twit[] = [];
  constructor() { 
    
  }
    getData(): Twit[] {
        return this.data.sort((a: Twit, b: Twit) => <any>new Date(a.date) - <any>new Date(b.date));
    }

    addData(note: Twit): void{
        this.data.push(note);
    }

    deleteData(note: Twit):void{
        let index = this.data.indexOf(note);

        if(index !== -1)
            this.data.splice(index, 1);
    }
}
