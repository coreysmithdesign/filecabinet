module.exports = {
  list: async (req, res) => {
    const db = req.app.get("db");
    const documents = await db.document_list();
    res.status(200).send(documents);
  },

  add: async (req, res) => {
    const {
      user_id,
      employee_id,
      document_name,
      date_recieved,
      date_added,
      date_modified,
      note,
    } = req.body;
    const db = req.app.get("db");
    await db.document_add([
      user_id,
      employee_id,
      document_name,
      date_recieved,
      date_added,
      date_modified,
      note,
    ]);
    res.status(200).send(`Added new document "${document_name}"`);
  },

  view: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");
    const document = await db.document_view([id]);
    res.status(200).send(document);
  },

  update: async (req, res) => {
    const { id } = req.params;
    const {
      document_name,
      date_recieved,
      date_added,
      date_modified,
      note,
    } = req.body;
    const db = req.app.get("db");
    await db.document_update([
      id,
      document_name,
      date_recieved,
      date_added,
      date_modified,
      note,
    ]);
    res.status(200).send(`Updated document id: ${id}`);
  },

  delete: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");
    await db.document_delete([id]);
    res.status(200).send(`Deleted post id: ${id}`);
  },
};
