function someAction(x, y, someCallback) {
    return someCallback(x, y);
}

function calc(name, lastName) {
    return name + ' ' + lastName;
}
module.exports = {calc:calc, someAction:someAction};