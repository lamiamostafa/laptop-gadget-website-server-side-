const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello from Doctor uncle");

});

app.get('/product', (req, res) => {

})

app.listen(port, () => {
    console.log(`Doctors app listening on port ${port}`);
})