const some = require('./args_check');

const mockFun = jest.fn(x => "Oleksandr", y => "Derbenov");

test('Mock test', () => {
    some.someAction("Oleksandr", "Derbenov", mockFun);
    expect(mockFun.mock.calls[0][0]).toEqual("Oleksandr");
    expect(mockFun.mock.calls[0][1]).toEqual("Derbenov");
});
test('Mock test FAILED', () => {
    some.someAction("Oleksandr", "Derbenov", mockFun);
    expect(mockFun.mock.calls[0][0]).not.toEqual("Bogdan");
    expect(mockFun.mock.calls[0][1]).not.toEqual("Prostyradlo");
});

test('test callbacks', () => {
    expect(some.someAction("Oleksandr", "Derbenov", some.calc)).toEqual("Oleksandr Derbenov");
});