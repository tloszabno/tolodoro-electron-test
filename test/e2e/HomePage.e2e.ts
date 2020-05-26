/* eslint jest/expect-expect: off, jest/no-test-callback: off */
import { ClientFunction, Selector } from 'testcafe';

const getPageTitle = ClientFunction(() => document.title);

fixture`Home Page`.page('../../app/app.html')

test('should open window and contain expected page title', async t => {
  await t.expect(getPageTitle()).eql('Hello Electron React!');
});

test('should add todo', async t => {
  await t
    .typeText('#addtodo', 'New task')
    .click('#addtodo')
    .pressKey('enter')
    .expect(Selector('[data-testid="todos"]').textContent)
    .contains('New task');
});
