import './example.test.js';
import { renderPost } from '../render-utils.js';

const test = QUnit.test;

test('render should create a new div with data from supabase', (expect) => {
    const expected = '<div class="post"><h2>test title</h2><p>test description</p><p>test contact</p></div>';
    const example = { title: 'test title', description: 'test description', contact: 'test contact' };
    const actual = renderPost(example);
    expect.equal(actual.outerHTML, expected);
});