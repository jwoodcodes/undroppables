'use server'
import prisma from '../../../lib/prisma';

export async function fetchData() {
  try {
    const data = await prisma.uNScorePlayer.findMany();

    if (!data || data.length === 0) {
      console.log('No data returned from Postgres');
      return [];
    }

    // The original code did:
    // const data = rawData.map(item => ({ ...item, _id: item._id.toString() }));
    // return data.flatMap((item) => item.playerObjectsForUNDatabaseArray || []);

    // Our migration flattened this structure, so `data` is already the array of players.
    // We just need to return it.
    return data;

  } catch (error) {
    console.error('Error fetching data from Postgres:', error);
    return [];
  }
}
