insert into users (
  username, password, email, full_name, business_name
) values (
  $1, $2, $3, $4, $5
);

select
  * 
from
  users
where 
  username = $1;