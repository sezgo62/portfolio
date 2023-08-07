import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { IntroductionShortComponent } from './introduction-short/introduction-short.component';
import { IntroductionLongComponent } from './introduction-long/introduction-long.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioProjectsComponent } from './portfolio-projects/portfolio-projects.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    IntroductionShortComponent,
    IntroductionLongComponent,
    SkillsComponent,
    PortfolioProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
