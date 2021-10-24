import { Component, OnInit } from '@angular/core';
import { SKILLS } from './listSkills';
import { Skill } from './skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  title: string = 'Liste de mes Skills'
  skills!: Skill[]
  valueProp!: string
  values!: string
  skillPractice: number = 20

  constructor() { }

  ngOnInit(): void {
    this.skills = SKILLS
  }

  selectSkill(skill: Skill) {
    console.log('Vous avez selectionné ' + skill.name)
  }
  onClickMy() {
    console.log('Clic !')
  }

  /*onKeyMy(event: any){
  this.value = `Bonjour ${event.target.value}`
  }*/

  onKeyMy(value: string) {
    this.valueProp = `Bonjour ${value}`
  }
}
