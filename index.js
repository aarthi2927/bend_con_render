import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
// Middleware
const app = express();
app.use(express.json());
dotenv.config();
app.use(cors({
  origin: 'https://dynamic-arithmetic-028546.netlify.app'
 }));
console.log(process.env.MONGO_URL);
const PORT=process.env.PORT ;
app.use(express.json());
const MONGO_URL = process.env.MONGO_URL;
async function createConnection()
 {const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongo is connected ✌️😊");
  return client;}
  export const client = await createConnection();
  app.get('/home', (req, res) => {
    res.send('Hi all, welcome to the home page');
  });
  app.get('/nextpage', (req, res) => {
    res.send('Hi all, welcome to the next page');
  });
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
