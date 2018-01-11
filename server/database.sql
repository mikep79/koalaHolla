CREATE DATABASE koala_holla;

CREATE TABLE koalas (
    id SERIAL PRIMARY KEY,
    name VARCHAR(10) UNIQUE,
    age VARCHAR(10), 
    gender VARCHAR(1), 
    readyForTransfer VARCHAR(1), 
    notes VARCHAR(200)
);

INSERT INTO koalas 
    ( name, age, gender, readyForTransfer, notes)
    VALUES ('Scotty', '4', 'M', 'Y', 'Born in Guatemala');