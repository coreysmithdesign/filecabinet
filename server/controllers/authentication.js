const bcrypt = require("bcrypt");

module.exports = {
  register: async (req, res) => {
    const db = req.app.get("db");
    const {
      username,
      password,
      email,
      full_name,
      business_name,
      is_business,
    } = req.body;

    // check if the username provided already exists
    const existingUser = await db.user_check(username);
    if (existingUser[0]) {
      return res.status(409).send("User already exists");
    }

    // if not found, proceed with registering user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const newUser = await db.user_register([
      username,
      hash,
      email,
      full_name,
      business_name,
      is_business,
    ]);
    req.session.user = {
      user_id: newUser[0].id,
      username: newUser[0].username,
      email: newUser[0].email,
    };
    res.status(200).send(req.session.user);
  },

  login: async (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;

    // check if the username provided already exists
    const user = await db.user_check(username);

    // if so, proceed with logging in
    if (!user[0]) {
      return res.status(404).send("Nope. This login doesn't check out.");
    } else {
      const authenticated = bcrypt.compareSync(password, user[0].password);
      if (authenticated) {
        req.session.user = {
          user_id: user[0].id,
          username: user[0].username,
          avatar: user[0].avatar,
        };
        res.status(200).send(req.session.user);
      } else {
        res.status(403).send("Username or password incorrect");
      }
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  },
};
