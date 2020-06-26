update
  businesses
set 
  business_name = $2,
  phone = $3,
  address = $4
where
  business_id = $1;