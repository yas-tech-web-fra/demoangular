import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-reactive-liste-courses',
  templateUrl: './reactive-liste-courses.component.html',
  styleUrls: ['./reactive-liste-courses.component.scss']
})
export class ReactiveListeCoursesComponent implements OnInit {
article: FormGroup;
articles : any[]=[];
  constructor() {
    //Instanciation du Formgroup directement dans le constructeur
    //Le FormGroup contient les differents omControls (champs) du formulaire
    this.article = new FormGroup({
      //nous avons vbesoin de s  adesignation
    designation: new FormControl(''),
    //et d un prix
    prix: new FormControl('')
  })
}

  ngOnInit(): void {
  }
  /**
   * Permet d ajouter un article à la liste des articles
   */
  addArticle(){
    //push dans la liste 'articles'
    this.articles.push(this.article.value);
    //remet à zero le champs input
    this.article.reset();
  }
//   /**
//    * Methode 1 pour recuperer le price total
//    */
// // ici écrit en typeScript get le nom
//   get TotalPrice(): number{
// return this.articles.reduce((total,article) => total + article.prix, 0);
//   }

get totalPrice(): number{
  // return this.articles.reduce((total,article) => total + article.prix, 0);
  let total = 0;
  for(let article of this.articles){
    total += article.prix;
  }
  return total;
}
}
