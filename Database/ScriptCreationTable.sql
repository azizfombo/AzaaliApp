CREATE SCHEMA IF NOT EXISTS Azaali;

CREATE TABLE IF NOT EXISTS Azaali.Roles
(
    idRoles
    BIGSERIAL
    PRIMARY
    KEY,
    libelle
    VARCHAR
(
    100
)
    );
CREATE TABLE IF NOT EXISTS Azaali.Utilisateurs
(
    email
    VARCHAR
(
    100
) PRIMARY KEY,
    nom VARCHAR
(
    100
),
    prenom VARCHAR
(
    100
),
    datenaiss DATE,
    motDePasse VARCHAR
(
    100
),
    idRoles BIGINT,
    FOREIGN KEY
(
    idRoles
) REFERENCES Azaali.Roles
(
    idRoles
)
    );

CREATE TABLE IF NOT EXISTS Azaali.CaracteristicHair
(
    email
    VARCHAR
(
    100
) PRIMARY KEY,
    humidite INT,
    UV INT,
    IQA INT
    );

-------Insertion des données tests------------

--Roles
INSERT INTO roles (libelle)
VALUES ('Administrateur');
INSERT INTO roles (libelle)
VALUES ('Utilisateur');

--Utilisateurs
INSERT INTO utilisateurs (nom, prenom, datenaiss, email, motDePasse, idRoles)
VALUES ('FOMBO', 'AZIZ', '2002-11-01', 'fomboaziz@yahoo.com', '0000', 1);

--caracteristicsHair
INSERT INTO caracteristichair
VALUES ('fomboaziz@yahoo.com', 80, 65, 95);
