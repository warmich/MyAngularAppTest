import { Component, OnInit } from '@angular/core';
import { Skill } from '../skill';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
    selector: 'app-detail-skill',
    templateUrl: './detail-skill.component.html',
    styleUrls: ['./detail-skill.component.css']
})
export class DetailSkillComponent implements OnInit {

    skill!: Skill

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private _skillsService: SkillsService
    ) { }

    ngOnInit(): void {
        let id = +this.route.snapshot.params['id']
        this._skillsService.getSkill(id).subscribe(skill => this.skill = skill)
    }

    goBack(): void {
        this.router.navigate(['/skills'])
    }

    goEdit(skill: Skill): void {
        this.router.navigate(['/skill/edit', skill.id])
    }

    delete(skill: Skill): void {
        this._skillsService.deleteSkill(skill).subscribe(_ => this.goBack())
    }
}
