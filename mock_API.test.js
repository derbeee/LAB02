const { matchersWithOptions } = require('jest-json-schema');
expect.extend(matchersWithOptions({
    verbose: true
}));
const some = require('./mock_API');

test('test resolves with await', async () => {
    const data = await some();
    expect(data.id).toEqual(1);
});


it('validates my json', async () => {
    const schema = {
        properties:
        {
            userId: { type: 'number' },
            id: { type: 'number' },
            title: { type: 'string' },
            completed: { type: 'boolean' }
        },
    }; const data = await some();
    expect(data).toMatchSchema(schema);
});