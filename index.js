const express = require(`express`);
const cors = require("cors");
const db = require("./config/db");
require(`dotenv`).config()

const app = express();
app.use(cors());
app.use(express.json());

db.connection
  .once(`open`, () => console.log("mongodbConnected"))
  .on(`error`, (err) => console.log(`error===> ${err}`));

app.get(`/`, (req, res) => {
  //Access mongdb

  //Data from client =>req

  //Data to send to client => res
  res.send({
    status: 200,
    message: "todo backend run!",
    data: [],
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Running on port ${process.env.PORT}`);
});

app.use(`/apis`, require(`./rootRoute`));
