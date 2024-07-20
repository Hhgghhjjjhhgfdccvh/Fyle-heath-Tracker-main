import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WorkoutFormComponent } from './workout-form/workout-form.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { WorkoutComponent } from './workout-progress/workout-progress.component'



const routes: Routes = [
  { path: '', component: WorkoutFormComponent },
  { path: 'workout-list', component: WorkoutListComponent },
  {path:'workout-progress',component:WorkoutComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AppComponent,
    WorkoutFormComponent,
    NgxPaginationModule,
    WorkoutComponent
  ],
  bootstrap: []
})
export class AppModule { }
