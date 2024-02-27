## Blog API
Simple API allowing users to perform CRUD (Create, Read, Update, Delete) operations on blog posts. The API provides endpoints to fetch all blog posts, fetch a specific blog post by ID, create a new blog post, update a blog post by ID, and delete a blog post by ID.

## Features
- Fetch all blog posts
- Fetch a specific blog post by ID
- Create a new blog post
- Update a blog post by ID
- Delete a blog post by ID

 ## Technologies Used
- Node.js
- Express.js
- Axios
- EJS

## Installation
- Clone the repository at `git clone https://github.com/Sergius-Nyah/Blog-API.git`
- Navigate to the project directory: `cd Blog-API`
- Install the dependencies: `npm i express body-parser axios`
- Running the Application concurrently: 
    1.  `npm start index.js`
    And in another window, run 
    2. `npm start server.js` 

## Usage
The API has the following endpoints:

GET /posts: Fetch all blog posts
GET /posts/:id: Fetch a specific blog post by ID
POST /posts: Create a new blog post
PATCH /posts/:id: Update a blog post by ID
DELETE /posts/:id: Delete a blog post by ID

## License
This project is licensed under the terms of the MIT License.

## Contributing
PRs are welcome. For major changes, please open an issue first to discuss what you would like to change. Please also make sure to update tests as appropriate.

