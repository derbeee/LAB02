async function ret(value) {

    let promise = new Promise((resolve, reject) => {
        reject(new Error("o_O"));
    });

    return promise; // "done!"
}
async function cal(v) {
        const wa = await ret(v);
    return wa;
}


module.exports = cal;