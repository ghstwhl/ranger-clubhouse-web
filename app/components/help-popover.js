import Component from '@ember/component';
import { action } from '@ember/object';
import { classNames } from '@ember-decorators/component';



import { isEmpty } from '@ember/utils';
import { inject as service } from '@ember/service';

@classNames('popover-container')
export default class HelpPopoverComponent extends Component {
  slug = null;
  bottom = false;
  left = false;
  label = '';

  @service ajax;

  isLoading = false;
  isShowing = false;

  body = '';

  @action
  clickHelp() {
    if (this.isShowing) {
      return;
    }

    this.set('isShowing', true);
    if (!isEmpty(this.helpText)) {
      return;
    }

    this.set('isLoading', true);
    this.ajax.request(`help/${this.slug}`).then((result) => {
      this.set('title', result.help.title);
      this.set('body', result.help.body);
    })
    .catch((response) => {
      if (response.status == 404) {
        this.set('title', 'Help not found');
        this.set('body', null);
      } else {
        this.house.handleErrorResponse(response);
      }
    })
    .finally(() => this.set('isLoading', false));
  }

  @action
  closeHelp() {
    this.set('isShowing', false);
  }
}
