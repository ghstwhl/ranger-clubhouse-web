import { module, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | modal-site-leave', function(hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{modal-site-leave}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#modal-site-leave}}
        template block text
      {{/modal-site-leave}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
