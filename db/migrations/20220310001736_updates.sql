-- migrate:up
CREATE TABLE updates(
    update_id serial PRIMARY KEY,
    CONSTRAINT application_id_fkey 
    FOREIGN KEY (application_id) 
    REFERENCES applications(application_id) 
    DROP NO NULL ON DELETE CASCADE,
    body text,
    timestamp date
);


-- migrate:down
DROP TABLE updates;
