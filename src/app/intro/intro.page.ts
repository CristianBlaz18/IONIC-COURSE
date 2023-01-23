import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  slideOpt={
    initalSlide: 0, //Slide inicial
    slidesPerView: 1, //Configuramos un slide por vista
    centerSlides: true, //Que las slides esten centradas 
    speed: 1200 // velocidad movimiento de los slides
  }
  slides =[
    {
      title: "Percy Jackson y el Ladron del Rayo",
      img: "https://images.cdn2.buscalibre.com/fit-in/360x360/b8/86/b886a5ec056f6eea24f542dde45f11ef.jpg",
      descripcion: "¿Qué pasaría si un día descubrieras que, en realidad, eres hijo de un dios griego que debe cumplir una misión secreta?" 
    },
    {
      title: "Harry Potter y la Piedra Filosofal"  ,
      img: "https://images.ctfassets.net/usf1vwtuqyxm/2DCs73x6P8seNobQ9zBSbO/1a5dfd6ed5fc0ed9545370470fc3d74c/English_Harry_Potter_1_Epub_9781781100219.jpg?w=914&q=70&fm=webp",
      descripcion: "Se describen las aventuras del joven aprendiz de magia y hechicería Harry Potter y sus amigos Hermione Granger y Ron Weasley." 
    },
    {
      title: "Viaje al Centro de la Tierra",
      img: "http://grupoalmuzara.com/libro/9788411310697_portada.jpg",
      descripcion: "El joven Axel y su tío, el profesor Otto, emprenden un viaje fantástico al interior de la Tierra. " 
    },
    {
      title: "Assassin'S Creed",
      img: "https://images-na.ssl-images-amazon.com/images/I/615%2BQo0XDZL.jpg",
      descripcion: "Esta novela narra la historia detrás del exitoso videojuego Assassin's Creed." 
    }
  ]
  constructor(private router: Router, private storage: Storage) {
    
   }
  finish(){
    this.storage.set("isIntroShowed", true);
    this.router.navigateByUrl("/login");
  }

  ngOnInit() {
  }

}
