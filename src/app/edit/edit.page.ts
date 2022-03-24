import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  id;
  note;
  isLoading=false;
  constructor(public toastController: ToastController,
              private route: ActivatedRoute,
              private noteService: NotesService)
    {
     this.isLoading = true;
      }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
    });
    toast.present();
  }

  ngOnInit() {
    // console.log('editing');
    this.getNoteID();
    this.getNote(this.id);
    this.isLoading=false;

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

  onSave(form: any){
    if(!form.valid){
      this.presentToast('Please fill all the details');
      return;
    }

    // editNote
    const index = this.noteService.getNoteIndex(this.id);
    this.noteService.editNote(index,form.value.title,form.value.content);
  }
}
