const express = require('express');
const app = express()
const PORT = 3000;

app.get('/', (req, res) => {
    res.status(200).send('Hello Word')
})

app.get('/enildo', (req, res) => {
    res.status(200).send('enildo')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

