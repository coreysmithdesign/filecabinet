select d.document_name, d.document_url, d.note, e.employee_id, e.employee_name from documents d
join employees e on d.employee_id = e.employee_id
where d.document_id = $1;