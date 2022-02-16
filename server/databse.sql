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


INSERT INTO dogs VALUES (2, 'Bark Obama', 'Australian Shepherd', 'adult', 'medium', 'yes', 'yes', 'no', 'I am a 3 year-old Autralian Shepherd who loves kids and other dogs, but I do not enjoy the company of cats', 'Barkingham Palace', 'My favorite band is...', 'The Beagles');

INSERT INTO dogs VALUES (3, 'William Shakes-paw', 'Miniature Poodle', 'puppy', 'small', 'yes', 'yes', 'yes', 'I am a 5 month-old Miniature Poodle who loves everyone - kids, dogs and other pets', 'Barkingham Palace', 'My favorite Pink Floyd album is..', 'Bark Side of the Moon');