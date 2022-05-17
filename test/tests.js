import './example.test.js';
// import { render } from './render-utils.js';

const test = QUnit.test;

test('render should create a new div on the home page with data from supabase', (expect) => {
    const expected = '<div><h2>test title</h2><p>test description</p><p>test contact</p></div>';
    const actual = '';
    expect.equal(actual.outerHTML, expected);
});