insert into businesses (
  user_id,
  business_name,
  phone,
  address
) values (
  $1,
  $2,
  $3,
  $4
);

select * from businesses;