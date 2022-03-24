import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Note } from '../model/note.model';
import { NotesService } from '../services/notes.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit,OnDestroy{
  notes= [];
  notesSub: any;

  date= new Date(Date.now()).toLocaleDateString('en-US',{
    day:'2-digit',
    month: 'short',
    year: 'numeric'
  });

  constructor(private router: Router,
              private alertCtrl: AlertController,
              private navCtrl: NavController,
              private notesService: NotesService) {}

  ngOnInit(): void {
    this.notesSub =this.notesService.notesSub.subscribe(res=>{
      this.notes = res;
    });
  }

  ngOnDestroy(): void {
      this.notesSub.unsubscribe();
  }
  onAdd(){
    this.router.navigateByUrl('/add');
  }

  onEdit(id: number){
    console.log(id);
    this.router.navigateByUrl(`/edit/${id}`);
  }
  onDel(id: number){
    // const idl = id*1;
    const noteindex = this.notesService.getNoteIndex(id*1);
    this.notesService.deleteNote(noteindex);

  }
  onDetails(id: number){
    console.log(id);
    this.router.navigateByUrl(`/detail/${id}`);
  }

}
