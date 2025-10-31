const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 6001;

//for env file
require("dotenv").config();
console.log(process.env.DB_USER);

//middleware
app.use(cors());
app.use(express.json());

//mongodb config

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.rqsbzlg.mongodb.net/?retryWrites=true&w=majority&appName=Cluste`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

//main func
async function run() {
  try {
    await client.connect();

    //database and collection

    const menuCollections = client.db("foodyard").collection("menus");
    const cartCollections = client.db("foodyard").collection("cartItems");

      //all menu items operations
      app.get('/menu', async (req, res) => {
          const result = await menuCollections.find().toArray();
          res.send(result)
      })
      
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir); //running database

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
