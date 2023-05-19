async function ret() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("foo"), 1000)
    });

    let result = await promise; // wait until the promise resolves (*)

    return result; // "done!"
}
module.exports = ret;