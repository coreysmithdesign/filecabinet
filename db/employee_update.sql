update
  employees
set 
  employee_name = $2,
  position = $3,
  department = $4,
  employment_status = $5,
  date_of_hire = $6,
  date_of_separation = $7,
  current_wage = $8,
  pto_level = $9,
  birth_date = $10,
  citizenship = $11,
  drivers_license_number = $12,
  drivers_license_state = $13,
  drivers_license_expire_date = $14,
  phone = $15,
  email = $16,
  address = $17,
  irs_marital_status = $18,
  irs_allowances = $19,
  irs_withheld = $20
where
  id = $1;