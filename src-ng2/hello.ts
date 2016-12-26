//our root app component
import {Component, Input} from 'angular2/core';

@Component({
  selector: 'hello-world',
  template: '<div>  <h2> Hello {{message}} </h2> </div>'
})

export class Hello {

  @Input()
  message : String;

}
