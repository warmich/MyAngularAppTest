import { InMemoryDbService } from 'angular-in-memory-web-api';
import { SKILLS } from '../components/skills/listSkills';
import { Skill } from '../components/skills/skill';

export class InMemoryDataService implements InMemoryDbService {

  skills: Skill[] = []
  dbJson!: any

  constructor() {
    this.skills = SKILLS
  }

  createDb(){
    this.dbJson = { skills: this.skills } // { skills: this.skills } crée un objet Json
    return this.dbJson // retourne un objet JSON skill
  }
}
