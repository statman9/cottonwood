import Route from '@ember/routing/route';
import $ from 'jquery';
import Ember from 'ember';

export default Route.extend({
    model() {
        Ember.$.getJSON("http://159.89.148.4:8081/posts", (err, data) => {
            return data;
        });
    }
});
