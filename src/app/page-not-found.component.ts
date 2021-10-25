import { Component } from '@angular/core';
 
@Component({
    selector: 'page-404',
    template: `
    <div class='center'>
      <img src="https://png.pngtree.com/png-vector/20190130/ourlar…e-text-design-page-404-error-png-image_638908.jpg"/>
      <h1>Désolé, cette page n'existe pas... encore ;-)</h1>
      <a routerLink="/pokemons" class="waves-effect waves-teal btn-flat">
        Retourner à l' accueil
      </a>
    </div>
  `
})
export class PageNotFoundComponent { }