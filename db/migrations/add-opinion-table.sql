\c puppy_dev

DROP TABLE IF EXISTS opinions;

CREATE TABLE IF NOT EXISTS opinions (
  id SERIAL PRIMARY KEY,
  opinion VARCHAR
)
