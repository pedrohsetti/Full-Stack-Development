import express from 'express';

const app = express();

//config ejs
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home Page',
        message: 'Welcome to the Home Page',
        people: [
        { name: 'John', age: 30 },
        { name: 'Jane', age: 25 },
        { name: 'Bob', age: 35 }
    ]
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});