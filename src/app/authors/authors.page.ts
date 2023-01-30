import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthorModalPage } from '../author-modal/author-modal.page';
import { LibraryService } from '../services/library.service';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.page.html',
  styleUrls: ['./authors.page.scss'],
})
export class AuthorsPage implements OnInit {
authors:any;
  constructor(private libraryServices:LibraryService,
    private modalController: ModalController) { }

  ngOnInit() {
    this.libraryServices.getAuthors().then(res=>{
      this.authors = res;
    })
  }
  async showBooks(author: any){
    
    const modal = await this.modalController.create({
      component: AuthorModalPage,
      componentProps:{
        
        author:author
      }
    });
    return await modal.present();
  }

}
