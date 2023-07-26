// Import required modules
const express = require("express");
const fs = require("fs");

// Create the Express app
const app = express();

app.use(express.static("public"));
app.use(express.json());
// Define routes and middleware here
app.get("/api/posts", (req, res)=> {
    res.json 
})




// Start the server
const port = 3000; // You can use any port number you prefer
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
