# BmoRestaurantOderSystem

## Set CSS bootstrap and font-awesome on Global Angular CSS

Import these .css files inside styles attr on angular.json 

`"styles": [
    "src/styles.css",
    "./node_modules/bootstrap/dist/css/bootstrap.min.css",
    "./node_modules/font-awesome/css/font-awesome.css"
],`

## Generate *HOME* Module

    `ng g m home --routing -d` 
    `-d` means to angular run command, show results and do not write anything 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Generate *HOME* Component

    `ng g c home`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
