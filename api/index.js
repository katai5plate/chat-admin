const express = require("express");
const app = express();
const cors = require("cors");

const DB_CONF = require("../db-config.hide.json");

const _Sequelize = require("sequelize"); // vscode のインテリセンス対策
const { Sequelize } = _Sequelize;

const sequelize = new Sequelize(
  DB_CONF.db.name,
  DB_CONF.db.user,
  DB_CONF.db.pass,
  {
    dialect: "mysql"
  }
);

const tables = {
  posts: sequelize.define("posts", {
    id: {
      type: _Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true
    },
    username: {
      type: _Sequelize.CHAR(45),
      allowNull: true
    },
    comment: {
      type: _Sequelize.CHAR(500),
      allowNull: true
    },
    createdAt: {
      type: _Sequelize.DATE,
      allowNull: false
    },
    updatedAt: {
      type: _Sequelize.DATE,
      allowNull: false
    }
  })
};

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
app.use(cors());

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Expose-Headers", [
    "X-Total-Count",
    "Content-Range"
  ]);
  next();
});

app.get("/", function(req, res) {
  const data = [{ body: "hoge" }, { body: "huga" }];
  sendList(res, data);
});

app.get("/posts", function(req, res) {
  tables.posts.findAll().then(data => {
    console.log(req.query);
    res.setHeader("X-Total-Count", data.length);
    res.send(data);
  });
});

app.listen(DB_CONF.api.port, function() {
  console.log(`Example app listening on port ${DB_CONF.api.port}`);
  console.log(`http://localhost:${DB_CONF.api.port}/`);
});
