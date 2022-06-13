import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-course',
  templateUrl: './liste-course.component.html',
  styleUrls: ['./liste-course.component.scss']
})
export class ListeCourseComponent implements OnInit {
articles: string[]=[];

newArticle!: string;

  constructor() { }

  ngOnInit(): void {
  }
addArticle(){
  this.articles.push(this.newArticle)  // l'article va se loger dans la liste (1 de plus)
  this.newArticle='';    //ici le formulaire se vide à l'instant pour laisser place à de nouvelles informations, elle affiche dans la liste d'articles
}
}
