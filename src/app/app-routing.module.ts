import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevComponent } from './components/dev/dev.component';
import { DetailSkillComponent } from './components/skills/detail-skill/detail-skill.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  { path: 'skills', component: SkillsComponent },
  { path: 'dev', component: DevComponent },
  { path: 'detailskill/:id', component: DetailSkillComponent },
  { path: '', redirectTo: 'skills', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
