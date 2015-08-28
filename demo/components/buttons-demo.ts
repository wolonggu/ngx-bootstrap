/// <reference path="../../tsd.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';


import {ButtonCheckbox, ButtonRadio} from '../../components/index';

@Component({
  selector: 'buttons-demo'
})
@View({
  template: `
    <br><hr/>
    <h2>Buttons</h2>
    <h4>Single toggle</h4>
    <pre class="card card-block card-header">{{singleModel}}</pre>
    <button type="button" class="btn btn-primary" [(ng-model)]="singleModel" btn-checkbox btn-checkbox-true="1" btn-checkbox-false="0">
        Single Toggle
    </button>
    <h4>Checkbox</h4>
    <pre class="card card-block card-header">Model: {{checkModel | json}}</pre>
    <!--<pre class="card card-block card-header">Results: {{checkResults}}</pre>-->
    <div class="btn-group">
      <label class="btn btn-primary" [(ng-model)]="checkModel.left" btn-checkbox>Left</label>
      <label class="btn btn-primary" [(ng-model)]="checkModel.middle" btn-checkbox>Middle</label>
      <label class="btn btn-primary" [(ng-model)]="checkModel.right" btn-checkbox>Right</label>
    </div>
    <h4>Radio &amp; Uncheckable Radio</h4>
    <pre class="card card-block card-header">{{radioModel || 'null'}}</pre>
    <div class="btn-group">
        <label class="btn btn-primary" [(ng-model)]="radioModel" btn-radio="Left">Left</label>
        <label class="btn btn-primary" [(ng-model)]="radioModel" btn-radio="Middle">Middle</label>
        <label class="btn btn-primary" [(ng-model)]="radioModel" btn-radio="Right">Right</label>
    </div>
    <div class="btn-group">
        <label class="btn btn-success" [(ng-model)]="radioModel" btn-radio="Left" uncheckable>Left</label>
        <label class="btn btn-success" [(ng-model)]="radioModel" btn-radio="Middle" uncheckable>Middle</label>
        <label class="btn btn-success" [(ng-model)]="radioModel" btn-radio="Right"  uncheckable>Right</label>
    </div>
</div>
  `,
  directives: [
    CORE_DIRECTIVES, FORM_DIRECTIVES,
    ButtonCheckbox, ButtonRadio
  ]
})
export class ButtonsDemo {
  singleModel:string = '1';
  checkModel:Object = {left: false, middle: true, right: false};
  radioModel:string = 'Middle';
}