import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('index');
  this.route('widgets');
  this.route('ui-timeline' , {path:'/'});
  this.route('general-ui');
  this.route('comingsoon');
  this.route('documentation');
  this.route('form-input');
  this.route('randomtext');
});
