import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";
import { FiltersComponent } from "./component/home/filters/filters.component";
import { CarouselComponent } from "./component/home/carousel/carousel.component";
import { CoursesComponent } from "./component/home/courses/courses.component";
import { CourseComponent } from "./component/shared/course/course.component";
import { FooterComponent } from "./component/footer/footer.component";
import { HighlightableDirective } from "./directive/highlightable.directive";
import { EllipsisPipe } from "./pipe/ellipsis.pipe";
import { HomeComponent } from "./component/home/home.component";
import { MyCoursesComponent } from "./component/my-courses/my-courses.component";
import { ContactComponent } from "./component/contact/contact.component";
import { AboutComponent } from "./component/about/about.component";
import { CourseDetailsComponent } from "./component/course-details/course-details.component";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./component/page-not-found/page-not-found.component";
import { BackHomeComponent } from "./component/back-home/back-home.component";
import { CourseEditModalComponent } from "./component/my-courses/course-edit-modal/course-edit-modal.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { AccessDeniedComponent } from './component/access-denied/access-denied.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "my-courses", component: MyCoursesComponent },
  { path: "contact", component: ContactComponent},
  { path: "about", component: AboutComponent },
  { path: "course-detail/:id", component: CourseDetailsComponent },
  { path: "page-not-found", component: PageNotFoundComponent },
  { path: "access-denied", component: AccessDeniedComponent },
  {
    path: "admin-dashboard",
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard] 
  },
  // { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/page-not-found" }
];

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
    EllipsisPipe,
    HomeComponent,
    MyCoursesComponent,
    ContactComponent,
    AboutComponent,
    CourseDetailsComponent,
    PageNotFoundComponent,
    BackHomeComponent,
    CourseEditModalComponent,
    AccessDeniedComponent
  ],
  entryComponents: [
    CourseEditModalComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routes),
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
