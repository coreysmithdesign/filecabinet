update
  employees
set 
  employee_name = $2,
  position = $3,
  department = $4,
  employment_status = $5,
  current_wage = $6,
  pto_level = $7,
  citizenship = $8,
  drivers_license_number = $9,
  drivers_license_state = $10,
  phone = $11,
  email = $12,
  address = $13,
  irs_marital_status = $14,
  irs_allowances = $15,
  irs_withheld = $16
where
  employee_id = $1;