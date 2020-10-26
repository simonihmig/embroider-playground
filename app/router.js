import EmberRouter from '@embroider/router';
import config from 'embroider-playground/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('foo');
  this.route('bar');
  this.route('addon');
});
