const express = require("express");
const mongoose = require("mongoose");

// Node module that allows to work with file and dir path
const path = require("path");

const app = express();

// connecting to mongodb
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://mernstackdemo:mernstackdemo1@ds163850.mlab.com:63850/merndatabase",
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
      }
    );
    console.log("mongoDB connected successfully");
  } catch (err) {
    console.error(err);
  }
};

connectDB();

// getting json from user
app.use(express.json({ extended: false }));

// all api routes
app.use("/api/loginBusiness", require("./api/loginBusiness"));
app.use("/api/registerBusiness", require("./api/registerBusiness"));
app.use("/api/availability", require("./api/availability"));
app.use("/api/businessinfo", require("./api/businessinfo"));
app.use("/api/services", require("./api/services"));

// user client api routes
app.use("/api/loginUser", require("./api/user/loginUser"));
app.use("/api/registerUser", require("./api/user/registerUser"));
app.use("/api/profile", require("./api/user/profile"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
const HOST = "0.0.0.0";

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
