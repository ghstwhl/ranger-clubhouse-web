import Route from '@ember/routing/route';
import { Role } from 'clubhouse/constants/roles';

export default class AdminEventDatesRoute extends Route {
  beforeModel() {
    this.house.roleCheck(Role.ADMIN);
  }

  model() {
    this.store.unloadAll('event-date');
    return this.store.findAll('event-date', { reload: true }).then((results) => results.toArray());
  }

  setupController(controller, model) {
    controller.set('eventDates', model);
  }
}
