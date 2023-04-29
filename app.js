const express = require('express');

const { getNewExcel } = require('./controllers/excelForCrpt');

const PORT = 3000;

const app = express();

getNewExcel();

app.listen(PORT);
