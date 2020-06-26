update
  documents
set 
  document_name = $2,
  employee_id = $3,
  note = $4
where
  document_id = $1;