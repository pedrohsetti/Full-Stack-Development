import url from 'url';

const urlString = 'https://www.google.com/search?q=hello+world';

//url object
const urlObject = new URL(urlString);
console.log(urlObject); // Output: URL { href: 'https://www.google.com/search?q=hello+world', origin: 'https://www.google.com', protocol: 'https:', username: '', password: '', host: 'www.google.com', hostname: 'www.google.com', port: '', pathname: '/search', search: '?q=hello+world', searchParams: URLSearchParams { 'q' => 'hello world' }, hash: '' }

//format 
console.log(url.format(urlObject)); // Output: https://www.google.com/search?q=hello+world

//import.meta.url
console.log(import.meta.url); // Output: file:///path/to/urlDemo.js

//fileURLToPath
console.log(url.fileURLToPath(import.meta.url)); // Output: /path/to/urlDemo.js
console.log(urlObject.search); // Output: ?q=hello+world

const searchParams = new URLSearchParams(urlObject.search);
console.log(searchParams); // Output: q => hello world
console.log(searchParams.get('q')); // Output: hello world