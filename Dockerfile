FROM postgres

COPY migrations/init-database.sql /docker-entrypoint-initdb.d/

ENV POSTGRES_DB test_pg_local

EXPOSE 5432