const readData = require('./script/readData');

const getMinus = async () => {
    const listUsersFirst = await readData('./data/file1');
    const listUsersSecond = await readData('./data/file2');

    const setUsersFirst = new Set(listUsersFirst);
    const setUsersSecond = new Set(listUsersSecond);

    const resultListUsers = [];
    for (let user of setUsersFirst.values()) {
        if(!setUsersSecond.has(user)){
            resultListUsers.push(user);
        }
    }

    if( resultListUsers.length ) {
        console.log(`List of File1 users without File2 users: ${resultListUsers}`);
        return;
    }

    console.log('All users of File1 in File2.');
};

getMinus();