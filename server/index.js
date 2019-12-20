require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')

//dotenv
const {DB_STRING} = process.env

//use our req, res
app.use(express.json())

//controllers
const {getProducts, getProduct, addProduct, updateProduct, deleteProduct} = require('./controller')

//db connection
massive(DB_STRING).then(db => {
    app.set('db', db)
    console.log('DB Connected!! Aw yiss')
})

// //endpoints
app.get('/api/products', getProducts)
app.get('/api/products/:id', getProduct)
app.post('/api/products', addProduct)
app.put('/api/products/:id', updateProduct)
app.delete('/api/products/:id', deleteProduct)


app.listen(5050, () => console.log(`Listening on port 5050`))