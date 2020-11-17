const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");


const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//console logs everything going on in the back end
app.use(morgan("dev"));

app.use(express.static("public"));
app.use(morgan('tiny'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
});

// routes
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes")(app);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});