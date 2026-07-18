import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import posts from './routes/posts.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';

const port = process.env.PORT || 5000;

const app = express();

// get dir name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//logger middleware
app.use(logger);

//routes
app.use('/api/posts', posts);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(notFound);

//error handler
app.use(errorHandler);



// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/about', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });
    
// app.get('/contact', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'contact.html'));
// });

app.listen(port, () => console.log(`Server is running on port ${port}...`));