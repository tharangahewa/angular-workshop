# Angular Workshop

[TOC]

## Install VSCode

* [Download VSCode](https://code.visualstudio.com/) 
* [VSCode Introduction](https://www.academind.com/learn/web-dev/visual-studio-code-introduction/)
* [Angular Extensions](https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials)

## Static Design 
Please find the static html pages inside [design](./design) directory. Design has been done using Bootstrap 4. Original - [startbootstrap.com](https://startbootstrap.com/)

Get familiar with the two web pages [home](./design/home.html) and [manage-courses](./design/manage-courses.html). Additionally there is form named [edit-course-form](./design/edit-course-form.html) which we will wrap inside a model and use to edit course details. 

To watch the design in the browser,
```
cd design
npm install
npm start
```    
Open http://localhost:3000/home.html or http://localhost:3000/manage-courses.html

## Scaffold TheStudyMate Angular Project

### [Scaffold a new Angular project](https://angular.io/guide/setup-local)

Use `ng new <project-name>`, and follow the below selections.
```
$ ng new the-study-mate
? Would you like to add Angular routing? No
? Which stylesheet format would you like to use? CSS
```
* [Learn the project structure](https://angular.io/guide/file-structure#workspace-and-project-file-structure)
* [Learn auto-generated configuration files](https://angular.io/guide/file-structure#workspace-configuration-files)
* [Learn auto-generated source files](https://angular.io/guide/file-structure#application-project-files) 

### Why Compile/Transpile?
* Typescript to Javascript
* [JIT Compilation](https://angular.io/guide/glossary#just-in-time-jit-compilation) (Recommended during dev)
* [AOT Compilation](https://angular.io/guide/aot-compiler) (Recommended for prod)
* Source Maps

### Serve the project in dev mode 

Use `ng serve -o` to serve the project in dev mode.
Open files in the debugger and observe.

#### Observe & discuss the below
* Elements tab in dev tools
* Network tab in dev tools

### Build & serve the project for prod mode

Use `ng build --prod` to build the project in the prod mode.

In order to serve using [http-server](https://www.npmjs.com/package/http-server) follow the below steps.
```
npm install http-server -g
cd the-study-mate/dist/the-study-mate
http-server -o
```
#### Observe & discuss the below
* `dist` folder 
* Elements tab in dev tools
* Network tab in dev tools
* How html templates and css files are bundled in to js files

Since Angular applications are SPAs, a simple http file server would do. Nginx and Firebase hosting are two popular ways of hosting angular apps

### Configure Bootstrap CSS

Copy the html design home.html in to the app.component.html. Copy all the html code within the body tag, excluding script tags. Note that the styles aren't working.

In order to install bootstrap run `npm i bootstrap`. No need to install popper & jquery.

Modify angular.json to import bootstrap.min.css, as below.

projects > architect > build > styles>
```json
"styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "src/styles.css"
]
```
## Angular Components
[Overview](https://angular.io/guide/architecture-components)

### Plan the home page component hierarchy

```
app-root
|-nav-bar
|-carousel
|-filters
|-courses
    |-course
|-footer
```

### Generate First Angular Component

Use `ng generate component nav-bar` or `ng g c nav-bar` to generate the nav bar component. 
* Note the declarations array in the NgModule decorator in app.module.ts. This how the framework will know about the existance of this component.  
```
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
* Note the Component decorator in the nav-bar.component.ts
```
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
```  
* Move the nav-bar related html to nav-bar-component.html template file. 
* Add the newly created component to the DOM by adding the html custom element `<app-nav-bar></app-nav-bar>` to the app.component.html, using 

> Note: Please note that Bootstrap requires every html tag with "raw" class to follow up with a tag with "col" class. So it is a good idea to leave the layout related tags in the container component, in this case the app component.   

### Generate rest of the Components 
Generate rest of the components as per the plan, and move the relevant html segments inside the compoenents. Then added them to the DOM using html custom elements.

### Typescript jumpstart
Why we need Typescript? Well, Angular Uses Typescript by default not plain Javascript. It is not mandatory to use Typescript, but, I think, it is really hard to find documentation and examples of Angular in Javascript.  

Typescript is a super set of javascript. It helps us write better code using types which javascript lacks. It mostly Javascript syntax + Types. When compiled, Typescript converts in to javascript. Go ahead with the following experiments to understand the basics of Typescript.  

`npm i -g typescript`

* Types - [first.ts](./typescript/first.ts)
* Interfaces - [course.ts](./typescript/course.ts) 
* Classes - [user.ts](./typescript/user.ts)

Compile .ts files using `tsc <filename>`, and observe the generated .js files.

> Note: Typescript interfaces are just types that are used during compile-time. 
> When compiled they leave nothing in the js file. 
> They cannot have constructor/ initialize logic. 
> They can only have function declarations not the implementation. 
> Lightweight and easy to use. Ideal for domain or dto objects.
> No encapsulation, in other words all the fields are public.
> [Want to find out more](https://www.tutorialsteacher.com/typescript/typescript-interface)

> Note: Typescript classes are rich and heavy with initialization / constructor logic and method implementations.
> [Want to find out more](https://www.tutorialsteacher.com/typescript/typescript-class)      

## Angular Components Diving Deeper

### MV* with Angular components
Angular has a Component based architecture, and Components represent a single MVC/MVVM unit.  
* component.ts file in a component represents the controller/viewmodel 
* component.html file in a component represents the view, and uses a special html syntax  

### Create the model
Create a object in [course.component.ts](./the-study-mate/src/app/courses/course/course.component.ts) 
```
course = {
    title: 'Angular Workshop',
    price: 50,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
    starRating: 4.2
  };
```

### Bind your model to the view
Angular uses it's own html template syntax [template-syntax](https://angular.io/guide/template-syntax) to manipulate html.
* All most every html tag is valid other than the <sript> tag
* Do not use  <html>, <body>, <head> tags, as it doesn't make sense to repeat those onetime tags in components

#### Interpolation ( .ts to .html)
`{{ expression }}` and `[targetAttribute]="expression"` syntax to bind attributes from data source to view.
* `{{ expression }}` is good to bind source attributes to html text
* `targetAttribute ={{ expression }}` is not forbidden
* `[targetAttribute]="expression"` is better to bind source attributes to html attributes

#### Event ( .html to .ts)
`(event)="statement"` is the syntax to bind from view target to data source

### Two-way binding 
Later in the forms section 

### Component inputs
* Use @Input() decorator to define input arguments.
```
@Input() course;
```
* Define a course type inline and observe the advantageous of types
```
@Input() course: {
    title: string;
    imgUrl: string;
    description: string;
    price: number;
    starRating?: number;
  };
```  
* Assign the input using the `[targetAttribute]="expression"` syntax, in the mother component [courses.component.html](./the-study-mate/src/app/courses/courses.component.html)
```angular2html
<app-course [course]="{
    title: 'angular workshop',
    imgUrl: 'assets/angular-logo.png',
    price: 50,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
  }"></app-course>
```
### Component outputs
* Use @Onput() decorator to define output argument, along with event emitter.
```
@Output() courseSelected = new EventEmitter<string>();
```
* Emit the event
```
onClick(event: Event) {
    this.courseSelected.emit(this.course.title);
  }
```
* Catch the event form the mother component [courses.component.html](./the-study-mate/src/app/courses/courses.component.html)
```angular2html
 <app-course 
    (courseSelected)="onCourseSelection($event)"
    ></app-course>
```

```
 onCourseSelection( event: string) {
     console.log( event);
   }
```
## Angular Directives

### Refactor the code
* Take the inline type definition of the course to a common model [course.ts](./the-study-mate/src/app/model/course.ts)
* Define a courses array in the [courses.ts](./the-study-mate/src/app/data/courses.ts)
* Import it to [courses.component.ts](./the-study-mate/src/app/courses/courses.component.ts)
   
### Types of Directives   
There are three kinds of directives in Angular:

* Components—directives with a template (already done)
* Structural directives—change the DOM layout by adding and removing DOM elements.
* Attribute directives—change the attributes or behavior of an element, component, or another directive.
   
### Structural Directive - *ngFor
* Use the courses array to generate multiple html elements
```angular2html
<div
    *ngFor="let course of courses"
    class="col-lg-4 col-md-6 mb-4">
    <app-course [course]="course"
    (courseSelected)="onCourseSelection($event)"
    ></app-course>
</div>
```  

### Attribute Directive - ngClass
* Use ngClass to add a shadow while the course tile is within the focus.

[course.component.html](./the-study-mate/src/app/courses/course/course.component.html) 
```
<div class="card h-100"
     (click)="onClick($event)"
     (mouseenter)="mouseEnter()"
     (mouseleave)="mouseLeave()"
     [ngClass]="inFocus ? 'shadow': ''"
>
```

[course.component.ts](./the-study-mate/src/app/courses/course/course.component.ts) 
```
  mouseEnter() {
    this.inFocus = true;
  }

  mouseLeave() {
    this.inFocus = false;
  }
```

### Write a custom Attribute Directive - appHighlightable
Write a directive to do same, to add a shadow while the course tile is within the focus.
* Generate a new directive `ng generate directive highlightable` [highlightable.directive.ts](./the-study-mate/src/app/directive/highlightable.directive.ts)
* Receive the element ref via the constructor injection
* Receive the class to add when highlighted as an input to the directive
* Receive the events of the host element
* Use Renderer2 the manipulate the DOM and add/remove the class
* Add the directive selector, and pass the inputs to the directive

[course.component.html](./the-study-mate/src/app/courses/course/course.component.html) 
```angular2html
<div class="card h-100"
     (click)="onClick($event)"
     appHighlightable
     [appHighlightableClass]="'shadow'"
>
```

## Angular Pipes

### Use built-in pipes
* Use the built-in pipe "titlecase" to format the course.title 
* Use the built-in pipe "currency" to format the course.price, note how the input 'EUR' is passed in

### Write a custom pipes
Generate a custom pipe to implement the ellipsis behaviour
* Create a custom pipe `ng generate pipe ellipsis` [ellipsis.pipe.ts](./the-study-mate/src/app/pipe/ellipsis.pipe.ts)
* Define the inputs and the transformation logic
* Use the pipe to format course.description
  
## Angular Routing

### Refactoring

* Create several page components in a new components directory
* Refactor the components as below 
```
app
|-component
  |-about
  |-contact
  |-course-details
  |-footer
  |-home
    |-courses
      |-course
    |-filter
  |-my-courses
  |-nav-bar

```  
* Move the home page body related html code from app.component.html to home.component.html 
 
### The Basics
[link](https://angular.io/guide/router#the-basics)

* Note the `<base href='/'>` in index.html
* Imports `import { RouterModule, Routes } from '@angular/router';`
* Define the router configs
```
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'my-courses', component: MyCoursesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'course-detail/:id', component: CourseDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ]
``` 
* Define the new page not found component
* Notice the empty route
* Notice the wildcard route
* Notice the order of route
* Add the Router Outlet placeholder replacing the `app-home` in the `app.component.html`
```
<app-nav-bar></app-nav-bar>

<router-outlet></router-outlet>

<app-footer></app-footer>
```
### Router links & Activated Router links

* Add router links to the [nav-bar-component.html](/)   
  
## Angular Forms

### Ground work
Setup my courses component. Modify exisiting course component - [course.component.html](./the-study-mate/src/app/courses/course/course.component.html) by introducing a editable mode.

### Create new modal component
'$ ng g c course-edit-modal' 
Move corresponding html the html template file.
refer [course-edit-modal.component.html](./the-study-mate/src/app/component/my-courses/course-edit-modal/course-edit-modal.component.html)

Add ng-bootstrap to import modal related functionality.[ng-bootstrap](https://ng-bootstrap.github.io/#/getting-started)
`npm install --save @ng-bootstrap/ng-bootstrap` 

Import the module to app.module file and add it the module imports array.
```
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  ...
  imports: [NgbModule, ...],
  ...
})
export class AppModule {
}
```
Since Angular 9 (and ng-bootstrap 6) we have to add the additional @angular/localize polyfill to our project
`ng add @angular/localize` 

Follow (Modal section)[https://ng-bootstrap.github.io/#/components/modal/examples#component] to implement the modal. 

To summarize we need to add NgbModal service to (my-courses.component.ts)[the-study-mate/src/app/component/my-courses/my-courses.component.ts]
```
constructor(private modalService: NgbModal) {}
```
And open the modal on create & edit events
```
openModal(course: Course, title: string) {
    const modalRef = this.modalService.open(CourseEditModalComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.course = course;
    modalRef.result.then(
      result => console.log(result),
      reason => console.log(reason)
    );
  }
```

Then modify (course-edit-modal.component.ts)[the-study-mate/src/app/component/my-courses/course-edit-modal/course-edit-modal.component.ts] to implement the close and dismiss actions

```
constructor(private activeModal: NgbActiveModal) {}

  ngOnInit(): void {}

  onSave() {
    this.activeModal.close(this.course);
  }

  onClose() {
    this.activeModal.dismiss("dismissed");
  }
```
