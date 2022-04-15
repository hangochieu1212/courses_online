const express = require('express');
const { engine } = require('express-handlebars');
const route = require('./routes/index.js');
const morgan = require('morgan');
const methodOverride = require('method-override');
const path = require('path');
const db = require('./config/db/index.js');
const app = express();
const port = 3000;
//kết nối tới database
db.connect();
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
//app.use(morgan('combined'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
route(app);
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: function (a, b) {
                return a + b;
            },
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
