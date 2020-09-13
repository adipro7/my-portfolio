import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { DeepLearningProjectsComponent } from './deep-learning-projects/deep-learning-projects.component';
import { ImageProcessingProjectsComponent } from './image-processing-projects/image-processing-projects.component';
import { WebDevProjectsComponent } from './web-dev-projects/web-dev-projects.component';
import {CompetitiveProgrammingProfilesComponent} from './competitive-programming-profiles/competitive-programming-profiles.component';
const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'achievements',component:AchievementsComponent},
  {path:'deep-learning-projects',component:DeepLearningProjectsComponent}, 
  { path:'image-processing-projects',component:ImageProcessingProjectsComponent},
  {path:'web-dev-projects',component:WebDevProjectsComponent},
  { path: 'competitive-programming-profiles', component: CompetitiveProgrammingProfilesComponent},
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
