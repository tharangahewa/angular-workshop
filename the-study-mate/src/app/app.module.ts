import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FiltersComponent } from './filters/filters.component';
import { CoursesComponent } from './courses/courses.component';
import { FooterComponent } from './footer/footer.component';
import { CourseComponent } from './courses/course/course.component';
import { HighlightableDirective } from './directives/highlightable.directive';
import { EllipsisPipe } from './pipes/ellipsis.pipe';

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
    EllipsisPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
