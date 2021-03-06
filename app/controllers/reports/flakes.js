import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ReportsFlakesController extends Controller {
  @action
  submitForm(model) {
    if (!model.isValid) {
      return;
    }

    this.set('date', model.get('date'));
  }

  @action
  viewCurrentPeriod() {
    this.set('date', null);
  }
}
