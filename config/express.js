const express = require("express");
var cors = require("cors");
var path = require("path");
const config = require("config");
var bodyParser = require("body-parser");

module.exports = () => {
  const app = express();

  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set("port", process.env.PORT || config.get("server.port"));

  //Setando react
  app.use(express.static(path.join(__dirname, "../", "client", "build")));

  // parse request bodies (req.body)
  app.use(express.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use(cors());

  require("../api/routes/tarefas")(app);
  require("../api/routes/versao")(app);

  // Fallback para React Router - serve index.html para todas as rotas não-API
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../", "client", "build", "index.html"));
  });

  return app;
};
