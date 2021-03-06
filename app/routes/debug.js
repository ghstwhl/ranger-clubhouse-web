import { VERSION } from '@ember/version';
import Route from '@ember/routing/route';
import ENV from 'clubhouse/config/environment';
import EmberData from 'ember-data';

export default class DebugRoute extends Route {
  setupController(controller) {
    super.setupController(...arguments);

    controller.set('emberVersion', VERSION); // eslint-disable-line ember/new-module-imports
    controller.set('emberDataVersion', EmberData.VERSION);
    controller.set('env', ENV);
    controller.set('browser', navigator.appVersion);
    controller.set('browserVendor', navigator.vendor);

    const viewport = {
      width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
      height:Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    };

    controller.set('viewport', viewport);
  }

}
