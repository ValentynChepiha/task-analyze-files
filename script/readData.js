const { readFile } = require('fs');
const util = require("util");

module.exports = async (file) => {
    const readFileAsync = util.promisify(readFile);

    return await readFileAsync(file)
        .then((data) => {
            return  data
                    .toString()
                    .split('"')[1]
                    .split('user:')
                    .map((el) => el
                        .split(',')[0]
                        .trim())
                    .filter( el => !!el.length)
                    .filter( el => !(el.indexOf(':')+1));
        })
        .catch( (err) => {
            console.log('Error :: ', err);
            return [];
        })
        .finally(() => {
            console.log(` File "${file}" uploaded. `)
        })
};


