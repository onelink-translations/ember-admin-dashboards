import Ember from 'ember';

export default Ember.Route.extend({
  randomtext: Ember.inject.service('randomtext'),
  model() {
    return this.get('randomtext');
  }
});
