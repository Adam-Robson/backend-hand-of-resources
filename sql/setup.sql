DROP TABLE IF EXISTS associates CASCADE;
DROP TABLE IF EXISTS candidates CASCADE;
DROP TABLE IF EXISTS pets CASCADE;
DROP TABLE IF EXISTS newbies CASCADE;
DROP TABLE IF EXISTS bugs CASCADE;

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
  DOB INT8 NOT NULL
  );

CREATE TABLE pets (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  FIRST_NAME VARCHAR NOT NULL,
  LAST_NAME VARCHAR NOT NULL,
  KIND VARCHAR NOT NULL,
  VARIETY VARCHAR NOT NULL,
  NICKNAME VARCHAR NOT NULL
  );

CREATE TABLE newbies (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  FIRST_NAME VARCHAR NOT NULL,
  LAST_NAME VARCHAR NOT NULL,
  EMAIL_ADDRESS VARCHAR NOT NULL,
  GENDER VARCHAR NOT NULL,
  IP_ADDRESS VARCHAR NOT NULL
  );

CREATE TABLE bugs (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  FIRST_NAME VARCHAR NOT NULL,
  LAST_NAME VARCHAR NOT NULL,
  KIND VARCHAR NOT NULL,
  AGE INTEGER NOT NULL
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
('Teddy',	'Officer', 'tofficer@amazon.de',	'Female', '19600105'),
('Annabella',	'Rowbottom',	'arowbottomg@cnet.com',	'Female',	'19830205'),
('Bendite',	'Pocknell',	'bpocknellh@hhs.gov',	'Bigender',	'19770831'),
('Estell',	'Sproston',	'esprostoni@nytimes.com',	'Agnostic', '19671212'),
('Karon',	'Conichie',	'kconichiej@alibaba.com',	'Female', '19881119'),
('Dion',	'Trusty',	'dtrustyk@globo.com',	'Male',	'19830505'),
('Corina',	'Andreotti',	'candreottil@scribd.com',	'Bigender', '19790911'),
('Ileana',	'Deniskevich',	'ideniskevichm@ihg.com',	'Female', '19550412'),
('Corella',	'Ambrosi',	'cambrosin@free.fr',	'Bigender', '19880630'),
('Urbano',	'O&apos;Reagan',	'uoreagano@phoca.cz',	'Confused & OK with that', '19841016');

INSERT INTO pets (
FIRST_NAME, LAST_NAME, KIND, VARIETY, NICKNAME)
VALUES
('Viviana',	'Coorington', 'dog', 'cocker-spanial', 'Bubble'),
('Florenza',	'Gehrts', 'cat', 'ragdoll', 'Lori'),
('Kassia',	'Philipeau', 'gerbil', 'psammomys', 'Chirp'),
('Mayer',	'Fitzsymons', 'goldfish', 'shubunkin', 'jeffe'),
('Jyoti',	'Doyley', 'ferret', 'siamese', 'yota');

INSERT INTO newbies (
FIRST_NAME, LAST_NAME, EMAIL_ADDRESS, GENDER, IP_ADDRESS)
VALUES
('Darcie','Jorden','djordeny@sakura.ne.jp','Female','80.6.214.168'),
('Saudra','Nelligan','snelliganz@home.pl','Female','29.27.16.211'),
('Blondy','Gligorijevic','bgligorijevic10@bloglines.com','Female','74.31.105.230'),
('Kinny','Murrells','kmurrells11@microsoft.com','Male','212.51.131.39'),
('Ignacius','Comben','icomben12@pagesperso-orange.fr','Polygender','69.126.250.83'),
('Jordanna','Bassingham','jbassingham13@pbs.org','Female','235.178.173.5'),
('Katherina','Greenslade','kgreenslade14@oracle.com','Female','108.210.6.96'), ('Ivie','Overstone','ioverstone15@bandcamp.com','Female','159.54.191.250'),
('Giles','Shaylor','gshaylor16@mlb.com','Male','253.190.67.65'),
('Else','Lutman','elutman17@nih.gov','Female','128.146.244.207'),
('Herby','Ibbitt','hibbitt18@accuweather.com','Male','149.49.112.55');

INSERT INTO bugs (
FIRST_NAME, LAST_NAME, KIND, AGE)
VALUES
('Benjamin', 'Pallet', 'Bed Bug', 128),
('Kathy', 'Rochfordt', 'Cockaroach', 22),
('Horace', 'Von Circles', 'House Fly', 3),
('Larry', 'Foliclesdotter', 'Lice', 12),
('Manny', 'Pharasitee', 'Mosquitoe', 33);
