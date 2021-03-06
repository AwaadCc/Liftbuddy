import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { v4 as uuidv4 } from 'uuid';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { StorageItem } from '../shared/storage-item';
import { IonTextarea, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.page.html',
  styleUrls: ['./add-note.page.scss'],
})
export class AddNotePage implements OnInit, AfterViewInit {

  @ViewChild('textInput', {read: ElementRef}) textInput: ElementRef;
  @ViewChild('textInput', {read: IonTextarea}) textArea: IonTextarea;
  @ViewChild('textInput2', {read: ElementRef}) textInput2: ElementRef;
  @ViewChild('textInput2', {read: IonTextarea}) textArea2: IonTextarea;
  arr: StorageItem[] = [];
  headerLabel = 'Add Note';
  state: any;
  enableDelete: boolean;
  constructor(private storage: Storage, private router: Router,
    private alertController: AlertController,
    private activatedRoute: ActivatedRoute) { }
  async ngAfterViewInit() {
    await this.textArea.setFocus();
    if (this.state.obj) {
      this.textInput.nativeElement.value = this.state.obj.value;
      this.textInput2.nativeElement.value = this.state.obj.title
      this.textInput.nativeElement.style.backgroundColor = this.state.obj.color;
    }
  }

  async ngOnInit() {
    this.activatedRoute.paramMap
    .subscribe((e) => {
      this.state = window.history.state;
      if (this.state.obj) {
        this.headerLabel = 'Edit Note';
        this.enableDelete = true;
      }
    });  
  }

  async showKeyboard() {
    await this.textArea.setFocus();
  }

  async showKeyboard2() {
    await this.textArea2.setFocus();
  }

  clearInput() {
    this.textInput.nativeElement.value = '';    
    this.textInput2.nativeElement.value = '';   
  }

  async saveNote() {
    const text = this.textInput.nativeElement.value as string;  
    const text2 = this.textInput2.nativeElement.value as string;

    if (text.trim().length > 0) {
      let id;
      this.arr = await this.storage.get('notes') as StorageItem[];
      if (this.state.obj) {
        id = this.state.obj.key;
        await this.updateNote(id, text, text2, this.arr);
      } else {
        id = uuidv4();
        const time = Date.now();
        const color = this.textInput.nativeElement.style.backgroundColor;
        const item = <StorageItem>{key: id, value: text, title: text2, lastUpdated: time, color: color};
        
        if (!this.arr) {
          this.arr = [];
        }
        this.arr.push(item);
        await this.storage.set('notes', this.arr);
        this.router.navigate(['/tabs/home']);
      }
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Please enter some text.',
        buttons: [{
          role: 'cancel',
          text: 'Ok'
        }]
      })
      alert.present();
      this.textInput.nativeElement.value = '';
      this.textInput2.nativeElement.value = '';
    }

  }
  async updateNote(id: any, text: string, text2: string, arr: StorageItem[]) {
    const itemToUpdate = arr.find((e) => e.key === id);
    itemToUpdate.value = text;
    itemToUpdate.title = text2;
    itemToUpdate.lastUpdated = Date.now();
    itemToUpdate.color = this.textInput.nativeElement.style.backgroundColor;
      await this.storage.set('notes', this.arr);
      this.router.navigate(['/tabs/home']);
  }

  async deleteNote() {
    this.arr = await this.storage.get('notes') as StorageItem[];
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Are you sure, you want to delete the note?',
      buttons: [{
        text: 'Ok',
        handler: async () => {
          const itemToDeleteIndex = this.arr.findIndex((e) => e.value === this.textInput.nativeElement.value);
          console.log(this.arr);
          this.arr.splice(itemToDeleteIndex, 1);
          console.log(this.arr);  
          await this.storage.set('notes', this.arr);
          this.router.navigate(['/tabs/home']);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
    ]
    })
    alert.present();

  }

  setColor(color) {
    this.textInput.nativeElement.style.backgroundColor = color;
  }
}
