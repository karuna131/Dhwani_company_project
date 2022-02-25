const knex = require("../Databases/db");
const bcrypt = require("bcrypt");

//get users
child = (req, res) => {
  knex
    .select("*")
    .from("Child").join("State", "Child.State_id", "State.id").join("District", "Child.District_id", "District.id")
    .then((data) => {
      // console.log(data);
      res.json({ "success": true,
      "status": 200,
      "message": "Child Profile Detail",
      "child_profile": [data]});
    })
    .catch((er) => {
      console.log(er);
      res.json({ message: error });
    });
};



//insert data
createChild = async (req, res) => {
  const userdata = {
    Name : req.body.Name,
    Sex : req.body.Sex,
    DOB : req.body.dob,
    Father_Name : req.body.Father_Name,
    Mother_Name : req.body.Mother_Name,
    District_id : req.body.District_id,
    State_id : req.body.State_id
  };
  console.log(userdata);
  knex("Child")
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


module.exports = { child, createChild };