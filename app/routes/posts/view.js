import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
    ajax: Ember.inject.service(),
    model() {
        return this.get('ajax').request("http://159.89.148.4:8081/posts", {
            method: 'GET'
        });
    },
    deletePost(id) {
        return this.get('ajax').request("http://159.89.148.4:8081/posts/" + id, {
            method: "DELETE"
        });
    }
});