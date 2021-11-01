import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SkillsService } from 'src/app/services/skills.service';
import { Skill } from '../skill';
 
@Component({
  selector: 'app-edit-skill',
  template: `
    <h2 class="header center">Editer {{ skill?.name }}</h2>
        <p class="center">
            <img *ngIf="skill" [src]="skill.picture"/>
        </p>
    <app-skill-form [skill]="skill"></app-skill-form>
  `,
})
export class EditSkillComponent implements OnInit {
 
  skill!: Skill
 
  constructor(
    private _route: ActivatedRoute,
    private _skillsService: SkillsService) {}
 
  ngOnInit(): void {
    let id = +this._route.snapshot.params['id']
    this._skillsService.getSkill(id).subscribe(skill => this.skill = skill)
  }
 
}