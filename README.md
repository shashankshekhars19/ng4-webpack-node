First Step : -----------------------------------------------------

// Folder Structure Set UP
express --hbs // Express Install with Handlebar

Install Angular Modules
npm install --save @angular/core @angular/common @angular/animations @angular/platform-browser @angular/platform-browser-dynamic @angular/forms @angular/http @angular/router @angular/compiler @angular/compiler-cli

npm install --save core-js zone.js rxjs

Install Development Dependencies for Webpack and angular

"devDependencies": {
  "@types/core-js": "0.9.36",
  "@types/node": "^6.0.45",
  "angular-router-loader": "^0.5.0",
  "angular2-template-loader": "^0.5.0",
  "awesome-typescript-loader": "^3.1.2",
  "del-cli": "^0.2.0",
  "html-loader": "^0.4.4",
  "raw-loader": "^0.5.1",
  "ts-loader": "^2.0.3",
  "typescript": "^2.1.4",
  "webpack": "^2.2.1",
  "webpack-merge": "^4.1.0"
}

Create Assets folder and Save Angular component in assests/app folder

Copy the tsConfig File :- keeps typescript configuration

Create webpack configuration common file for prod as well as dev

Create webpack configuration dev file for dev specific configuration

Change index.hbs to Angular with bundle file

Second Step : -----------------------------------------------------



