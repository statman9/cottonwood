import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
    queryParams: ['id'],
    ajax: Ember.inject.service(),
    post(params) {
        var param = this.store.query('details', params);
        return this.get('ajax').request("http://159.89.148.4:8081/posts/" + param.id, {
            method: 'GET'
        });
    }
});
