import { InMemoryDbService } from 'angular-in-memory-web-api';
import { SKILLS } from '../components/skills/listSkills';

export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    let skills = SKILLS
    return { skills }
  }
}
