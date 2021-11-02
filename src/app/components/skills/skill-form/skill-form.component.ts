import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { SkillsService } from 'src/app/services/skills.service';
import { Skill } from '../skill';

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.css']
})
export class SkillFormComponent implements OnInit {

  @Input() 
  skill!: Skill
  subSkills!: Array<string>

    constructor(
        private _skillsService: SkillsService,
        private _router: Router) { }
 
    ngOnInit() {
        this.subSkills = this._skillsService.getSubSkills()
    }
 
    // Détermine si le subSkill passé en paramètres appartient ou non au skill en cours d'édition.
    hasSub(sub: string): boolean {
        let index = this.skill.subSkills.indexOf(sub);
        if (index > -1) return true;
        return false;
    }
 
    // Méthode appelée lorsque l'utilisateur ajoute ou retire un subSkill au skill en cours d'édition.
    selectSub($event: any, sub: string): void {
        let checked = $event.target.checked;
        if (checked) {
            this.skill.subSkills.push(sub);
        } else {
            let index = this.skill.subSkills.indexOf(sub);
            if (index > -1) {
                this.skill.subSkills.splice(index, 1);
            }
        }
    }
 
    // Valide le nombre de subSkills pour chaque skill
    isSubValid(type: string): boolean {
        if (this.skill.subSkills.length === 1 && this.hasSub(type)
        || this.skill.subSkills.length >= 3 && !this.hasSub(type)) {
            return false;
        }
        return true;
    }
 
    // La méthode appelée lorsque le formulaire est soumis.
    onSubmit(): void {
        console.log("Submit form !");
        this._skillsService.updateSkill(this.skill).subscribe(() => this.goBack())
    }

    goBack(): void {
      let link = ['/skill/detail', this.skill.id]
      this._router.navigate(link)
    }
}
