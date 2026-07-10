import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
const PORT = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname);

const server = http.createServer(async (req, res) => {
    try {
        // check if GET request
        if (req.method === 'GET') {
            let filePath;
            if (req.url === '/') {
            filePath = path.join(__dirname, 'public', 'index.html');
        } else if (req.url === '/about') {
            filePath = path.join(__dirname, 'public', 'about.html');
        } else {
            throw new Error('Invalid request method');
        }
        const data = await fs.readFile(filePath);
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200);
        res.end(data);
        } else {
            throw new Error('Invalid request method');
        }
    } catch (error) {
        console.error(error);
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('<h1>Internal Server Error</h1><br><p>Something went wrong.</p>');
    }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});