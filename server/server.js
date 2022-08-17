const express = require('express');
const app = express();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Server static files
app.use(express.static("build"));

// App Setup
const PORT = process.env.PORT || 5000;

// Listen
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})