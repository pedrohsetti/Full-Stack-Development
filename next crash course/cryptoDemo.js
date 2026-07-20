import crypto from 'crypto';

//create hash
// const hash = crypto.createHash('sha256');
// hash.update('Hello, world!');
// console.log(hash.digest('hex')); // Output: a591a6d40bf486d8a64e4c3020207b1e5f28d9c9c3f3a5b3c3f3a5b3c3f3a5b3


//randomBytes
// crypto.randomBytes(16, (err, buffer) => {
//   if (err) throw err;
//   console.log(buffer.toString('hex')); // Output: Random 16 bytes in hex format
// });

//encrypt and decrypt

//create cipher & decipher
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Hello, world!', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(`Encrypted: ${encrypted}`); // Output: Encrypted: <encrypted text>

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(`Decrypted: ${decrypted}`); // Output: Decrypted: Hello, world!