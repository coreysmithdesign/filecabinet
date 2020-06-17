module.exports = {
  list: (req, res) => {
    res.status(200).send("listing businesses");
  },
  add: (req, res) => {
    res.status(200).send("adding a business");
  },
  view: (req, res) => {
    res.status(200).send("viewing a business");
  },
  update: (req, res) => {
    res.status(200).send("updating a business");
  },
  delete: (req, res) => {
    res.status(200).send("deleting a business");
  },
};
