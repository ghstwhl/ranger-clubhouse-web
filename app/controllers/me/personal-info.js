import Controller from '@ember/controller';
import { action } from '@ember/object';
import PersonInfoValidations from 'clubhouse/validations/person-info';

import {
  ShortSleeve as ShortSleeveOptions,
  LongSleeve as LongSleeveOptions
} from 'clubhouse/constants/shirts';

export default class MePersonalInfoEditController extends Controller {
  personInfoValidations = PersonInfoValidations;
  shortSleeveOptions = ShortSleeveOptions;
  longSleeveOptions = LongSleeveOptions;

  @action
  onSubmit(model, isValid) {
    if (!isValid) {
      return;
    }

    this.set('isSubmitting', true);
    this.house.saveModel(model, 'Your personal information was successfully updated.', () => {
      this.set('isSaved', true);
    })
    .finally(() => this.set('isSubmitting', false) );
  }

  @action
  onCancel() {
    this.toast.warning('Editing your personal information was cancelled. No changes were saved.');
    this.transitionToRoute('me.overview');
  }
}
