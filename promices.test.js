const some = require('./promices');

test('test resolves no await', () => {
    return some().then(data => {
        expect(data).toBe('foo');
    });
});

test('test resolves with await', async () => {
    const data = await some();
    expect(data).toEqual('foo');
});