import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FiltersComponent } from './filters/filters.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './courses/course/course.component';
import { FooterComponent } from './footer/footer.component';
import { HighlightableDirective } from './directive/highlightable.directive';
import { EllipsisPipe } from './pipe/ellipsis.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FiltersComponent,
    CarouselComponent,
    CoursesComponent,
    CourseComponent,
    FooterComponent,
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
