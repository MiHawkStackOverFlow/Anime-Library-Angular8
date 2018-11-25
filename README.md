<!-- Use https://stackedit.io/app to edit and test md files  -->

# Anime Library Managment System

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Style Guide

1. What is this website about ?

       Anime Library Management System

2. What should this website actually do ?

      Anime Library management system will help people do the following :-  
  
      - Read, Borrow different kinds of mangas, videos, articles from the library.      
      - Add new users, maintain existing users.
      - Wishlist by liking Anime Series, Mangas
  
3. What does my website look like ?
  
        - http://www.animefreak.tv/
        - https://tubitv.com/category/anime
        - https://konohastuff.com/
  
      `a. What's the background color ? #26262D (Black)`
      
      `b. What kind of font is appropriate ? (https://fonts.google.com/)` 
      
      `<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">`
  
4. Design guide.
    
    Please refer to links below :-
   
   `a. https://blog.hubspot.com/blog/tabid/6307/bid/30557/6-guidelines-for-exceptional-website-design-and-usability.aspx`
   
   `b. https://www.sitepoint.com/creating-web-style-guide/`

5. SASS installation into project and usage.

    - ng config schematics.@schematics/angular:component.styleext sass (angular6+)
    - changed references from css to scss in angular.json file
    - changed css files to scss manually

6. Added Bootstrap css and Jquery using following :-

    - included links in index.html file along with jquery link
    - installed jquery using npm install --save @types/jquery


7. Added font awesome using follwing :-

    - npm install font-awesome --save
    - $fa-font-path: "~font-awesome/fonts"; into scss file  
    - @import '~font-awesome/scss/font-awesome'; into scss file

8. Added iziToast as following :-
    - https://www.npmjs.com/package/ng2-izitoast
    - Note :- (Had to add css and js to angular json file importing them from node modules) 

9. Flux and Redux reads and installation :-

// what is flux
Flux (English) means :-
1. the action or process of flowing or flowing out.
2. continuous/constant change.

// what is a flux architecture and FLUX vs MVC design pattern 
https://medium.com/hacking-and-gonzo/flux-vs-mvc-design-patterns-57b28c0f71b7
https://stackoverflow.com/questions/33447710/mvc-vs-flux-bidirectional-vs-unidirectional/33455847
https://softwareengineering.stackexchange.com/questions/295119/understanding-flux-pattern

Understanding need of redux
https://almerosteyn.com/2016/08/redux-explained-again
https://blog.angular-university.io/angular-2-redux-ngrx-rxjs/

// redux with angular2

npm install redux @angular-redux/store --save

to app module add following:- 

import { NgRedux, NgReduxModule } from '@angular-redux/store';
imports [NgReduxModule]

import { IAppState, rootReducer, INITIAL_STATE } from './store';

constructor(ngRedux: NgRedux<IAppState>) {
  ngRedux.configureStore(rootReducer, INITIAL_STATE);
}
