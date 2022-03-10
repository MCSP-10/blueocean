-- migrate:up
CREATE TABLE groups(
    group_name text PRIMARY KEY,
    advisor_id integer REFERENCES users(user_id)
);


-- migrate:down
DROP TABLE groups;

