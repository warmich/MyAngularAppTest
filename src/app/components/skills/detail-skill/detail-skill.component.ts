import { Component, OnInit } from '@angular/core';
import { Skill } from '../skill';
import { SKILLS } from '../listSkills';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-detail-skill',
    templateUrl: './detail-skill.component.html',
    styleUrls: ['./detail-skill.component.css']
})
export class DetailSkillComponent implements OnInit {

    skills!: Skill[]
    skill!: Skill

    constructor(private route: ActivatedRoute, private router: Router) { } // Injection de dépendances

    ngOnInit(): void {

        this.skills = SKILLS

        // récupérer l'identifiant du skill contenu dans l'url
        let id = Number(this.route.snapshot.paramMap.get('id')) // récupérer les param de la route associé au component
            // Number => Caster en un nombre
            // this.route => récupère le param passé dans le ctor
            // snapshot => récupère le param de manière synchrone car il doit être récupéré absolument pour s'afficher
            // paramMap.get('id') => récupère le param id sous forme de string
        for (let i = 0; i < this.skills.length; i++) {
            if (this.skills[i].id == id) {
                this.skill = this.skills[i]
            }
        }
    }

    goBack(): void {
        this.router.navigate(['/skills'])
    }

}
