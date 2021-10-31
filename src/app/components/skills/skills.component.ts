import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillsService } from 'src/app/services/skills.service';
import { Skill } from './skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  title: string = 'Liste de mes Skills'
  skills!: Skill[]
  searchedText!: string
  values!: string
  skillPractice: number = 1

  constructor(private router: Router, private _skillsService: SkillsService) { }

  ngOnInit(): void {
    this.skills = this._skillsService.getSkills()
  }

  selectSkill(skill: Skill) {
    console.log('Vous avez sélectionné ' + skill.name)
    let link = ['/detailskill', skill.id]
    this.router.navigate(link)
  }

  onKeyMy(value: string) {
    this.searchedText = `Recherche : ${value}`
  }
}
