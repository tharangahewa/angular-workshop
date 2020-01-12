# Angular Workshop

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

### Scaffold a new Angular project

Use `ng new <project-name>`, and follow the below selections.
```
$ ng new the-study-mate
? Would you like to add Angular routing? No
? Which stylesheet format would you like to use? CSS
```
#### Discuss the project structure
* package.json - npm config
* angular.json - angular project config
* index.html - initial html
* styles.css - main stylessheet
* main.ts - Angular entrypoint
* app.module.ts - main module
* app.component.ts - main component 

### Serve the project in dev mode 

Use `ng serve` to serve the project in dev mode.

#### Observe & discuss the below
* Elements tab in dev tools
* Network tab in dev tools

### Build & serve the project for prod mode

Use `ng build --prod` to build the project in the prod mode.

In order to serve using [http-server](https://www.npmjs.com/package/http-server) follow the below steps.
```
npm install http-server -g
cd the-study-mate/dist/the-study-mate
http-server
```

Since Angular applications are SPAs, a simple http file server would do. Nginx and Firebase hosting are two popular ways of hosting angular apps
