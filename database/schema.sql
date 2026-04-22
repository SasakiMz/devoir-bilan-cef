CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE specialties (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category_id INT,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE artisans (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  specialty_id INT,
  location VARCHAR(255),
  rating FLOAT,
  email VARCHAR(255),
  website VARCHAR(255),
  top BOOLEAN,
  FOREIGN KEY (specialty_id) REFERENCES specialties(id)
);