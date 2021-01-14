USE SpotifyClone;
DELIMITER $$

CREATE PROCEDURE albuns_do_artista(IN artist_name VARCHAR(255))
BEGIN
  SELECT A.name AS artista, AB.name AS album
  FROM albums AS AB
    LEFT JOIN artists AS A
    on AB.artist_id = A.id
  WHERE A.name = artist_name
  ORDER BY AB.name ASC;
END $$

DELIMITER ;
