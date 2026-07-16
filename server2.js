import { createServer } from 'http';

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

//Logger middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
}

//JSON middleware
const jsonParser = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
}

//Route handler for GET /api/users
const getUsers = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(users));
}

//Route handler for GET /api/users/:id
const getUserById = (req, res) => {
  const id = parseInt(req.url.split('/')[3]);
  const user = users.find((user) => user.id === id);
  if (user) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(user));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'User not found' }));
  }
};

//Route handler for 404 Not Found
const notFound = (req, res) => {
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not found' }));
};

//Route handler for POST /api/users
const createUser = (req, res) => {
  let body = '';
    //Listen for the data
  req.on('data', (chunk) => {
    body += chunk.toString();
  });

  req.on('end', () => {
    const userData = JSON.parse(body);
    const newUser = { id: users.length + 1, name: userData.name };
    users.push(newUser);
    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(newUser));
  });
};

const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonParser(req, res, () => {
      if (req.url === '/api/users' && req.method === 'GET') {
        getUsers(req, res);
      } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
        getUserById(req, res);
      } else if (req.url === '/api/users' && req.method === 'POST') {
        createUser(req, res);
      } else {
        notFound(req, res);
      }
    });
  });
});

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});