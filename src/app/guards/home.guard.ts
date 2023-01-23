import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {
  constructor(private storage: Storage, private router: Router) {
  }

  async canActivate() {
    const intro = await this.storage.get('isIntroShowed');
    if (intro) {
      this.router.navigateByUrl('/home');

      return false;
    } else {
      return true;
    }
  }

}
