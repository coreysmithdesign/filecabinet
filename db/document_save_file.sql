update
  documents
set
  document_url = $2
where
  document_id = $1;