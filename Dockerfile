FROM texlive/texlive:latest

WORKDIR /app

# Install texlive
RUN apt-get update \
  && apt-get install -y nodejs npm \
  # remove useless files from the current layer
  && rm -rf /var/lib/apt/lists/* \
  && rm -rf /var/lib/apt/lists.d/* \
  && apt-get autoremove \
  && apt-get clean \
  && apt-get autoclean

COPY ./latex /latex

RUN /latex/update-tlmgr-latest.sh

RUN /latex/install.sh

COPY backend/ .

RUN mkdir -p public

RUN npm install

ENV PUBLICDIR=/app/public
ENV LATEXDIR=/latex

CMD ["npm", "start"]
