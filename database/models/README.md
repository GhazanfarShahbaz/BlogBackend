# Sequelize Models
#### This folder contains various Sequelize models for different tables in a database. Currently it contains the following files:
* BlogPost.model.js - This file defines the Blog Post model


# Models
## Blog Post Model - BlogPost.model.js
#### This file defines a simple blog post with a title, content, and publication and edit timestamps. It has the following fields:
* id: auto-incrementing integer primary key
* title: string, required
* content: text, required
* publishedAt: timestamp, non-null, defaults to the current time
* editedAt: timestamp, non-null, defaults to the current time

# Model Interaction
#### You can use the Sequelize ORM to interact with this table and perform CRUD operations as needed.
