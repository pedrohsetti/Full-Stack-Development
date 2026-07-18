let posts = [
    {id: 1, title: 'Post One', body: 'This is post one'},
    {id: 2, title: 'Post Two', body: 'This is post two'},
    {id: 3, title: 'Post Three', body: 'This is post three'}
];

// Get all posts
// GET api/posts
export const getPosts = (req, res, next) => {
    const limit = parseInt(req.query.limit);
    if(!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit));
    }
    res.status(200).json(posts);
};

// Get single post
// GET api/posts/:id
export const getPost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    if(!post) {
        const error = new Error(`Post ${id} not found`);
        error.status = 404;
        return next(error);
    }
    res.status(200).json(post);
};

// Create post
// POST api/posts
export const createPost = (req, res, next) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
    };
    if (!newPost.title) {
        const error = new Error('Title is required');
        error.status = 400;
        return next(error);
    }
    posts.push(newPost);
    console.log(`Post created: ${newPost.title}`);
    res.status(201).json(newPost);
};

// Update post
// PUT api/posts/:id
export const updatePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    if (!post) {
        const error = new Error(`Post ${id} not found`);
        error.status = 404;
        return next(error);
    }
    post.title = req.body.title || post.title;
    res.status(200).json({message: 'Post updated'});
};

// Delete post
// DELETE api/posts/:id
export const deletePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    if (!post) {
        const error = new Error(`Post ${id} not found`);
        error.status = 404;
        return next(error);
    }
    posts = posts.filter(post => post.id !== id);
    res.status(200).json({message: 'Post deleted'});
};