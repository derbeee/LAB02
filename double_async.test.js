const some = require('./double_async');


test('test resolves with await that calls another await', async () => {
    const data = await some(25);
    expect(data).toEqual(25);
});