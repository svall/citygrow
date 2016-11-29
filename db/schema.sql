BEGIN;

DROP TABLE IF EXISTS gardens;
DROP TABLE IF EXISTS quadrants;
DROP TABLE IF EXISTS produce;
DROP TABLE IF EXISTS users;

CREATE TABLE gardens (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  zipcode VARCHAR NOT NULL,
  user_id INT
);

CREATE TABLE quadrants (
  id SERIAL PRIMARY KEY,
  garden_id INT NOT NULL,
  produce_id INT,
  user_id INT
);

CREATE TABLE produce (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  description VARCHAR
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  age VARCHAR,
  password VARCHAR NOT NULL
);

ALTER TABLE ONLY quadrants
    ADD CONSTRAINT quadrants_garden_id_fkey
    FOREIGN KEY (garden_id)
    REFERENCES gardens(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE;

ALTER TABLE ONLY quadrants
    ADD CONSTRAINT quadrants_produce_id_fkey
    FOREIGN KEY (produce_id)
    REFERENCES produce(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE;

ALTER TABLE ONLY quadrants
    ADD CONSTRAINT quadrants_user_id_fkey
    FOREIGN KEY (user_id)
    REFERENCES users(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE;

COMMIT;
