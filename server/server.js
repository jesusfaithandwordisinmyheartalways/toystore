

const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const MongoDBSession = require('connect-mongo')
const session = require('express-session')
const helmet = require('helmet')




dotenv.config() // load the env variable

  
const app = express()
app.use(express.json())
app.use(helmet())


app.use(cors({ origin: 'http://localhost:3001' }))




mongoose.connect(process.env.MONGO_CONNECTION_URL)
.then(() => console.log('connected to the mongo db database'))
.catch((error) => console.error('failed to connect ', error))



// Schema for creating Product
const ToyProductSchema = mongoose.Schema({
    id: {type: Number, require:true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    price: {type: Number},
    new_price: {type: Number},
    date: {type: Date, default: Date.now },
    available: {type: Boolean, default: true },
    category:{type: String, required: true},
    clickCount: {type: Number, default: 0 }

})

    const ToyProductModel = mongoose.model('toystorecollection', ToyProductSchema)

    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave:false,
        saveUninitialized:false,
        store: MongoDBSession.create({
            mongoUrl: process.env.MONGO_CONNECTION_URL,
            collectionName: 'sessiondatacollection'
        }),
        cookie: {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 1000 * 60 * 60 * 24 * 7
        }
    }))





    if (!process.env.SESSION_SECRET) {
        throw new Error('SESSION_SECRET is not defined in .env');
    }



    





app.get('/allproducts', async(req, res) => {
    try {
         const AllToyProducts = await ToyProductModel.find({})
         console.log('all toy products data logged')
         res.send(AllToyProducts)

    }catch(error) {
        console.error('Toy Data Error fetching all products:', error);
        res.status(500).send('Error fetching all products');
    }
})




app.post('/allproducts', async(req, res) => {
         const { id } = req.body;
         if (!id) {
            return res.status(400).send(' Toy Product ID is required');
        }

        try {
             const ToyProduct = await ToyProductModel.findOne({ id })
             if(!ToyProduct) {
                return res.status(404).send('toy product not found')
             }

             ToyProduct.clickCount = (ToyProduct.clickCount || 0) + 1
             await ToyProduct.save()
             console.log(` Toy Product with ID ${id} updated successfully`);
             res.status(200).send(`Toy Product with ID ${id} updated successfully`);

        }catch(error) {
            console.error('Toy Error updating product:', error);
            res.status(500).send('Toy Error updating product');
        }


})




app.get('/relatedtoyproducts', async(req, res)=> {
        try {
            const toyRelatedCategories =  await ToyProductModel.distinct('category')
            res.status(200).json(toyRelatedCategories)
            

        }catch(error) {
            console.error('Error  toy fetching categories:', error);
            res.status(500).send('Error toy fetching categories');

        }
})



app.post('/relatedtoyproducts', async(req, res) => {
        const { category} = req.body;
        if(!category) {
            return res.status(400).send('toy category is required')
        }

        try {
            const toyRelatedProducts = await ToyProductModel.find({ category });
            if (toyRelatedProducts.length === 0) {
                return res.status(404).send('No toy  related products found');
            }

            console.log(`Toy Related products for category "${category}" fetched successfully`);
            res.status(200).json(toyRelatedProducts); //
        }catch(error) {
            console.error('Toy Error fetching related products:', error);
            res.status(500).send('Toy Error fetching related products');
        }

})





app.get('/', (req, res) => {
    res.send('default route')
})


// Default route for unmatched paths
app.use((req, res) => {
    res.status(404).send('Route not found');
});






const PORT_NUMBER = process.env.PORT || 3000;
app.listen((PORT_NUMBER), () => {
    console.log(`server is on the port: ${PORT_NUMBER}`)
})