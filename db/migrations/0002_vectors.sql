-- Vector embeddings table

CREATE TABLE embeddings (
  id TEXT PRIMARY KEY,
  vector FLOAT8[],
  metadata JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);
