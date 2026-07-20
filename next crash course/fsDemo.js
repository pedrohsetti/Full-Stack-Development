import fs from 'fs/promises';

// //readFile() - callback
// fs.readFile('./test.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// //readFileSync() - synchronous
// const data = fs.readFileSync('./test.txt', 'utf-8');
// console.log(data);

// //promise .then() - asynchronous
// import fs from 'fs/promises';

// fs.readFile('./test.txt', 'utf-8')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//readFile() - async/await
const readFile = async () => {
  try {
    const data = await fs.readFile('test.txt', 'utf-8');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

//writeFile() - async/await
const writeFile = async () => {
  try {
    await fs.writeFile('test.txt', 'Hello, World!');
    console.log('File written successfully.');
  } catch (err) {
    console.log(err);
  }
};

//appendFile() - async/await
const appendFile = async () => {
    try {
        await fs.appendFile('test.txt', '\nAppended text.');
        console.log('File appended successfully.');
    } catch (err) {
        console.log(err);
    }
};

writeFile();
appendFile();
readFile();