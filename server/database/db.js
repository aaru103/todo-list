import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

 const Connection = () => {
    const MONGODB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-dbekl62-shard-00-00.inwpccw.mongodb.net:27017,ac-dbekl62-shard-00-01.inwpccw.mongodb.net:27017,ac-dbekl62-shard-00-02.inwpccw.mongodb.net:27017/?ssl=true&replicaSet=atlas-14ffyu-shard-0&authSource=admin&retryWrites=true&w=majority`;
    mongoose.connect(MONGODB_URI, {useNewUrlParser: true});
    mongoose.connection.on('connected',()=>{
        console.log('Mongoose Connected');
    })
    mongoose.connection.on('disconnected',()=>{
        console.log('Mongoose Disconnected');
    })
    mongoose.connection.on('error',()=>
    {
        console.log('Mongoose Error');
    })
}

export default Connection;