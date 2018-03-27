import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
    ajax: Ember.inject.service(),
    beforeModel: function(transition) {
        this.set('post', this.get('ajax').request("http://159.89.148.4:8081/posts/" + transition.queryParams.id, {
            method: 'GET'
        })[0]);
    },
});
