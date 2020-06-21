module.exports = {
  list: async (req, res) => {
    const db = req.app.get("db");
    const businesses = await db.business_list();
    res.status(200).send(businesses);
  },

  add: async (req, res) => {
    const { user_id, business_name, phone, address } = req.body;
    const db = req.app.get("db");
    await db.business_add([user_id, business_name, phone, address]);
    res.status(200).send(`Added new business "${business_name}"`);
  },

  view: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");
    const business = await db.business_view([id]);
    res.status(200).send(business);
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { business_name, phone, address } = req.body;
    const db = req.app.get("db");
    await db.business_update([id, business_name, phone, address]);
    res.status(200).send(`Updated business id: ${id}`);
  },

  delete: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");
    await db.business_delete([id]);
    res.status(200).send(`Deleted business id: ${id}`);
  },
};
