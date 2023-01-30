import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorModalPage } from './author-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AuthorModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorModalPageRoutingModule {}
