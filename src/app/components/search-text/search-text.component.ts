import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { SkillsService } from 'src/app/services/skills.service';
import { Skill } from '../skills/skill';

@Component({
  selector: 'app-search-text',
  templateUrl: './search-text.component.html',
  styleUrls: ['./search-text.component.css']
})
export class SearchTextComponent implements OnInit {

  private searchedText = new Subject<string>()
  skills$!: Observable<Skill[]>

  constructor(
    private _skillsService: SkillsService,
    private _router: Router) { }

  // Ajoute un terme de recherche dans le flux de l'Observable 'searchTerms'
  search(term: string): void {
    this.searchedText.next(term)
  }

  ngOnInit(): void {
    this.skills$ = this.searchedText.pipe(
      // attendre 300ms de pause entre chaque requête
      debounceTime(300),
      // ignorer la recherche en cours si c'est la même que la précédente
      distinctUntilChanged(),
      // on retourne la liste des résultats correpsondant aux termes de la recherche
      switchMap((txtSearched: string) => this._skillsService.searchedText(txtSearched)),
    )
  }

  gotoDetail(skill: Skill): void {
    let link = ['/detailskill', skill.id]
    this._router.navigate(link)
  }
}
