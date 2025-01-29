import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';
import { writeFile } from 'fs/promises';
import path from 'path';
import fs from 'fs/promises';

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
const prisma = globalThis.prisma || new PrismaClient().$extends(withAccelerate());

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}

export async function POST(request) {
  console.log('API route hit - POST /api/articles');
  
  try {
    // Test database connection
    try {
      console.log('Testing database connection...');
      const count = await prisma.article.count();
      console.log('Current article count:', count);
      console.log('Database connection successful');
    } catch (dbConnError) {
      console.error('Database connection failed:', {
        error: dbConnError,
        message: dbConnError.message,
        code: dbConnError.code,
        meta: dbConnError.meta,
      });
      throw dbConnError;
    }

    // Parse form data
    const formData = await request.formData();
    const formDataObj = {
      title: formData.get('title'),
      author: formData.get('author'),
      filePath: formData.get('filePath'),
      hasImage: !!formData.get('image')
    };
    console.log('Received form data:', formDataObj);

    const { title, author, filePath } = formDataObj;
    const image = formData.get('image');

    // Validate required fields
    if (!title || !author || !filePath) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    let imageUrl = null;

    // Handle image upload if present
    if (image) {
      try {
        const uploadsDir = path.join(process.cwd(), 'public/uploads');
        await fs.mkdir(uploadsDir, { recursive: true });

        const bytes = new Uint8Array(16);
        crypto.getRandomValues(bytes);
        const filename = Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('') + 
                        path.extname(image.name);
        
        const buffer = Buffer.from(await image.arrayBuffer());
        await writeFile(path.join(uploadsDir, filename), buffer);
        imageUrl = `/uploads/${filename}`;
        console.log('Image processed successfully:', imageUrl);
      } catch (imageError) {
        console.error('Image processing error:', imageError);
        throw imageError;
      }
    }

    // Create article in database
    console.log('Creating article with data:', { title, author, filePath, imageUrl });
    const article = await prisma.article.create({
      data: {
        title,
        author,
        filePath,
        imageUrl,
      },
    });

    console.log('Article created successfully:', article);
    return new Response(
      JSON.stringify(article),
      {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('API route error:', {
      error,
      message: error.message,
      code: error.code,
      meta: error.meta,
      name: error.name,
      stack: error.stack,
    });

    // Check if it's a Prisma error
    if (error.name === 'PrismaClientInitializationError') {
      return new Response(
        JSON.stringify({ 
          error: 'Database initialization error', 
          message: error.message,
          code: error.code,
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    return new Response(
      JSON.stringify({ 
        error: 'Internal server error', 
        message: error.message,
        code: error.code,
        meta: error.meta,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
} 