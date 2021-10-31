import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './components/skills/skills.component';
import { DevComponent } from './components/dev/dev.component';
import { BorderCardDirective } from './directives/border-card.directive';
import { borderColorBySkillNamePipe } from './pipes/borderColorBySkillName.pipe';
import { DetailSkillComponent } from './components/skills/detail-skill/detail-skill.component';
import { SkillFormComponent } from './components/skills/skill-form/skill-form.component';
import { EditSkillComponent } from './components/skills/skill-form/edit-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    DevComponent,
    BorderCardDirective,
    borderColorBySkillNamePipe,
    DetailSkillComponent,
    SkillFormComponent,
    EditSkillComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
