import Route from '@ember/routing/route';
import $ from 'jquery';
import Ember from 'ember';

export default Route.extend({
    ajax: Ember.inject.service(),
    model: function() {
        this.get('ajax').get("http://159.89.148.4:8081/posts").then((response) => {
            return response;
        });
    }
});
