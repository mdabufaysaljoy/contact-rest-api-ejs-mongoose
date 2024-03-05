const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const router = require("./routes");
const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/contacts", router);
app.set("view engine", "ejs");

const uri =
  "mongodb+srv://mdabufaysaljoy:faysal17@users.wit5elw.mongodb.net/test";
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.render("home");
});

mongoose
  .connect(uri)
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        ` express server is running at http://localhost:${PORT} and database is connected......`
      );
    });
  })
  .catch((e) => {
    console.log(e);
  });
