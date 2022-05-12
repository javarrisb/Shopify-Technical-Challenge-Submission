const express = require('express');
const routes = require('./routes');
// import the sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync the sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Now listening on port ${PORT}!`);
    });
});