import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({
    model() {
        $.getJSON("http://159.89.148.4:8081/posts", (err, data) => {
            return data;
        });
    }
});
