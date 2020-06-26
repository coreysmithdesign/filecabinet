module.exports = {
  list: async (req, res) => {
    const db = req.app.get("db");
    const employees = await db.employee_list();
    res.status(200).send(employees);
  },

  add: async (req, res) => {
    const {
      user_id,
      employee_name,
      position,
      department,
      employment_status,
      current_wage,
      pto_level,
      citizenship,
      drivers_license_number,
      drivers_license_state,
      phone,
      email,
      address,
      irs_marital_status,
      irs_allowances,
      irs_withheld,
    } = req.body;
    const db = req.app.get("db");
    await db.employee_add([
      user_id,
      employee_name,
      position,
      department,
      employment_status,
      current_wage,
      pto_level,
      citizenship,
      drivers_license_number,
      drivers_license_state,
      phone,
      email,
      address,
      irs_marital_status,
      irs_allowances,
      irs_withheld,
    ]);
    res.status(200).send(`Added new employee "${employee_name}"`);
  },

  view: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");
    const employee = await db.employee_view([id]);
    res.status(200).send(employee);
  },

  view_documents: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");
    const employee_docs = await db.employee_document_list([id]);
    res.status(200).send(employee_docs);
  },

  update: async (req, res) => {
    const { id } = req.params;
    const {
      employee_name,
      position,
      department,
      employment_status,
      current_wage,
      pto_level,
      citizenship,
      drivers_license_number,
      drivers_license_state,
      phone,
      email,
      address,
      irs_marital_status,
      irs_allowances,
      irs_withheld,
    } = req.body;
    const db = req.app.get("db");
    await db.employee_update([
      id,
      employee_name,
      position,
      department,
      employment_status,
      current_wage,
      pto_level,
      citizenship,
      drivers_license_number,
      drivers_license_state,
      phone,
      email,
      address,
      irs_marital_status,
      irs_allowances,
      irs_withheld,
    ]);
    res.status(200).send(`Updated employee id: ${id}`);
  },

  delete: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");
    await db.employee_delete([id]);
    res.status(200).send(`Deleted employee id: ${id}`);
  },
};
