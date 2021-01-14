USE SpotifyClone;

DELIMITER $$

CREATE TRIGGER trigger_usuario_delete
  AFTER DELETE ON users
  FOR EACH ROW
BEGIN
  SET @user_id = OLD.id;

  DELETE FROM follows WHERE user_id = @user_id;

  DELETE FROM song_plays WHERE user_id = @user_id;
END; $$

DELIMITER ;
