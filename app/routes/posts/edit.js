import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
    beforeModel: function(transition) {
        this.id = transition.queryParams.id;
    },
    id: null,
    ajax: Ember.inject.service(),
    model() {
        return this.get('ajax').request("http://159.89.148.4:8081/posts/" + this.id, {
            method: 'GET'
        });
    }
});
