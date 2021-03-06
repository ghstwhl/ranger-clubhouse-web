import { module, skip /*test*/ } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | person/timesheet-missing', function(hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{person/timesheet-missing}}`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      {{#person/timesheet-missing}}
        template block text
      {{/person/timesheet-missing}}
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
