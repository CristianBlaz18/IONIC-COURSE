import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';
import { Storage } from '@ionic/storage-angular';
import { AlertController, ModalController } from '@ionic/angular';
import { BookDetailModalPage } from '../book-detail-modal/book-detail-modal.page';

@Component({
  selector: 'app-favorite-books',
  templateUrl: './favorite-books.page.html',
  styleUrls: ['./favorite-books.page.scss'],
})
export class FavoriteBooksPage implements OnInit {
  my_favorite_books:any;
  constructor(
    private libraryService: LibraryService,
    private storage:Storage,
    private alertController:AlertController,
    private modalController:ModalController) { }

  async ngOnInit() {
    const user_id = await this.storage.get("user_id");
    this.libraryService.getMyFavoriteBooks(user_id).subscribe((data:any)=>{
      this.my_favorite_books = data
    },(errror)=>{
      this.presentAlert("Opps","Hubo un error", errror)
    })
  }
  async presentAlert(header: any, subHeader:any, message:any){
    const alert = await this.alertController.create(
      {
        header: header,
        subHeader : subHeader,
        message: message,
        buttons: ['OK']
      }
    );
    await alert.present(); 
  }
  async showBook(favorite:any){
    const modal = await this.modalController.create({
      component:BookDetailModalPage,
      componentProps:{
        book:favorite
      }
    });
    return await modal.present();

  }
  

}
