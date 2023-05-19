const fetch = require("node-fetch");
const address = fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((user) => {
        return user;
    });

const printAddress = async () => {
    const a = await address;
    return a;
};
module.exports = printAddress;