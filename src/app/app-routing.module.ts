import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevComponent } from './components/dev/dev.component';
import { DetailSkillComponent } from './components/skills/detail-skill/detail-skill.component';
import { EditSkillComponent } from './components/skills/skill-form/edit-skill.component';
import { AuthGuardService } from './services/auth-guard.service'
import { SkillsComponent } from './components/skills/skills.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  { 
    path: 'skill',
    canActivate: [AuthGuardService],
    children: 
    [
      { path: 'detail/:id', component: DetailSkillComponent },
      { path: 'edit/:id', component: EditSkillComponent, canActivate: [AuthGuardService] }
    ]
    },
  { path: 'skills', component: SkillsComponent },
  { path: 'dev', component: DevComponent },
  { path: '', redirectTo: 'skills', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
