import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevComponent } from './components/dev/dev.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  {path: 'skills', component: SkillsComponent},
  {path: 'dev', component: DevComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
