module.exports = {
  list: async (req, res) => {
    const db = req.app.get("db");
    const documents = await db.document_list();
    res.status(200).send(documents);
  },

  add: async (req, res) => {
    const { user_id, employee_id, document_name, note } = req.body;
    const db = req.app.get("db");
    await db.document_add([user_id, employee_id, document_name, note]);
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
    const { document_name, employee_id, note } = req.body;
    console.log(id);
    const db = req.app.get("db");
    await db.document_update([id, document_name, employee_id, note]);
    res.status(200).send(`Updated document id: ${id}`);
  },

  save_file: async (req, res) => {
    const { id } = req.params;
    const { url } = req.body;
    const db = req.app.get("db");
    await db.document_save_file([id, url]);
    res.status(200).send(`Updated document id: ${id}`);
  },

  delete: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");
    await db.document_delete([id]);
    res.status(200).send(`Deleted post id: ${id}`);
  },
};
