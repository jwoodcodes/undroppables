// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export async function GET() {
//     try {
//         const articles = await prisma.article.findMany(); // Fetch articles from the database
//         return new Response(JSON.stringify(articles), { status: 200 }); // Send articles as JSON response
//     } catch (error) {
//         return new Response(JSON.stringify({ error: 'Failed to fetch articles' }), { status: 500 });
//     } finally {
//         await prisma.$disconnect(); // Disconnect Prisma Client
//     }
// }