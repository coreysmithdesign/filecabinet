insert into employees (
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
  irs_withheld
) values (
  $1,
  $2,
  $3,
  $4,
  $5,
  $6,
  $7,
  $8,
  $9,
  $10,
  $11,
  $12,
  $13,
  $14,
  $15,
  $16
);

select * from employees;