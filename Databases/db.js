const knex = require("knex")({
  client: "mysql",
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'Kavi@123',
    database: 'UserAccount',
  }
});

//User
knex.schema
  .createTable("UserInformations", (table) => {
    table.increments("id").primary();
    table.string("name");
    table.string("email").notNullable().unique();
    table.string("password");
  })
  .then((data) => {
    console.log("Table Created");
  })
  .catch((err) => {
    console.log("Table Already Exist!!");
  });




//State
knex.schema
  .createTable("State", (table) => {
    table.increments("id").primary();
    table.string("state_name").notNullable().unique();
  })
  .then((data) => {
    console.log("Table Created");
  })
  .catch((err) => {
    console.log("Table Already Exist!!");
  });



//District
knex.schema
.createTable("District", (table) => {
  table.increments("id").primary();
  table.string("district_name").notNullable().unique();
  table.integer("State_id").notNullable().unique();
})
.then((data) => {
  console.log("Table Created");
})
.catch((err) => {
  console.log("Table Already Exist!!");
});  



//Child
knex.schema
.createTable("Child", (table) => {
  table.increments("id")
  table.string("Name");
  table.string("Sex");
  table.string("dob");
  table.string("Father_Name");
  table.string("Mother_Name");
  table.integer("State_id")
  table.integer("District_id")
})
.then((data) => {
  console.log("Table Created");
})
.catch((err) => {
  console.log("Table Already Exist!!");
});  




module.exports = knex;