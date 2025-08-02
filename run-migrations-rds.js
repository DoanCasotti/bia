const { Sequelize } = require('sequelize');
const path = require('path');

// Configuração do banco RDS
const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'bia.cudy8a8a20uc.us-east-1.rds.amazonaws.com',
  port: 5432,
  username: 'postgres',
  password: 'Vx0w9nGrCvU7t58HtWVu',
  database: 'bia',
  logging: console.log
});

async function runMigrations() {
  try {
    console.log('Conectando ao banco RDS...');
    await sequelize.authenticate();
    console.log('Conexão estabelecida com sucesso!');

    // Importar e executar a migration manualmente
    const migration = require('./database/migrations/20210924000838-criar-tarefas.js');
    
    console.log('Executando migration: criar-tarefas...');
    await migration.up(sequelize.getQueryInterface(), Sequelize);
    console.log('Migration executada com sucesso!');

  } catch (error) {
    console.error('Erro ao executar migration:', error);
  } finally {
    await sequelize.close();
  }
}

runMigrations();
