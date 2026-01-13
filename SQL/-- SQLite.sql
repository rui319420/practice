-- SQLite
CREATE TABLE game_scores (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  player_name TEXT,
  game_title TEXT,
  score INTEGER,
  played_at TEXT
);
INSERT INTO game_scores (player_name, game_title, score, played_at)
VALUES ('Ken', 'Tetris', 1200, '2024-01-01'),
  ('Yuki', 'Tetris', 800, '2024-01-02'),
  ('Ken', 'Mario', 5000, '2024-01-03'),
  ('Sato', 'Tetris', 4500, '2024-01-05'),
  ('Yuki', 'Mario', 3200, '2024-01-06'),
  ('Taro', 'Zelda', 200, '2024-01-10'),
  ('Ken', 'Tetris', 1500, '2024-01-12'),
  ('Sato', 'Mario', 4800, '2024-01-13');