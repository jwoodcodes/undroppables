import { MongoClient } from "mongodb";

export async function POST(request) {
  const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    // Parse the request body
    const { data } = await request.json();

    if (!data) {
      return new Response(
        JSON.stringify({ message: "No data provided" }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    await client.connect();
    const database = client.db("projectionsBuilder");
    const collection = database.collection("allPlayersData");

    await collection.insertOne({ data });

    return new Response(
      JSON.stringify({ message: "Data saved successfully!" }),
      {
        status: 201,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Database error:', error);
    return new Response(
      JSON.stringify({ message: "Something went wrong!", error: error.message }),
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

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { data } = req.body;

    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    try {
      await client.connect();
      const database = client.db("projectionsBuilder"); // Choose a name for your database
      const collection = database.collection("allPlayersData"); // Choose a name for your collection

      await collection.insertOne({ data });

      res.status(201).json({ message: "Data saved successfully!" });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong!" });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: "Method not allowed!" });
  }
}