import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';


@Component({
  selector: 'app-top10-books',
  templateUrl: './top10-books.page.html',
  styleUrls: ['./top10-books.page.scss'],
})
export class Top10BooksPage implements OnInit {
  books:any;
  constructor(private libraryService:LibraryService) { }

  ngOnInit() {
    this.libraryService.getTop10books().then(books=>{
      this.books = books;
    })
  }
  

}
