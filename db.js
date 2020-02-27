const Sequelize = require("sequelize");

const databaseUrl = "postgres://postgres:secret@localhost:5432/postgres";

const db = new Sequelize(databaseUrl);

db.sync()
  .then(() =>
    console.log(
      "Starport initialized. High intensity Conduction Crystals Aligned, Database Live!"
    )
  )
  .catch(console.error);

module.exports = db;
