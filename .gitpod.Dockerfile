FROM gitpod/workspace-postgres:latest
USER root
COPY ./postgres/postgresql.conf /etc/postgresql/12/main/postgresql.conf
COPY ./postgres/pg_hba.conf /etc/postgresql/12/main/pg_hba.conf

FROM gitpod/workspace-full-vnc
ENV CYPRESS_CACHE_FOLDER=/workspace/.cypress-cache

# Install Cypress dependencies.
RUN sudo apt-get update \
 && sudo DEBIAN_FRONTEND=noninteractive apt-get install -y \
   libgtk2.0-0 \
   libgtk-3-0 \
   libnotify-dev \
   libgconf-2-4 \
   libnss3 \
   libxss1 \
   libasound2 \
   libxtst6 \
   xauth \
   xvfb \
 && sudo rm -rf /var/lib/apt/lists/*
