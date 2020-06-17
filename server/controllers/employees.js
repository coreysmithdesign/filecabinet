module.exports = {
  list: (req, res) => {
    res.status(200).send("listing employees");
  },
  add: (req, res) => {
    res.status(200).send("adding an employee");
  },
  view: (req, res) => {
    res.status(200).send("viewing a employee");
  },
  update: (req, res) => {
    res.status(200).send("updating a employee");
  },
  delete: (req, res) => {
    res.status(200).send("deleting a employee");
  },
};
