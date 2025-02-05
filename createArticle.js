// createArticle.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const title = process.argv[2];
  const author = process.argv[3];
  const filePath = process.argv[4];
  const imageUrl = process.argv[5] || null; // Optional

  const newArticle = await prisma.article.create({
    data: {
      title,
      author,
      filePath,
      imageUrl,
    },
  });

  console.log('New Article Created:', newArticle);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


