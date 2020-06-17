module.exports = {
  list: (req, res) => {
    res.status(200).send("listing documents");
  },
  add: (req, res) => {
    res.status(200).send("adding a document");
  },
  view: (req, res) => {
    res.status(200).send("viewing a document");
  },
  update: (req, res) => {
    res.status(200).send("updating a document");
  },
  delete: (req, res) => {
    res.status(200).send("deleting a document");
  },
};
