'use server'

import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = 'UNScoreTool';
const collectionName = 'AllPlayerData';

let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    const client = new MongoClient(process.env.MONGODB_URI);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  const client = new MongoClient(process.env.MONGODB_URI);
  clientPromise = client.connect();
}

export async function fetchData() {
    try {
        const client = await clientPromise;
        const database = client.db(dbName);
        const collection = database.collection(collectionName);

        const rawData = await collection.find({}).toArray();
        
        if (!rawData || rawData.length === 0) {
            console.log('No data returned from MongoDB');
            return [];
        }

        // Convert MongoDB ObjectId to string
        const data = rawData.map(item => ({
            ...item,
            _id: item._id.toString(),
        }));

        // Just return the array of players directly
        return data.flatMap((item) => item.playerObjectsForUNDatabaseArray || []);

    } catch (error) {
        console.error('Error fetching data from MongoDB:', error);
        return [];
    }
}
