-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE associates IF EXISTS CASCADE;

CREATE TABLE associates (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  FIRST_NAME VARCHAR NOT NULL,
  LAST_NAME VARCHAR NOT NULL,
  EMAIL_ADDRESS VARCHAR NOT NULL,
  GENDER VARCHAR NOT NULL,
  IP_ADDRESS VARCHAR NOT NULL,
  );

  INSERT INTO associates (
  FIRST_NAME, LAST_NAME, EMAIL_ADDRESS, GENDER, IP_ADDRESS)
  VALUES
  ('Cissiee', 'Guilloneau', 'cguilloneau0@nydailynews.com',	'Female',	'221.97.206.117'),
  ('Fredek',	'Abethell',	'fabethell1@tripod.com',	'Male',	'164.161.222.88'),
  ('Florance',	'Emblen',	'femblen2@wp.com',	'Bigender',	'102.228.221.157'),
  ('Lock',	'MacGillavery',	'lmacgillavery3@themeforest.net',	'Male',	'236.48.178.28'),
  ('Agatha',	'Deinhardt',	'adeinhardt4@tuttocitta.it',	'Female', '18.108.16.10'),
  ('Raoul',	'Moakes',	'rmoakes5@auda.org.au',	'Male', '231.206.55.197'),
  ('Luis',	'Huggin',	'lhuggin6@psu.edu',	'Male',	'104.204.9.169'),
  ('Shelli',	'Tuppeny',	'stuppeny7@biblegateway.com',	'Female',	'121.15.227.82'),
  ('Caril',	'Courtonne',	'ccourtonne8@ft.com',	'Female',	'163.107.251.39'),
  ('Marje',	'Rock',	'mrock9@wp.com',	'Female',	'221.87.134.26'),
  ('Derek',	'Suston',	'dsustona@e-recht24.de',	'Bigender',	'167.63.87.149'),
  ('Dalston',	'Comettoi', 'dcomettoib@bravesites.com',	'Male',	'165.243.252.126'),
  ('Dori',	'Mattis',	'dmattisc@miibeian.gov.cn',	'Female',	'171.160.95.246'),
  ('Danell',	'Road',	'droadd@issuu.com',	'Female',	'101.149.14.177'),
  ('Venita',	'Haythorn',	'vhaythorne@symantec.com',	'Female', '195.238.129.222');