# RxjsExamples

#### Step - 1
- Update Members component to remove subscriptions.
- Update Messages component to remove subscriptions.
- Add operator so that requests to the server are only 
made once, regardless of the number of subscriptions.

#### Step - 2
- Combine FormControl valueChanges on Members page and the GET-request
streams so that new data is requested when the component filters update.

#### Step - 3 
- Slow down the number of requests being made for members' data.

#### Step - 4
- Set up DataService so that the GET-request
streams react to changes in the site-filters.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
