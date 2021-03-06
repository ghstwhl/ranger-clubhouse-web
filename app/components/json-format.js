import Component from '@ember/component';

import JSONFormatter from 'json-formatter-js'

export default class JsonFormatComponent extends Component {
  json = null;

  didInsertElement() {
    super.didInsertElement(...arguments);
    let obj;

    try {
      if (typeof obj == "string") {
        obj = JSON.parse(this.json);
      } else {
        obj = this.json;
      }
    } catch (e) {
      obj = this.json;
    }

    const formatter = new JSONFormatter(JSON.parse(this.json), 1, {
      animateOpen: false,
      animateClose: false,
    });
    this.element.appendChild(formatter.render());
  }
}
