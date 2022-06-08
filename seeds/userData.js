const { User } = require('../models');

const userdata =
[
  {
    "username": "Sara",
    "password": "passwordsara"
  },
  {
    "username": "Bes",
    "password": "passwordBes"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});