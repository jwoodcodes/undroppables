"use server";
import prisma from "../../../lib/prisma";

export async function GET() {
  try {
    const allData = await prisma.allPlayerData.findMany();

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
  }
}