import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
    beforeModel: function(transition) {
        $.getJSON("http://159.89.148.4:8081/posts/" + transition.queryParams.id).then(data => {
          this.set('posts', data[0]);
        });
    }
});
