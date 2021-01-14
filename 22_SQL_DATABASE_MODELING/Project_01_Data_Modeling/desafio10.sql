USE SpotifyClone;
DELIMITER $$

CREATE FUNCTION quantidade_musicas_no_historico(user_id int)
RETURNS INT READS SQL DATA

BEGIN
  DECLARE songs_listened INT;

  SELECT COUNT(*)
  FROM SpotifyClone.song_plays
  WHERE SpotifyClone.song_plays.user_id = user_id INTO songs_listened;

  RETURN songs_listened;
END $$

DELIMITER ;
