CREATE VIEW estatisticas_musicais AS (
  SELECT COUNT(*) as cancoes, COUNT(DISTINCT artist_id) as artistas, COUNT(DISTINCT album_id) as albuns
  FROM songs
);
