import { Component, OnInit } from '@angular/core';
import { SKILLS } from './listSkills';
import { Skill } from './skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills!: Skill[];

  constructor() { }

  ngOnInit(): void {
    this.skills = SKILLS
  }

}
