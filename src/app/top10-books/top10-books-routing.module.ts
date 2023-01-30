import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Top10BooksPage } from './top10-books.page';

const routes: Routes = [
  {
    path: '',
    component: Top10BooksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Top10BooksPageRoutingModule {}
