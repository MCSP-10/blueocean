-- migrate:up
CREATE TABLE applications(
    application_id serial PRIMARY KEY,
    user_id integer REFERENCES users(user_id)s,
    company varchar(50),
    job_title varchar(50),
    deadline date,
    post_url text,
    description text,
    note text,
    status varchar(50),
    salary integer,
    location text
);


-- migrate:down
DROP TABlE applications;
