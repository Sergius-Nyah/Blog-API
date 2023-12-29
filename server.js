import express from "express";
import bodyParser from "body-parser"; // Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
import axios from "axios"; // Make HTTP requests.  

const app = express();
const port = 3000;
const API_URL = "http://localhost:4000"; // URL of the API server

app.use(express.static("public")); // Use Built-in middleware to serve static files 
// from "public".  

app.use(bodyParser.urlencoded({ extended: true })); // Use body-parser middleware to parse 
// incoming request in URL-encoded format. 

app.use(bodyParser.json()); //Accept and Understand JSON from incoming request. 

// Fetch posts from API and render on index.ejs
app.get("/", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    console.log(response);
    res.render("index.ejs", { posts: response.data });
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts" });
  }
});

// Render modify.ejs for creating new posts
app.get("/new", (req, res) => {
  res.render("modify.ejs", { heading: "New Post", submit: "Create Post" });
});

//Fetches and Renders specific post with "ID" 
app.get("/edit/:id", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/posts/${req.params.id}`);
    console.log(response.data);
    res.render("modify.ejs", {
      heading: "Edit Post",
      submit: "Update Post",
      post: response.data,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching post" });
  }
});

// Create a new post
app.post("/api/posts", async (req, res) => {
  try {
    const response = await axios.post(`${API_URL}/posts`, req.body);
    console.log(response.data);
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ message: "Error creating post" });
  } 
});

// Partially update a post
app.post("/api/posts/:id", async (req, res) => {
  console.log("called");
  try {
    const response = await axios.patch(
      `${API_URL}/posts/${req.params.id}`,
      req.body
    );
    console.log(response.data);
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ message: "Error updating post" });
  }
});

//Send request to Delete a post with a specific ID. 
app.get("/api/posts/delete/:id", async (req, res) => {
  try {
    await axios.delete(`${API_URL}/posts/${req.params.id}`);
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ message: "Error deleting post" });
  }
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
