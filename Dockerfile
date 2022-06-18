FROM ubuntu

COPY ./latex /latex

RUN apt update\
    && apt install texlive -y
RUN ls
RUN latex/install.sh
RUN latex/build.sh
