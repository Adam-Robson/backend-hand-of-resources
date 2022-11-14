DROP TABLE IF EXISTS associates CASCADE;
DROP TABLE IF EXISTS candidates CASCADE;

CREATE TABLE associates (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  FIRST_NAME VARCHAR NOT NULL,
  LAST_NAME VARCHAR NOT NULL,
  EMAIL_ADDRESS VARCHAR NOT NULL,
  GENDER VARCHAR NOT NULL,
  IP_ADDRESS VARCHAR NOT NULL
  );

CREATE TABLE candidates (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  FIRST_NAME VARCHAR NOT NULL,
  LAST_NAME VARCHAR NOT NULL,
  EMAIL_ADDRESS VARCHAR NOT NULL,
  GENDER VARCHAR NOT NULL,
  DOB DATE NOT NULL
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

INSERT INTO candidates (
  FIRST_NAME, LAST_NAME, EMAIL_ADDRESS, GENDER, DOB)
  VALUES
('Teddy',	'Officer', 'tofficerf@amazon.de',	'Female', '1960-01-05'),
('Annabella',	'Rowbottom',	'arowbottomg@cnet.com',	'Female',	'1983-02-05'),
('Bendite',	'Pocknell',	'bpocknellh@hhs.gov',	'Bigender',	'1977-08-31'),
('Estell',	'Sproston',	'esprostoni@nytimes.com',	'Agnostic', '1967-12-12'),
('Karon',	'Conichie',	'kconichiej@alibaba.com',	'Female', '1988-11-19'),
('Dion',	'Trusty',	'dtrustyk@globo.com',	'Male',	'1983-05-05'),
('Corina',	'Andreotti',	'candreottil@scribd.com',	'Bigender', '1979-09-11'),
('Ileana',	'Deniskevich',	'ideniskevichm@ihg.com',	'Female', '1955-04-12'),
('Corella',	'Ambrosi',	'cambrosin@free.fr',	'Bigender', '1988-06-30'),
('Urbano',	'O&apos;Reagan',	'uoreagano@phoca.cz',	'Confused & OK with that', '1984-10-16');