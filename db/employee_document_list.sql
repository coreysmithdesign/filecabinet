select d.document_id, d.document_name, d.note from documents d
join employees e on e.employee_id = d.employee_id
where d.employee_id = $1
order by document_id desc;