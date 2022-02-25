const knex = require("../Databases/db");
const jwt = require('jsonwebtoken')
const cookie = require('cookie-parser')
const bcrypt = require("bcrypt");

//get users
users = (req, res) => {
  knex
    .select("*")
    .from("UserInformations")
    .then((data) => {
      console.log(data);
      res.json({ "success": true,
      "status": 200,
      "user": data });
    })
    .catch((er) => {
      console.log(er);
      res.json({ message: er });
    });
};



//insert data
createUsers = async (req, res) => {
  const userdata = {
    name: req.body.name,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, 10),
  };
  knex("UserInformations")
    .insert(userdata)
    .then((data) => {
      res.send({ success: `${userdata.email} registered successfully!` });
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: err });
    });
};



//UserLogin

Userlogin=(req,res)=>{
knex.from('UserInformations').select('email', 'password').where('email', '=', req.body.email, 'password', '=', req.body.password)
  .then((data) => {
    const token =  jwt.sign({email : data[0].email}, "kjspsbchhb")
    res.cookie('user', token)
    res.json({'success' : true,
    'status' : 200,
    'message' : 'login successfully',
    'token' : token,
  })
    console.log({message:data});
  })
  .catch((err) => { console.log({message:err})
  console.log({message:err})})
}



//UserLogout
userLogout = (req,res)=>{
  res.clearCookie('user')
  res.json({message:'logout successfully'})
}




module.exports = { users, createUsers, Userlogin, userLogout };