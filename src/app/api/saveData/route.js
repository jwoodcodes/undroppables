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