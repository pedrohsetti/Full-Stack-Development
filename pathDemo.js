import path from 'path';
import url from 'url';

const filePath = './dir1/dir2/file.txt';

//basename
console.log(path.basename(filePath)); // Output: file.txt

//dirname
console.log(path.dirname(filePath)); // Output: ./dir1/dir2

//extname
console.log(path.extname(filePath)); // Output: .txt

//parse
console.log(path.parse(filePath)); // Output: { root: '', dir: './dir1/dir2', base: 'file.txt', ext: '.txt', name: 'file' }

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename, __dirname); // Output: /path/to/pathDemo.js /path/to

//join
const joinedPath = path.join(__dirname, 'dir1', 'dir2', 'file.txt');
console.log(joinedPath); // Output: /path/to/dir1/dir2/file.txt

//resolve
const resolvedPath = path.resolve('dir1', 'dir2', 'file.txt');
console.log(resolvedPath); // Output: /current/working/directory/dir1/dir2/file.txt