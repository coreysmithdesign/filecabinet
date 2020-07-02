select d.document_id, d.document_name, d.note, e.employee_id, e.employee_name from documents d
join employees e on e.employee_id = d.employee_id
order by document_id desc;