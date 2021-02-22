import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import productRoutes from './routes/products.js';
import adminRoutes from './routes/admin.js'

mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

const app = express();
const port = process.env.PORT || 5000;

//Middlewares
app.use(cors());
app.use(bodyParser.json( { limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded( { limit: "30mb", extended: true}));

//Import and use routes
app.use('/tuotteet', productRoutes);
app.use('/adminpanel', adminRoutes);

//Connect to Database
const DB_CONNECTION = 'mongodb+srv://testUser:5VAbPkH58KmuUXi7@cluster0.jnj5r.mongodb.net/TestDB?retryWrites=true&w=majority';
mongoose.connect(DB_CONNECTION);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Connected to the Database successfully');
})

//Listening to server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})