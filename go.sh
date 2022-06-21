#!/bin/bash

echo "Starting..."

while getopts e: flag
do
    case "${flag}" in
        e) env=${OPTARG};;
    esac
done

if [ ${env} == "dev" ]; then
    echo "Running in dev mode"
    make build && make dev
else
    echo "Running in prod mode"
    make build && make run
fi
