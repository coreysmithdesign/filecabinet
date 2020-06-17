insert into users (
  username, password, email, full_name, business_name, is_business
) values (
  $1, $2, $3, $4, $5, $6
);

select
  * 
from
  users
where 
  username = $1;