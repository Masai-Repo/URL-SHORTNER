const mongoose = require("mongoose");

// declare a Database string URI
const DB_URI =
  "mongodb+srv://dishu:Qwerty123456@mydatabase.kj3t57h.mongodb.net/?retryWrites=true&w=majority";

// establishing a database connection
mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

// export the connection object
module.exports = connection;
