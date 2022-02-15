CREATE DATABASE dog_finder;

CREATE TABLE dogs (
  dog_id SERIAL PRIMARY KEY NOT NULL,
  dog_name TEXT,
  breed TEXT,
  age TEXT,
  size TEXT,
  kids TEXT,
  dog_dogs TEXT,
  cats TEXT,
  bio TEXT,
  shelter TEXT,
  fact_title TEXT,
  fact_desc TEXT
);

INSERT INTO dogs VALUES (1, 'Sarah Jessica Barker', 'Lab', 'adult', 'large', 'yes', 'yes', 'yes', 'I am a 5 year-old lab who loves kids, other dogs, and gets along well with cats', 'Jurassic Bark', 'My favorite movie is...', 'Trans-fur-mers');