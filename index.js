const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;
//middlewars
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jsfbg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const productCollection = client.db('manufacturer-website').collection('products');

        app.get('/product', async (req, res) => {
            const query = {};
            const cursor = productCollection.find(query);
            const products = await cursor.toArray();
            res.send(products);

        });
    }
    finally {

    }

}
run().catch(console.dir);
app.get('/', (req, res) => {
    res.send("Hello from Doctor uncle");

});

app.get('/product', (req, res) => {

})

app.listen(port, () => {
    console.log(`Doctors app listening on port ${port}`);
})