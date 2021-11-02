import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillsService } from 'src/app/services/skills.service';
import { Skill } from '../skill';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {

  @Input()
  skill!: Skill
  subSkills!: Array<string>

  constructor(
    private _skillsService: SkillsService,
    private _router: Router) { }

  ngOnInit() {
    this.subSkills = this._skillsService.getSubSkills()
    this.skill = new Skill()
    // this.skill.id = this._skillsService.getNbrSkills() + 1
    this.skill.subSkills = new Array<string>()
    this.subSkills.forEach(element => {
      console.log(element)
    });
  }
 
  // Détermine si le subSkill passé en paramètres appartient ou non au skill en cours d'édition.
  hasSub(sub: string): boolean {
      let index = this.skill.subSkills.indexOf(sub)
      if (index > -1) return true
      return false
  }

  // Méthode appelée lorsque l'utilisateur ajoute ou retire un subSkill au skill en cours d'édition.
  selectSub($event: any, sub: string): void {
      let checked = $event.target.checked
      if (checked) {
          this.skill.subSkills.push(sub)
      } else {
          let index = this.skill.subSkills.indexOf(sub)
          if (index > -1) {
              this.skill.subSkills.splice(index, 1)
          }
      }
  }

  // Valide le nombre de subSkills pour chaque skill
  isSubValid(type: string): boolean {
    
      if (this.skill.subSkills.length === 1 && this.hasSub(type)
      || this.skill.subSkills.length >= 3 && !this.hasSub(type)) {
          return false
    }
      return true
  }

  // La méthode appelée lorsque le formulaire est soumis.
  onSubmit(): void {
      console.log("Submit form !")
      this._skillsService.createSkill(this.skill).subscribe(() => this.goBack())
  }

  goBack(): void {
    let link = ['/skills']
    this._router.navigate(link)
  }

}
