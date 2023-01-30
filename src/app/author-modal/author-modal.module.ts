import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthorModalPageRoutingModule } from './author-modal-routing.module';

import { AuthorModalPage } from './author-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthorModalPageRoutingModule
  ],
  declarations: [AuthorModalPage]
})
export class AuthorModalPageModule {}
