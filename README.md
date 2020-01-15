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

### Typesript jumpstart

`npm i -g typescript`

* Types - [first.ts](./typescript/first.ts)
* Interfaces - [course.ts](./typescript/course.ts) 
* Classes - [user.ts](./typescript/user.ts)

Compile / Transpile .ts files using `tsc <filename>`, and observe the generated 

> Typescript interfaces are just types that are used during compiletime. When compiled they they leave nothing in the js file. 
> They cannot have constructor/ initialize logic. 
> They can only have function declarations not the implementation. 
> Lightwieght and easy to use. Ideal for domain/dto objects.
> No encapulation, in other words all are public.
> [Want to find out more](https://www.tutorialsteacher.com/typescript/typescript-interface)

> Typescript classes are rich and heavy with initialization / constructor logic and method implementations.
> [Want to find out more](https://www.tutorialsteacher.com/typescript/typescript-class)      