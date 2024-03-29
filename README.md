# E-Commerce Back End Application

[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

## Description

This is a E-Commerce Back End Application that uses Express.js, MySQL, MySQL2 and Sequelize. This application comes with seeds for testing and expirementing with the database. The app allows for the creation of Categories, Products and Tags for an E-Commerce site. All testing in the video provided is done through the app Insomnia.

https://drive.google.com/file/d/1UHbYnv5G7DnPmJnklfP1mvqyawJY50bo/view?usp=drive_link

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)

## Installation

Start by running `npm i` to install all dependencies. Running the MySQL server with `mysql -u root -p` should prompt for your personal password. The `-u` flag for user and the `-p` flag for password. From there, run `source db/schema.sql` to create the database that Sequelize will then use. `\q` will quit mysql and bring you back to the terminal. Run `node seeds/index.js` to populate the new database with the provided seeds. Lastly, run `npm start` to begin the application locally.

Be sure to create a `.env` file with the variables `DB-NAME`, `DB_USER` and `DB_PW`. This way Sequelize can connect to your MySQL. Check the `config/connection.js` file for how Sequelize connects to MySQL.

## Usage

Each of these routes were tested on the app Insomnia. The usage describes sending each HTTP request using Insomnia.

Set up the `PORT` within your `.env` file or use the default `3001` to access the application after running the server. Ex. `localhost:3001/api/EXAMPLE`.

### Categories

Starting with categories, running a `GET` request from the root of categories (ex. `localhost:3001/api/categories/`) will return all categories in JSON format. A `GET` request to the ID of any category (ex. `localhost:3001/api/categories/:id`) will return a single category by its associated ID.

Next, running a `POST` request from the root of categories (ex. `localhost:3001/api/categories/`) with JSON (ex. `{"category_name": "ExampleA"}`) will create a new category with an auto-incremented ID. Any category can be updated after creation by sending a `PUT` request to the ID (ex. `localhost:3001/api/categories/:id`) with JSON (ex. `{"category_name": "ExampleB"}`).

Lastly, any already created category can be deleted using a `DELETE` request to the ID of that catergory (ex. `localhost:3001/api/categories/:id`).

### Tags

Creating any necessary tags first helps with creating products afterwards. To start, a `GET` request to the root of tags (ex. `localhost:3001/api/tags/`) will return all tags in JSON format. A `GET` request to the ID of any tag (ex. `localhost:3001/api/tags/:id`) will return a single tag by its associated ID.

Next, running a `POST` request from the root of tags (ex. `localhost:3001/api/tags/`) with JSON (ex. `{"tag_name": "ExampleC"}`) will create a new tag with an auto-incremented ID. Any tag can be updated after creation by sending a `PUT` request to the ID (ex. `localhost:3001/api/tags/:id`) with JSON (ex. `{"tag_name": "ExampleD"}`).

Lastly, any already created tag can be deleted using a `DELETE` request to the ID of that tag (ex. `localhost:3001/api/tags/:id`).

### Products

Finally, after all necessary tags are created for any products, a `GET` request to the root of products (ex. `localhost:3001/api/products/`) will return all products in JSON format. A `GET` request to the ID of any product (ex. `localhost:3001/api/products/:id`) will return a single tag by its associated ID.

Next, running a `POST` request from the root of products (ex. `localhost:3001/api/products/`) with JSON will create a new product with an auto-incremented ID.

`POST` Example:
```json
{
    "product_name": "ExampleE",
    "price": NUM,
    "stock": NUM,
    "category_id": NUM,
    "tags": [
        {
            "id": NUM
        }
    ]
}
```

Any product can be updated after creation by sending a `PUT` request to the ID (ex. `localhost:3001/api/products/:id`) with JSON.

`PUT` Example:
```json
{
    "product_name": "ExampleF",
    "price": NUM,
    "stock": NUM,
    "category_id": NUM
}
```

Lastly, any already created product can be deleted using a `DELETE` request to the ID of that product (ex. `localhost:3001/api/products/:id`).

## License

Licensed under the MIT license.

[MIT License](https://opensource.org/licenses/MIT)

## Questions

For any questions, please contact WestleyCervantes@gmail.com. Visit [wacwestley30](https://github.com/wacwestley30) for more projects.
