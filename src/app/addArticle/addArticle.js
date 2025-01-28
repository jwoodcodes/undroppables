// src/app/addArticle/addArticle.js

import React, { useState } from 'react';

export default function AddArticle() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [filePath, setFilePath] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch('/api/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, author, filePath }),
    });

    if (response.ok) {
      // Handle successful submission (e.g., redirect or show a success message)
      console.log('Article added successfully');
    } else {
      // Handle error
      console.error('Failed to add article');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Author:
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          File Path:
          <input
            type="text"
            value={filePath}
            onChange={(e) => setFilePath(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
