DROP DATABASE IF EXISTS SpotifyClone;

CREATE DATABASE SpotifyClone;

USE SpotifyClone;

CREATE TABLE plans(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(20, 2) NOT NULL,
  created_at DATETIME DEFAULT NOW(),
  updated_at DATETIME DEFAULT NOW(),
  CHECK (price >= 0)
) engine = InnoDB;

CREATE TABLE users(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  age INT NOT NULL,
  plan_id INT,
  created_at DATETIME DEFAULT NOW(),
  updated_at DATETIME DEFAULT NOW(),
  CHECK (age > 0),
  FOREIGN KEY (plan_id)
    REFERENCES plans(id)
    ON DELETE SET NULL
) engine = InnoDB;

CREATE TABLE artists(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  created_at DATETIME DEFAULT NOW(),
  updated_at DATETIME DEFAULT NOW()
) engine = InnoDB;

CREATE TABLE follows(
  PRIMARY KEY(user_id, artist_id),
  user_id INT NOT NULL,
  artist_id INT NOT NULL,
  created_at DATETIME DEFAULT NOW(),
  FOREIGN KEY (user_id)
    REFERENCES users(id)
    ON DELETE CASCADE,
  FOREIGN KEY (artist_id)
    REFERENCES artists(id)
    ON DELETE CASCADE
) engine = InnoDB;

CREATE TABLE albums(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  artist_id INT NOT NULL,
  created_at DATETIME DEFAULT NOW(),
  updated_at DATETIME DEFAULT NOW(),
  FOREIGN KEY (artist_id)
    REFERENCES artists(id)
    ON DELETE CASCADE
) engine = InnoDB;

CREATE TABLE songs(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  duration INT NOT NULL,
  artist_id INT NOT NULL,
  album_id INT,
  created_at DATETIME DEFAULT NOW(),
  updated_at DATETIME DEFAULT NOW(),
  FOREIGN KEY (artist_id)
    REFERENCES artists(id)
    ON DELETE CASCADE,
  FOREIGN KEY (album_id)
    REFERENCES albums(id)
    ON DELETE SET NULL
) engine = InnoDB;

CREATE TABLE song_plays(
  PRIMARY KEY(user_id, song_id),
  user_id INT NOT NULL,
  song_id INT NOT NULL,
  played_at DATETIME DEFAULT NOW(),
  FOREIGN KEY (song_id)
    REFERENCES songs(id)
    ON DELETE CASCADE,
  FOREIGN KEY (user_id)
    REFERENCES users(id)
    ON DELETE CASCADE
) engine = InnoDB;

INSERT INTO plans (name, price)
VALUES
  ('gratuito', '0'),
  ('familiar', '7.99'),
  ('universitário', '5.99');

INSERT INTO users (name, email, age, plan_id)
VALUES
  ('Thati', 'thati@gmail.com', 23, 1),
  ('Cintia', 'cintia@gmail.com', 35, 2),
  ('Bill', 'bill@gmail.com', 20, 3),
  ('Roger', 'roger@gmail.com', 45, 1);

INSERT INTO artists (name)
VALUES
  ('Walter Phoenix'),
  ('Peter Strong'),
  ('Lance Day'),
  ('Freedie Shannon');

INSERT INTO follows (user_id, artist_id)
VALUES
  (1, 1),
  (1, 3),
  (1, 4),
  (2, 1),
  (2, 3),
  (3, 2),
  (3, 1),
  (4, 4);

INSERT INTO albums (name, artist_id)
VALUES
  ('Envious', 1),
  ('Exuberant', 1),
  ('Hallowed Steam', 2),
  ('Incandescent', 3),
  ('Temporary Culture', 4);

INSERT INTO songs (name, duration, artist_id, album_id)
VALUES
  ('Soul For Us', 180, 1, 1),
  ('Reflections Of Magic', 240, 1, 1),
  ('Dance With Her Own', 240, 1, 1),
  ('Troubles Of My Inner Fire', 180, 1, 2),
  ('Time Fireworks', 175, 1, 2),
  ('Magic Circus', 180, 2, 3),
  ('Honey, So Do I', 186, 2, 3),
  ("Sweetie, Let\'s Go Wild", 180, 2, 3),
  ('She Knows', 197, 2, 3),
  ('Fantasy For Me', 197, 3, 4),
  ('Celebration Of More', 197, 3, 4),
  ('Rock His Everything', 197, 3, 4),
  ('Home Forever', 197, 3, 4),
  ('Diamond Power', 197, 3, 4),
  ("Honey, Let\'s Be Silly", 197, 3, 4),
  ('Thang Of Thunder', 197, 4, 5),
  ('Words Of Her Life', 197, 4, 5),
  ('Without My Streets', 197, 4, 5);

INSERT INTO song_plays (user_id, song_id)
VALUES
  (1, 1),
  (1, 6),
  (1, 14),
  (1, 16),
  (2, 13),
  (2, 17),
  (2, 2),
  (2, 15),
  (3, 4),
  (3, 16),
  (3, 6),
  (4, 3),
  (4, 18),
  (4, 11);
