-- migrate:up
CREATE TABLE groups(
    user_id integer REFERENCES users(user_id),
    group_name text
);


-- migrate:down
DROP TABLE groups;

