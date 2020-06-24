select d.id, d.document_name, d.note from documents d
join employees e on e.id = d.employee_id
where d.employee_id = $1;