const knex = require("../Databases/db");
const bcrypt = require("bcrypt");

//get users
state = (req, res) => {
  knex
    .select("*")
    .from("State")
    .then((data) => {
      console.log(data);
      res.json({"success": true,
      "status": 200,
      "message": "State Detail",
      "state": [data] });
    })
    .catch((er) => {
      console.log(er);
      res.json({ message: error });
    });
};



//insert data
createState = async (req, res) => {
  const userdata = {
    state_name: req.body.state_name
  };
  knex("State")
    .insert(userdata)
    .then((data) => {
      res.send({"success": true,
      "status": 200,
      "message": "Operation performed successfully"});
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: err });
    });
};


module.exports = { state, createState };