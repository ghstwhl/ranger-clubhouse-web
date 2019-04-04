import Controller from '@ember/controller';
import { computed } from '@ember-decorators/object';
import * as Position from 'clubhouse/constants/positions';

export default class HqController extends Controller {
  @computed('timesheets.@each.position_id')
  get isShinyPenny() {
    return this.timesheets.find((t) => t.position_id == Position.ALPHA) && this.person.isActive;
  }

  @computed('person.status')
  get allowedCheckIn() {
    const status = this.person.status;

    switch (status) {
      case 'active':
      case 'alpha':
      case 'prospective':
      case 'inactive':  // might be cheetah
      case 'retired':
      case 'non ranger':
        return true;
    }
    return false;
  }
}