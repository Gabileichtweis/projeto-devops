#!/bin/bash

echo "Iniciando deploy..."

docker-compose down

docker-compose build

docker-compose up -d

echo "Deploy concluído!"
