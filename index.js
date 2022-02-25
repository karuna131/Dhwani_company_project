const express = require("express");
const app = express();
const PORT = 5000;
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
const router = require("./routes/users");

// require("./Databases/db");
app.use(express.json());
app.use("/", router);


app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING AT PORT ${PORT}`);
});
