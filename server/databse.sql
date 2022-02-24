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

INSERT INTO dogs VALUES (4, 'Andy Warhowl', 'Pug', 'senior', 'small', 'no', 'yes', 'yes', 'I am a 9 year-old pug. I am good with dogs and cats but I would prefer a home without children', 'Barks and Recreation', 'My favorite snack is..', 'Pupcorn');

INSERT INTO dogs VALUES (5, 'Chewbarka', 'Rottweiler', 'senior', 'large', 'yes', 'no', 'no', 'I am a 10 year-old rotweiller. I get along well with humans of all ages but I should be kept on a leash when around other dogs. No homes with cats please.', 'Barkingham Palace', 'I want the world to know..', 'Small dogs are re-pug-nant');

INSERT INTO dogs VALUES (6, 'Fuzz Aldrin', 'Basset Hound', 'puppy', 'medium', 'yes', 'yes', 'yes', 'I am a 10 month-old Basset Hound. I get along well with humans of all ages, dogs, and cats', 'Jurassic Bark', 'I want the world to know..', 'You would be fur-tunate to have me in your life');

INSERT INTO dogs VALUES (7, 'Hairy Paw-ter', 'Bernese Mountain Dog', 'adult', 'large', 'yes', 'yes', 'yes', 'I am a 2 year-old Bernese Mountain Dog. I get along well with humans of all ages, dogs, and cats', 'Barks and Recreation', 'Wise words from me..', 'Always remain paws-itive');

INSERT INTO dogs VALUES (8, 'Indiana Bones', 'Yorkie', 'adult', 'small', 'yes', 'yes', 'yes', 'I am a 4 year-old Yorkie. I get along well with humans of all ages, dogs, and cats', 'Jurassic Bark', 'Wise words from me..', 'Don’t bite the hound that feeds you');

INSERT INTO dogs VALUES (9, 'Lick Jagger', 'Dobermann', 'puppy', 'large', 'yes', 'yes', 'no', 'I am a 4 month-old Dobermann. I get along well with kids and other dogs, but I do not enjoy the company of cats', 'Barks and Recreation', 'Wise words from me..', 'Don’t bite the hound that feeds you');

INSERT INTO dogs VALUES (10, 'Snarls Barkley', 'Dachshund', 'adult', 'small', 'yes', 'yes', 'no', 'I am a 2 year-old Dachshund. I get along well with kids and other dogs, but I do not enjoy the company of cats', 'Jurassic Bark', 'Wise words from me..', 'Next time you take your dog out to the lake, bring a doggie paddle with you');

INSERT INTO dogs VALUES (11, 'Mutt Damon', 'Vizsla', 'senior', 'medium', 'yes', 'no', 'yes', 'I am a 9 year-old Vizsla. I get along well with kids and other pets, but I do not enjoy the company of other dogs', 'Jurassic Bark', 'A fact about me..', 'I can be a little "Ruff" around the edges');