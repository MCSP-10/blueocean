SELECT
application_id AS "id",
company, 
job_title AS "jobTitle",
deadline,
post_url AS "jobUrl",
description,
status,
salary,
location 
FROM applications 
WHERE user_id=$(userId);