import { Injectable } from '@angular/core';
import { SKILLS } from '../components/skills/listSkills';
import { Skill } from '../components/skills/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  getSkills(): Skill[] {
    return SKILLS
  }

  getSkill(id: number): any {

    let newSkill: Skill
    let skills = this.getSkills()

    for (let index = 0; index < skills.length; index++) {
      if (id === skills[index].id) {
        return skills[index]
      }
    }
  }

  getSubSkills(): string[] {
    return ['Scaffolding', 'Requêtes', 'Get / Post / Put', 'Méthodes', 'Class', 'Linq', 'Components', 'Modules', 'Styles', 'Services']
  }
}
