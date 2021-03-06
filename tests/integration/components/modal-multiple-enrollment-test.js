import { module, skip /* test */ } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | modal-multiple-enrollment', function(hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{modal-multiple-enrollment}}`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      {{#modal-multiple-enrollment}}
        template block text
      {{/modal-multiple-enrollment}}
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
