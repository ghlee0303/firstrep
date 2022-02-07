const express = require("express");

const app = express();
const { sequelize } = require('./models'); // db.sequelize

sequelize.sync({ force: false })
    .then(() => {
        console.log('데이터베이스 연결됨.');
    }).catch((err) => {
        console.error(err);
    });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("Hello World");
});
  
app.listen(80, () => console.log("port open"));