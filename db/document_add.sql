insert into documents (
  user_id, employee_id, document_name, note
) values (
  $1, $2, $3, $4
)
returning *;