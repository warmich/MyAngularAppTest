import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './components/skills/skills.component';
import { DevComponent } from './components/dev/dev.component';
import { BorderCardDirective } from './directives/border-card.directive';
import { borderColorBySkillNamePipe } from './pipes/borderColorBySkillName.pipe';
import { DetailSkillComponent } from './components/skills/detail-skill/detail-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    DevComponent,
    BorderCardDirective,
    borderColorBySkillNamePipe,
    DetailSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
