CREATE TABLE comments(
    comment_id serial PRIMARY KEY,
    user_id integer REFERENCES users(user_id) ON DELETE CASCADE,
    application_id integer REFERENCES applications(application_id) ON DELETE CASCADE,
    body text,
    timestamp date
);