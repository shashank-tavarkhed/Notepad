import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { Note } from '../model/note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes: Note[] = [{
    id: 1,
    title: 'assdadsfadsfadsadsfsdfdasassdadsfadsfadsassdadsfadsfadsadsfsdfdasadsfsdfdasassdadsfadsfadsadsfsdfdasassdadsfadsfadsadsfsdfdas',
    content: 'asdas',
    createdOn: 'Mar 18, 2022'
},{
  id: 2,
  title: 'asdas',
  content: 'asdas',
  createdOn: 'Mar 18, 2022'
},{
  id: 3,
  title: 'asdas',
  content: 'asdas',
  createdOn: 'Mar 18, 2022'
},{
  id: 4,
  title: 'asdas',
  content: 'asdas',
  createdOn: 'Mar 18, 2022'
},{
  id: 5,
  title: 'asdas',
  content: 'asdas',
  createdOn: 'Mar 18, 2022'
},{
  id: 1,
  title: 'assdadsfadsfadsadsfsdfdasassdadsfadsfadsassdadsfadsfadsadsfsdfdasadsfsdfdasassdadsfadsfadsadsfsdfdasassdadsfadsfadsadsfsdfdas',
  content: 'asdas',
  createdOn: 'Mar 18, 2022'
},{
id: 2,
title: 'asdas',
content: 'asdas',
createdOn: 'Mar 18, 2022'
},{
id: 3,
title: 'asdas',
content: 'asdas',
createdOn: 'Mar 18, 2022'
},{
id: 4,
title: 'asdas',
content: 'asdas',
createdOn: 'Mar 18, 2022'
},{
id: 5,
title: 'asdas',
content: 'asdas',
createdOn: 'Mar 18, 2022'
},];
  isLoading = false;
  notesSub = new BehaviorSubject(this.notes);
  constructor(private router: Router) {

  }

  save(): void {
    // this.storage.set('notes', this.notes);
  }

  getNote(id: number): Note {
    return this.notes.find((note) => note.id === id);
  }

  getNoteIndex(id: number): number{
    return this.notes.findIndex( note => note.id === id);
  }

  createNote(titlel: string, contentl: string): void {
    const id = this.notes.length+1;
    const createdOnl = new Date(Date.now()).toLocaleDateString('en-US',{
      day:'2-digit',
      month: 'short',
      year: 'numeric'
    });

    const newNote = {
      id: id,
      title: titlel,
      content: contentl,
      createdOn: createdOnl,
    };
    this.notes.push(newNote);
    console.log(this.notes);

    this.save();
  }

  editNote(index: number,titlel: string, contentl: string){
    //modify date
    const createdOnl = new Date(Date.now()).toLocaleDateString('en-US',{
      day:'2-digit',
      month: 'short',
      year: 'numeric'
    });
    this.notes[index].createdOn = createdOnl;
    this.notes[index].title =titlel;
    this.notes[index].content =contentl;
    this.save();
    this.router.navigateByUrl('');
  }

  deleteNote(index: number): void {
    this.notes.splice(index,1);
    this.updateNotes();
    this.save();
  }

  updateNotes(){
    this.notesSub.next(this.notes);
  }
}
