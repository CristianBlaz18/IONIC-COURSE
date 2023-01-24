import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor() { }
  getAuthors() {
    return fetch("https://reqres.in/api/users?page=2").then(
      response => response.json()
    );
  }
}
