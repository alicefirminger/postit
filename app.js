// Import required modules
const express = require("express");

// Create the Express app
const app = express();

app.use(express.static("public"));
// Define routes and middleware here

// Start the server
const port = 3000; // You can use any port number you prefer
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
