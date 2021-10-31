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
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService } from './services/in-memory-data.service';

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
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}), // supprimer ces 2 importations pour passer sur une vraie API
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
