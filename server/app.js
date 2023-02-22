const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const channelRoutes = require("./routes/Details");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(channelRoutes);


app.listen(8080, console.log("Server started at port 8080"));