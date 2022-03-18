SELECT
application_id AS "id",
company, 
job_title AS "title",
deadline,
post_url AS "url",
description,
note,
status,
salary,
location 
FROM applications 
WHERE user_id=$(userId)
ORDER BY id;