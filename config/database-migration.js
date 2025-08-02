module.exports = {
  development: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PWD || "postgres",
    database: "bia",
    host: process.env.DB_HOST || "database",
    port: process.env.DB_PORT || 5432,
    dialect: "postgres",
    dialectOptions: process.env.DB_HOST && process.env.DB_HOST !== "database" ? {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    } : {},
  },
  production: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PWD || "postgres",
    database: "bia",
    host: process.env.DB_HOST || "database",
    port: process.env.DB_PORT || 5432,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
};
