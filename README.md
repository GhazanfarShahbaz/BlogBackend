# Blog Post Api
#### This is a simple API for managing blog posts with Express and Sequelize.

## Getting Started
#### To get started, first clone this repository and install the dependencies:

``` bash
git clone https://github.com/myuser/my-blog-api.git
cd my-blog-api
npm install
```

#### Next, you will need to set the following environment variables (you can use a .env file in development):
- PORT: the port the server will listen on
- DATABASE_URL: the URL for the PostgreSQL database
- PASSWORD: the password required to add or update blog posts
#### You can do this by creating a .env file in the root of the project:
- PORT=3000
- DATABASE_URL=postgres://username:password@localhost:5432/mydatabase
- PASSWORD=mypassword
#### Finally, you can start the server:
``` bash
npm start
```
#### The server will now be listening on the specified port.

## Endpoints
### GET /
#### Returns a simple message to confirm that the server is running.
#### Example response:
#### The express app is running
### GET /getAllBlogPosts
#### Returns an array of all blog posts.
#### Example response:
``` json
[
  {
    "id": 1,
    "title": "My First Blog Post",
    "content": "This is my first blog post.",
    "publishedAt": "2022-01-01T00:00:00.000Z",
    "editedAt": "2022-01-01T00:00:00.000Z"
  },
  {
    "id": 2,
    "title": "My Second Blog Post",
    "content": "This is my second blog post.",
    "publishedAt": "2022-02-01T00:00:00.000Z",
    "editedAt": "2022-02-01T00:00:00.000Z"
  }
]
```
### GET /getBlogPost/:id
#### Returns a single blog post by ID.
#### Example response:
``` json
{
  "id": 1,
  "title": "My First Blog Post",
  "content": "This is my first blog post.",
  "publishedAt": "2022-01-01T00:00:00.000Z",
  "editedAt": "2022-01-01T00:00:00.000Z"
}
```

### POST /addBlogPost
#### Adds a new blog post.

Example request body:
``` json
{
  "title": "My Third Blog Post",
  "content": "This is my third blog post.",
  "tags": ["nodejs", "express"],
  "password": "mypassword"
}
```

#### Example response:
``` json
{
  "id": 3,
  "title": "My Third Blog Post",
  "content": "This is my third blog post.",
  "publishedAt": "2022-03-01T00:00:00.000Z",
  "editedAt": "2022-03-01T00:00:00.000Z",
  "tags": ["nodejs", "express"]
}
```
### PUT /updateBlogPost/:id
#### Updates an existing blog post.
#### Example request body:
``` json
{
  "title": "My Updated Blog Post",
  "content": "This is my updated blog post.",
  "tags": ["nodejs", "sequelize"],
  "password": "mypassword"
}
```
#### Example response:
``` json
{
  "id": 1,
  "title": "My Updated Blog Post",
  "content": "This is my updated blog post.",
  "publishedAt": "2022-01-01T00:00:00.000Z",
  "editedAt": "2022-04-01T00:00:00.000Z",
  "tags": ["nodejs", "sequelize"]
}
```

## To Deploy This App
```
# First make sure you have run, npm install then
pm2 start app.js
```