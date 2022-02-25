const knex = require("../Databases/db");
const bcrypt = require("bcrypt");

//get users
district = (req, res) => {
  knex
    .select("*")
    .from("District")
    .then((data) => {
      console.log(data);
      res.json({ "success": true,
      "status": 200,
      "message": "District Detail",
      "district": [data] });
    })
    .catch((er) => {
      console.log(er);
      res.json({ message: er });
    });
};



//insert data
createDistrict = async (req, res) => {
  const userdata = {
    district_name : req.body.district_name,
    state_id : req.body.state_id
  };
  knex("District")
    .insert(userdata)
    .then((data) => {
      res.send({ "success": true,
      "status": 200,
      "message": "Operation performed successfully"});
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: err });
    });
};


module.exports = { district, createDistrict };