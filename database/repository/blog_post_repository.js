class BlogPostStore {
    constructor(sequelize) {
        this.BlogPost = sequelize.models.blog_post;
    }

    async insert(title, content, tags = [], publishedAt = new Date(), editedAt = new Date()) {
        return await this.BlogPost.create({ title, content, publishedAt, editedAt, tags });
    }

    async update(id, title, content, tags = [], editedAt = new Date()) {
        const blogPost = await this.BlogPost.findByPk(id);
        if (!blogPost){
            throw new Error(`Cannot find blog post with id ${id}`);
        }

        blogPost.title = title;
        blogPost.content = content;
        blogPost.editedAt = editedAt;
        blogPost.tags = tags;

        return await blogPost.save();
    }

    async delete(id) {
        const blogPost = await this.BlogPost.findByPk(id);
        if (!blogPost){
            throw new Error(`Cannot find blog post with id ${id}`);
        }

        return await blogPost.destroy();
    }

    async getById(id) {
        return await this.BlogPost.findByPk(id);
    }

    async getAll() {
        return await this.BlogPost.findAll();
    }
}

module.exports = BlogPostStore;
