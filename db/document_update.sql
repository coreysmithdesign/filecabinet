update
  documents
set 
  document_name = $2,
  date_recieved = $3,
  date_added = $4,
  date_modified = $5,
  note = $6
where
  id = $1;