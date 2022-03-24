import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../model/note.model';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  id;
  note: Note;
  constructor(private route: ActivatedRoute,
              private noteService: NotesService) {  }

  ngOnInit() {
    this.getNoteID();
    this.getNote(this.id);
  }

  getNoteID(){
    this.route.params.subscribe(
      res=>{
        this.id = res.id*1;
      }
    );
  }
  getNote(id: number){
    this.note = this.noteService.getNote(id);
  }
}
