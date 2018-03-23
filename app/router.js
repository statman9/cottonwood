import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('posts', function() {
    this.route('view', {path: "/view"});
    this.route('edit', {path: "/edit/:id"});
    this.route('add', {path: "/add"});
    this.route('details', {path: "/details/:id"});
  });
});

export default Router;
