-- migrate:up
CREATE TABLE opportunities(
    opportunity_id serial PRIMARY KEY,
    group_name text REFERENCES groups(group_name),
    company varchar(50),
    job_title varchar(50),
    deadline date,
    post_url varchar(512),
    description text,
    note text,
    status varchar(50),
    salary integer,
    location text
);


-- migrate:down
DROP TABLE opportunities;
