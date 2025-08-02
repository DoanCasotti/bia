#!/bin/bash

# Configurar variáveis de ambiente para RDS
export DB_HOST="bia.cudy8a8a20uc.us-east-1.rds.amazonaws.com"
export DB_PORT="5432"
export DB_USER="postgres"
export DB_PWD="Vx0w9nGrCvU7t58HtWVu"

# Executar migrations
npx sequelize db:migrate
