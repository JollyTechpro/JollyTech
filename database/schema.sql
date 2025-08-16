-- Minimal starter schema
CREATE TABLE IF NOT EXISTS bots (
  id SERIAL PRIMARY KEY,
  tenant_id VARCHAR(64),
  name VARCHAR(64) NOT NULL,
  broker VARCHAR(32) NOT NULL,
  api_key TEXT,
  api_secret TEXT,
  paper BOOLEAN DEFAULT TRUE,
  status VARCHAR(32) DEFAULT 'stopped'
);
