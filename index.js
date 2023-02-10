const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const sliderRoute = require("./routes/slider");
const manRoute = require("./routes/mansalon");
const womanRoute = require("./routes/womansalon");
const aboutpageRoute = require("./routes/aboutpage");
const spaRoute = require("./routes/spa")
const electricianRoute = require("./routes/electrician")
const massageRoute = require("./routes/massage");
const searchbarRoute = require("./routes/searchbar");
const PORT = 4000;

dotenv.config();

const bodyParser = require("body-parser");
const Searchbar = require("./models/Searchbar");

// require('./db');

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("mongo db connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(bodyParser.json());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/sliders", sliderRoute);
app.use("/api/aboutpage", aboutpageRoute);
app.use("/api/mansalon", manRoute);
app.use("/api/womansalon", womanRoute);
app.use("/api/spa", spaRoute )
app.use("/api/electrician", electricianRoute)
app.use("/api/massage", massageRoute)
app.use("/api/searchbar", searchbarRoute)

app.listen(PORT, () => {
  console.log(`Server is running  on port ${PORT}`);
});
