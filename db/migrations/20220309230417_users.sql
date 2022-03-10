-- migrate:up
CREATE TABLE users(
    user_id serial PRIMARY KEY,
    first varchar(50),
    last varchar(50),
    email text,
    password text,
    role varchar(20)
);


-- migrate:down
DROP TABLE users;
