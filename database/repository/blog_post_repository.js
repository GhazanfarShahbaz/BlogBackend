class BlogPostStore {
    constructor(sequelize) {
        this.BlogPost = sequelize.models.blog_post;
    }

    async insert(title, content, publishedAt = new Date(), editedAt = new Date()) {
        return await this.BlogPost.create({ title, content, publishedAt, editedAt });
    }

    async update(id, title, content, editedAt = new Date()) {
        const blogPost = await this.BlogPost.findByPk(id);
        if (!blogPost){
            throw new Error(`Cannot find blog post with id ${id}`);
        }

        blogPost.title = title;
        blogPost.content = content;
        blogPost.editedAt = editedAt;

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