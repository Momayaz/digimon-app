DROP TABLE IF EXISTS toy;

CREATE TABLE toy(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(225),
    img VARCHAR(225),
    level VARCHAR(225)
);