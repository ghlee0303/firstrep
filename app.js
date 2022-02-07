const express = require("express");
const nunjucks = require('nunjucks');
const IndexPage = require('./routers/index');

const app = express();
const { sequelize } = require('./models'); // db.sequelize

app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    watch: true
});

sequelize.sync({ force: false })
    .then(() => {
        console.log('데이터베이스 연결됨.');
    }).catch((err) => {
        console.error(err);
    });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/',IndexPage);

app.use((req, res, next) => {
    const error =  new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});
  
app.use((err, req, res, next) => {
    res.send(err);
});
  
app.listen(80, () => console.log("port open"));