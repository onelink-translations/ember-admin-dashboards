import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'header',
  i18n: Ember.inject.service(),
	classNames: ['main-header'],
});
