import express  from 'express'; //1
import dotenv from 'dotenv'; //7 

import cors from 'cors'; //13
import Connection from './database/db.js'; //5
import Router from './routes/route.js'; //11
import bodyParser from 'body-parser'; //15

dotenv.config(); //8

const app = express(); //2 initialise express as a function

app.use(cors()); //14
app.use(bodyParser.json({extended : true})); //16
app.use(bodyParser.urlencoded({extended : true})); // 17
app.use('/',Router);  //12


const PORT =  8000; //3

app.listen(PORT, () => console.log(`server is running successfully on port ${PORT}`)) //4

const USERNAME = process.env.DB_USERNAME; //9
const PASSWORD = process.env.DB_PASSWORD; //10

// const URL = process.env.MONGODB_URI ||  `mongodb://${USERNAME}:${PASSWORD}@ac-muvnowi-shard-00-00.fldaq51.mongodb.net:27017,ac-muvnowi-shard-00-01.fldaq51.mongodb.net:27017,ac-muvnowi-shard-00-02.fldaq51.mongodb.net:27017/?ssl=true&replicaSet=atlas-syr75w-shard-0&authSource=admin&retryWrites=true&w=majority`;

Connection(USERNAME,PASSWORD); //6