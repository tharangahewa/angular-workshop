import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { FiltersComponent } from './components/home/filters/filters.component';
import { CoursesComponent } from './components/home/courses/courses.component';
import { FooterComponent } from './components/footer/footer.component';
import { CourseComponent } from './components/home/courses/course/course.component';
import { HighlightableDirective } from './directives/highlightable.directive';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { HomeComponent } from './components/home/home.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { RouterModule, Routes } from '@angular/router';
import { NotImplementedComponent } from './components/not-implemented/not-implemented.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'my-courses', component: MyCoursesComponent },
  { path: 'about', component: NotImplementedComponent },
  { path: 'contact', component: NotImplementedComponent },
  { path: 'course-details', component: CourseDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarouselComponent,
    FiltersComponent,
    CoursesComponent,
    FooterComponent,
    CourseComponent,
    HighlightableDirective,
    EllipsisPipe,
    HomeComponent,
    MyCoursesComponent,
    CourseDetailsComponent,
    NotImplementedComponent,
    PageNotFoundComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
