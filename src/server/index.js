import express from 'express';
import fs from 'fs';

//React, ReactRouter, Redux imports
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

//Main component import
import  App from '../client/components/App';

//Redux store import
import store from '../shared/store';

import router from './routes/index';

const app = express();
app.use(express.static('public'));
app.use(express.static('images'));
app.use('/', router);

const files = fs.readdirSync('./public');

app.listen(2000);

app.get('/*', (req, res) => {
    const markup = renderToString(
        <Provider store={store}>
            <Router location={req.url} context={{}}>
                <App/>
            </Router>
        </Provider>
    );

    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title>Twitter clone</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <script src="/${files[0]}" defer></script>
            <link type="text/css" href="/${files[1]}" rel="stylesheet"/>
        </head>
        <body>
            <div id="root">${markup}</div>
        </body>
        </html>
    `);
});