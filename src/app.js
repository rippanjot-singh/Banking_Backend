const express = require('express');
const app = express();
const authrouter = require('./routes/auth.route');
const cookieParser = require('cookie-parser');
const accountrouter = require('./routes/account.routes')

app.use(express.json());
app.use(cookieParser())
app.use('/api/auth', authrouter)
app.use('/api/accounts', accountrouter)

module.exports = app;