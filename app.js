require("dotenv").config();
const sequelize = require("./database/Connection");
const BlogPostStore = require('./database/repository/blog_post_repository');
const express = require("express")

const app = express()
const port = process.env.PORT


app.get("/", (req, res) => {
    res.send("The express app is running")
});


app.get("/getAllBlogPosts", async (req, res) => {
    const blogPostStore = new BlogPostStore(sequelize);
    const blogPosts = await blogPostStore.getAll();
    
    res.json(blogPosts);
});


app.get("/getBlogPost/:id", async (req, res) => {
    const id = req.params.id;
    const blogPostStore = new BlogPostStore(sequelize);
    const blogPost = await blogPostStore.getById(id);

    if(blogPost){
        res.json(blogPost);
    }
    else{
        res.status(404).json({ message: `Blog post with id ${id} not found` });
    }
});


app.post('/addBlogPost', async (req, res) => {
    const { title, content, tags } = req.body;

    const blogPostStore = new BlogPostStore(sequelize);
    const newBlogPost = await blogPostStore.insert(title, content, tags);

    res.json(newBlogPost);
});


app.put('/updateBlogPost/:id', async (req, res) => {
    const id = req.params.id;
    const { title, content, tags } = req.body;

    const blogPostStore = new BlogPostStore(sequelize);
    const updatedBlogPost = await blogPostStore.update(id, title, content, tags);

    res.json(updatedBlogPost);
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
    sequelize.sync();
});