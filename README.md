# BmoRestaurantOderSystem

## Set CSS bootstrap and font-awesome on Global Angular CSS (removed bootstrap and font-awesome)

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

## Organize Routes

    > type `<router-outlet></router-outlet>` on app.component.html
    
    > open app-routing.module.ts and set a default route and define a lazy loading for Home Module

        > `const routes: Routes = [
            { path: '', pathMatch: 'full', redirectTo: 'home' },
            { path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) }
        ];`

    > set a root route for Home component (open home-routing.module) and add
    
        > `{ path: '', component: HomeComponent }`

## Generate *LOGIN* Componenet

    `ng g c home/login`

## Generate *AUTHENTICATION* Module

    `ng g m authentication`

## Generate *AUTHENTICATION* Service

    `ng g s authentication/authentication`

## Create a new Module for *Orders*

    `ng g m orders --routing`

## Generate a component for *list orders*

    `ng g c orders/list-orders`

## Add *Orders* module on app-routing module (app-routing.modules.ts)

    `{ path: 'orders', loadChildren: () => import('./orders/orders.module').then((m) => m.OrdersModule) }`

## Add a Redirect on login.component.ts (inject Router)

    `this.router.navigate(['orders']);`

## Create *Message* module

    `ng g m components/message`

## Create *Message* component

    `ng g c components/message`

## Define message html on app.module

## Create a new component for new user

    `ng g c home/new-user`

## Create a Service to create New Users

    `ng g s home/new-user/services/new-user`

## Create a Model for New Users

    `ng g interface home/new-user/models/new-user`

## Import *ReactiveFormsModule* on home.module.ts to apply validations before create a new user

## Set `msg` variable with @Input() annotation on message.component and declare MessageComponent on exports on message.module

## Import *Message* component where you want to use it

## Install jwt-decode

    `npm i jwt-decode`

## Create a Token Authentication Service

    `ng g s services/token`

## Create a User Authentication Service

    `ng g s authentication/services/user/user`

## Create a User Token Model for Auth

    `ng g interface authentication/models/user-token/user-token`

## Create Header Module and Component

    `ng g m components/header`
    `ng g c components/header`

## Create Footer Module and Component

    `ng g m components/footer`
    `ng g c components/footer`

## Create a Card component

    `ng g m components/card`
    `ng g c components/card`

## Create a Menu-Food component and a Menu-Item-Food component and its Service & Models

    `ng g m components/menu-food`
    `ng g c components/menu-food`
    `ng g s components/menu-food/service/menu-food`
    `ng g interface components/menu-food/model/menu-food`

    `ng g m components/menu-item-food`
    `ng g c components/menu-item-food`
    `ng g interface components/menu-item-food`
    `ng g s components/menu-item-food/service/menu-item-food`
    `ng g interface components/menu-item-food/model/menu-item-food`

## Create a Route Guard (Can Load) for ordering list

    `ng g guard authentication/authentication`

    > Define on app-routing.module which paths apply this guard

## Create an Interceptor

    `ng g interceptor authentication/authentication`

## Register the Interceptor on authentication module

    providers: [
        {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthenticationInterceptor,
        multi: true
        }
    ] 

## Create a Resolver to use with GuardResolver to improve perfomance to retrieve data from server

    `ng g resolver orders/list-orders/list-orders`

    > Implement retrieve logic on list-orders.resolver.ts
    > Open orders-routing.module.ts and add a resolve

## Import Authentication module on app-module to use registered Interceptor


## Install Angular Material ##

    `ng add @angular/material`



----------------------------------------------------------------------------------------

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
