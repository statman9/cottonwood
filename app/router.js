import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('posts', function() {
    this.route('view', {path: "/posts/view"});
    this.route('edit', {path: "/posts/edit/:id"});
    this.route('add', {path: "/posts/add"});
    this.route('details', {path: "/posts/details/:id"});
  });
});

export default Router;
