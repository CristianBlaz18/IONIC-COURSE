import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Top10BooksPageRoutingModule } from './top10-books-routing.module';

import { Top10BooksPage } from './top10-books.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Top10BooksPageRoutingModule
  ],
  declarations: [Top10BooksPage]
})
export class Top10BooksPageModule {}
