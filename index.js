const express = require("express");

const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const db = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


app.get("/", (req, res) => {
    res.json({ message: "Welcome to our application." });
});

// db.sequelize.sync();

require("./routes/auth.route")(app);
require("./routes/article.route")(app);
require("./routes/clients.route")(app);
require("./routes/orders.route")(app);
require("./routes/orderDetails.route")(app);


// const PORT = process.env.PORT | 5000;

// app.listen(process.env.PORT | 5000, () => {
//     console.log(`Server listening on port ${PORT}`);
// });

var server_port = process.env.YOUR_PORT || process.env.PORT || 8088;

app.listen(server_port, function() {
console.log('Listening on port %d', server_port);
});