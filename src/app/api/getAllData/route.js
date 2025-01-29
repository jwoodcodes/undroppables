"use server";
import { MongoClient } from "mongodb";

export async function GET() {
  const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const database = client.db("projectionsBuilder");
    const collection = database.collection("allPlayerData");
    const allData = await collection.find({}).toArray();

    return new Response(JSON.stringify(allData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Database error:', error);
    return new Response(
      JSON.stringify({ message: "Something went wrong!" }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } finally {
    await client.close();
  }
}