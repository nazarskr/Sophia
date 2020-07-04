const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const homeRoutes = require('./backend/routes/home');
const aboutRoutes = require('./backend/routes/about');
const videosRoutes = require('./backend/routes/videos');
const scheduleRoutes = require('./backend/routes/schedule');
const contactRoutes = require('./backend/routes/contact');

const keys = require('./backend/keys');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS'
    );
    next();
});

app.use('/home', homeRoutes);
app.use('/about', aboutRoutes);
app.use('/videos', videosRoutes);
app.use('/schedule', scheduleRoutes);
app.use('/contact', contactRoutes);

async function start() {
    try {
        await mongoose.connect(keys.MONGODB_URI, {
                        useNewUrlParser: true,
                        useUnifiedTopology: true,
                        useFindAndModify: false
        });
        console.log('Connected to db');
        app.listen(PORT ,() => {
            console.log(`Server is running on port ${PORT}`);
        })
    } catch(e) {
        console.log(e);
    }
}

start();