import { Component } from '@angular/core';
 
@Component({
    selector: 'page-404',
    template: `
    <div class='center'>
      <img src="https://image.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg"/>
      <h1>Désolé, cette page n'existe pas... encore ;-)</h1>
      <a href="/" type="button" class="btn btn-warning">
        Retourner à l'accueil
</a>
    </div>
  `
})
export class PageNotFoundComponent { }