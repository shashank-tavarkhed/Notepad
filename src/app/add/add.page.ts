import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  constructor(public toastController: ToastController,
              private notesService: NotesService,
              private router: Router) { }

  ngOnInit() {
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
    });
    toast.present();
  }

  onSubmit(form: any){
    if(!form.valid){
      this.presentToast('Please fill all the details');
      return;
    }
    // console.log('Lform>>', form.value);
    this.notesService.createNote(form.value.title,form.value.content);
    form.reset();
    this.router.navigateByUrl('');
  }
}
