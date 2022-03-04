CREATE TABLE applications(
    application_id serial PRIMARY KEY,
    user_id integer REFERENCES users(user_id) ON DELETE CASCADE,
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
