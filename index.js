import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
// Middleware
const app = express();
app.use(cors({
  origin: 'https://dynamic-arithmetic-028546.netlify.app'
 }));
app.use(express.json());
dotenv.config();
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
  app.get('https://dynamic-arithmetic-028546.netlify.app/home', (req, res) => {
    res.send('Hi all, welcome to the home page');
  });
  app.get('https://dynamic-arithmetic-028546.netlify.app/nextpage', (req, res) => {
    res.send('Hi all, welcome to the next page');
  });
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
