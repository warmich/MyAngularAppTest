import { Injectable } from '@angular/core';
import { Skill } from '../components/skills/skill';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { SKILLS } from '../components/skills/listSkills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private skillsUrl = 'api/skills'

  constructor(private http: HttpClient) { }

  log(log: string): void {
    console.info(log) // affiche les logs dans la console => modifier si je veux archiver les logs
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error)
      console.log(`${operation} failed: ${error.message}`)
      return of(result as T)
    }
  }

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.skillsUrl).pipe(
      tap(data => console.log(data)),
      // tap(_ => this.log(`fetched skills data`)),
      catchError(this.handleError(`getSkills`, []))
    )
  }

  getNbrSkills(): number {
    let nmbr = SKILLS.length
    return nmbr
  }

  getSkill(id: number): Observable<Skill> {

    const url = `${this.skillsUrl}/${id}`

    return this.http.get<Skill>(url).pipe(
      tap(_ => this.log(`fetched skill id=${id}`)),
      catchError(this.handleError<Skill>(`getSkill id=${id}`))
    )
  }

  getSubSkills(): string[] {
    return ['Scaffolding', 'Requêtes', 'Get / Post / Put', 'Méthodes', 'Class', 'Linq', 'Components', 'Modules', 'Styles', 'Services']
  }

  // https://blog.logrocket.com/angular-in-memory-web-api-tutorial-mocking-crud-apis-in-angular/

  createSkill(skill: Skill): Observable<Skill> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    return this.http.post<Skill>(this.skillsUrl, skill, httpOptions).pipe(
      tap(_ => this.log(`added skill id=${skill.id}`)),
      catchError(this.handleError<any>('addedSkill'))
    )
  }

  updateSkill(skill: Skill): Observable<Skill> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    return this.http.put<Skill>(this.skillsUrl, skill, httpOptions).pipe(
      tap(_ => this.log(`updated skill id=${skill.id}`)),
      catchError(this.handleError<any>('updatedSkill'))
    )
  }

  deleteSkill(skill: Skill): Observable<Skill> {
    const url = `${this.skillsUrl}/${skill.id}`
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    return this.http.delete<Skill>(url, httpOptions).pipe(
      tap(_ => this.log(`delete skill id=${skill.id}`)),
      catchError(this.handleError<Skill>('deleteSkill'))
    )
  }

  searchedText(requestedText: string): Observable<Skill[]> {
    if (!requestedText.trim()) {
      return of([])
    }

    return this.http.get<Skill[]>(`${this.skillsUrl}/?name=${requestedText}`).pipe(
      tap(_ => this.log(`found skills matching "${requestedText}"`)),
      catchError(this.handleError<Skill[]>('searchedText', []))
    )
  }
}
