import os from 'os';

//userInfo
console.log(os.userInfo());

//totalmem
console.log(`Total Memory: ${os.totalmem()}`);

//freemem
console.log(`Free Memory: ${os.freemem()}`);

//cpus
console.log(`CPU Info: ${os.cpus()}`);