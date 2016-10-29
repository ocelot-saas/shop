FROM ubuntu:latest

MAINTAINER Horia Coman <horia141@gmail.com>

# Install global packages.

RUN apt-get update -y && \
    apt-get install -y --no-install-recommends \
            git \
            nodejs-legacy \
            npm && \
    apt-get clean

# Setup directory structure.

RUN mkdir /ocelot
RUN mkdir /ocelot/pack
RUN mkdir /ocelot/var

# Setup users and groups.

RUN groupadd ocelot && \
    useradd -ms /bin/bash -g ocelot ocelot

# Install package requirements.

COPY package.json /ocelot/pack/package.json
RUN cd /ocelot/pack && npm install --progress=false

# Copy source code.

COPY . /ocelot/pack

# Setup the runtime environment for the application.

ENV ENV LOCAL
ENV ADDRESS 0.0.0.0
ENV PORT 10000

RUN chown -R ocelot:ocelot /ocelot
VOLUME ["/ocelot/pack/src"]
WORKDIR /ocelot/pack
EXPOSE 10000
USER ocelot
ENTRYPOINT ["npm", "run", "serve"]
