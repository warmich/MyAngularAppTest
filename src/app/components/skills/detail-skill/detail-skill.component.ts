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
        this.skill = this._skillsService.getSkill(id)
    }

    goBack(): void {
        this.router.navigate(['/skills'])
    }

    goEdit(skill: Skill): void {
        this.router.navigate(['/editskill', skill.id])
    }
}
