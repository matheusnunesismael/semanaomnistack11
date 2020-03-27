const express = require('express');
const routes  = require('./routes');
const cors = require('cors');

const app = express();

app.use(express.json());//fazer o express entender o formato json dentro da body
app.use(cors());
app.use(routes);

app.listen(3333);