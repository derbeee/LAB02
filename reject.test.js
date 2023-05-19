const some = require('./reject');

describe("some", () => {
test('test resolves with await that calls another await', async () => {
    expect(some(15)).rejects.toEqual(new Error("o_O"));
});
});

