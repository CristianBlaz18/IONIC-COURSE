import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-author-modal',
  templateUrl: './author-modal.page.html',
  styleUrls: ['./author-modal.page.scss'],
})
export class AuthorModalPage implements OnInit {
  author:any;
  books:any;
  constructor(private navParams:NavParams,
    private modalController: ModalController,
    private libraryService: LibraryService) { }

  ngOnInit() {
  }
  closeModal(){
    this.modalController.dismiss();
  }
  ionViewDidEnter(){
    this.author=this.navParams.get("author");
    console.log(" Autor: ",this.author.id);

    this.libraryService.getBooksAuthor(this.author.id).then( res => {
      this.books = res;
    })
  }
}
