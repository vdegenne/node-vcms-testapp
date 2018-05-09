\i sql/uninstall.sql

\i sql/pre-install.sql
\connect pizzajerry

create extension pgcrypto;


\i sql/structure.sql
\i sql/data.sql
\i sql/post-data.sql
