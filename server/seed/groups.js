const db = require("../db");
const User = require("../models/user");

const createUser = async () => {
  const users = [
    {
      username: "Doeboy",
      password: "user001",
      email: "boy@doe.com",
    },
    {
      username: "Doegirl",
      password: "user002",
      email: "girl@doe.com",
    },
  ];
  await User.deleteMany();
  await User.insertMany(users);
  console.log("new user created", users);
};
const run = async () => {
  await createUsers();
  db.close();
};
run();
