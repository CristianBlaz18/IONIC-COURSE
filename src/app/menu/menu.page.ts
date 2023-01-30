import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private menu: MenuController,
    private navCtrl: NavController,
    private storage:Storage) { }

  ngOnInit() {
  }

  closeMenu(){
    this.menu.close();
    
  }
  
  async logout(){
    
    this.navCtrl.navigateRoot("/login");
    this.storage.set("isUserLoggedIn",false);
    this.storage.set("user", null);
    this.storage.set("user_id", null);
    
  }
  goToAuthors(){
    this.navCtrl.navigateRoot("/menu/authors");
    this.menu.close();
  }
  goToHome(){
    this.navCtrl.navigateRoot("/menu/home");
    this.menu.close();
  }
  goToBooks(){
    this.navCtrl.navigateRoot("/menu/books");
    this.menu.close();
  }
  goToMyFavorites(){
    this.navCtrl.navigateRoot("/menu/favorite-books");
    this.menu.close();
  }
  goToTop10(){
    this.navCtrl.navigateRoot("/menu/top10-books");
    this.menu.close();
  }

}
