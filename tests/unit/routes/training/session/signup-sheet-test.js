import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | training/session/signup-sheet', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:training/session/signup-sheet');
    assert.ok(route);
  });
});
