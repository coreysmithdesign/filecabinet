insert into documents (
  user_id, employee_id, document_name, date_recieved, date_added, date_modified, note
) values (
  $1, $2, $3, $4, $5, $6, $7
);

select * from documents;