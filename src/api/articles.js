// src/pages/api/articles.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, author, filePath } = req.body;

    try {
      const newArticle = await prisma.document.create({
        data: {
          title,
          author,
          filePath,
        },
      });
      res.status(201).json(newArticle);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create article' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}