import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    sendRequest() {
     let requestParams = {url: 'http://www.randomtext.me/api/gibberish/p-5/80-100',
     		type: 'GET', dataType:'json'};
      Ember.$.ajax(requestParams).then((json)=>{
        // console.log(json);
        this.set('randomText', Ember.String.htmlSafe(json.text_out));
      });
    }
  }
});
