const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(express.json());



//mongodb database connect here
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.v61q93t.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();

        const brandCollection = client.db("brandShopDB").collection("brands");
        const productCollection = client.db("brandShopDB").collection("products");
        const cartCollection = client.db("cartDB").collection("carts");

        //brand data

        app.get('/brands', async (req, res) => {
            const cursor = brandCollection.find();
            const result = await cursor.toArray(cursor);
            res.send(result);
        })


        app.post('/brands', async (req, res) => {
            const newBrand = req.body;
            console.log(newBrand);
            const result = await brandCollection.insertOne(newBrand);
            res.send(result);
        })


        // product data

        app.get('/products', async (req, res) => {
            const cursor = productCollection.find();
            const result = await cursor.toArray(cursor);
            res.send(result);
        })

        app.get("/products/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await productCollection.findOne(query)
            res.send(result)
        })


        app.get("/products/brand/:brand", async (req, res) => {
            const brand = req.params.brand;
            const query = { brand: brand }
            const cursor = productCollection.find(query);
            const result = await cursor.toArray();
            res.send(result)
        })

        app.post("/products", async (req, res) => {
            const newProduct = req.body;
            const result = await productCollection.insertOne(newProduct);
            res.send(result);
        })

        app.put("/products/:id", async(req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true};
            const updatedProduct = req.body;
            const product = {
                $set: {
                    name: updatedProduct.name,
                    brand: updatedProduct.brand,
                    type: updatedProduct.type,
                    price: updatedProduct.price,
                    description: updatedProduct.description,
                    rating: updatedProduct.rating,
                    photo: updatedProduct.photo                   
                }
            }
            const result = await productCollection.updateOne(filter, product, options);
            res.send(result);
        });


        // cart data

        app.get("/carts", async (req, res) => {
            const cursor = cartCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        });

        app.get("/carts/user/:email", async (req, res) => {
            const email = req.params.email;
            const query = { email: email }
            const cursor = cartCollection.find(query);
            const result = await cursor.toArray();
            res.send(result)
        })


        app.post("/carts", async (req, res) => {
            const newCart = req.body;
            const result = await cartCollection.insertOne(newCart);
            res.send(result);
        })

        app.delete("/carts/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await cartCollection.deleteOne(query)
            res.send(result)
        })




        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);



// server ta cholte ase kina eita amader bojar jonno
app.get("/", (req, res) => {
    res.send("Brand Shop server is runing")
})

app.listen(port, () => {
    console.log(`Brand-shop server is running on port: ${port}`)
})