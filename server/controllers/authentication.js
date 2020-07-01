const bcrypt = require("bcrypt");

module.exports = {
  register: async (req, res) => {
    const db = req.app.get("db");
    const { username, password, email, full_name, business_name } = req.body;

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
          user_id: user[0].user_id,
          username: user[0].username,
          full_name: user[0].full_name,
          bussiness_name: user[0].bussiness_name,
          settings: user[0].settings,
          email: user[0].email,
          avatar: user[0].avatar,
        };
        res.status(200).send(req.session.user);
      } else {
        res.status(403).send("Username or password incorrect");
      }
    }
  },

  user: (req, res) => {
    if (req.session.user) {
      res.status(200).send(req.session.user);
    } else {
      res.sendStatus(404);
    }
  },

  view_user: async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const db = req.app.get("db");
    const loggedInUser = await db.user_view([id]);
    res.status(200).send(loggedInUser[0]);
  },

  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  },
};
