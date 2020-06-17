const bcrypt = require("bcrypt");

module.exports = {
  register: (req, res) => {
    res.status(200).send("register sup");
  },
  login: (req, res) => {
    res.status(200).send("login sup");
  },
  logout: (req, res) => {
    res.status(200).send("logout sup");
  },
};
