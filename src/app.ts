//our root app component
import {Component} from 'angular2/core';
import {Hello} from './hello';

@Component({
  selector: 'my-app',
  directives: [Hello],
  template: '
  <hello-world [message]="myMessage"></hello-world>
  '
})
export class App {
  constructor() {
    this.myMessage = Angular2';
  }
}
