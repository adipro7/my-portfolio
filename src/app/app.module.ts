import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap/alert';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {CpApiService} from './cp-api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { WebDevProjectsComponent } from './web-dev-projects/web-dev-projects.component';
import { ImageProcessingProjectsComponent } from './image-processing-projects/image-processing-projects.component';
import { DeepLearningProjectsComponent } from './deep-learning-projects/deep-learning-projects.component';
import { HttpClientModule } from '@angular/common/http';
import { CompetitiveProgrammingProfilesComponent } from './competitive-programming-profiles/competitive-programming-profiles.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AchievementsComponent,
    WebDevProjectsComponent,
    ImageProcessingProjectsComponent,
    DeepLearningProjectsComponent,
    CompetitiveProgrammingProfilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AlertModule.forRoot(),
  ],
  providers: [CpApiService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
