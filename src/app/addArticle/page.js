// src/app/addArticle/addArticle.js
'use client';

import React, { useState } from 'react';
import styles from './addArticle.module.css';

export default function AddArticle() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [filePath, setFilePath] = useState('');
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [showValidation, setShowValidation] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file type
      const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
      if (!validTypes.includes(file.type)) {
        alert('Please upload an image file (JPEG, PNG, GIF, or WebP)');
        return;
      }
      
      // Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }

      setImage(file);
      // Create preview URL
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleFilePathSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFilePath(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title || !author || !filePath) {
      setShowValidation(true);
      return;
    }
    
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('filePath', filePath);
    if (image) {
      formData.append('image', image);
    }

    try {
      console.log('Sending request to /api/articles');
      const response = await fetch('/api/articles', {
        method: 'POST',
        body: formData,
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));

      // Get the raw response text first
      const rawText = await response.text();
      console.log('Raw response text:', rawText.substring(0, 500)); // Log first 500 chars

      let data;
      try {
        data = JSON.parse(rawText);
        console.log('Parsed JSON data:', data);
      } catch (parseError) {
        console.error('Failed to parse JSON:', parseError);
        console.error('Raw response was:', rawText.substring(0, 500));
        throw new Error('Server returned invalid JSON response');
      }

      if (response.ok) {
        setTitle('');
        setAuthor('');
        setFilePath('');
        setImage(null);
        setPreviewUrl('');
        setShowValidation(false);
        alert('Article added successfully');
      } else {
        throw new Error(data.error || 'Failed to add article');
      }
    } catch (error) {
      console.error('Failed to add article:', error);
      alert(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Add New Article</h1>
      <form onSubmit={handleSubmit} className={styles.form} noValidate>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className={`${styles.input} ${showValidation && !title ? styles.inputError : ''}`}
              title="Please enter a title"
            />
            {showValidation && !title && (
              <span className={styles.errorMessage}>Title is required</span>
            )}
          </label>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Author:
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
              className={`${styles.input} ${showValidation && !author ? styles.inputError : ''}`}
              title="Please enter an author"
            />
            {showValidation && !author && (
              <span className={styles.errorMessage}>Author is required</span>
            )}
          </label>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            File Path:
            <div className={styles.filePathContainer}>
              <input
                type="text"
                value={filePath}
                onChange={(e) => setFilePath(e.target.value)}
                required
                className={`${styles.input} ${styles.filePathInput} ${showValidation && !filePath ? styles.inputError : ''}`}
                title="Please select or enter a file path"
              />
              <label className={styles.fileSelectButton}>
                Choose File
                <input
                  type="file"
                  onChange={handleFilePathSelect}
                  className={styles.hiddenFileInput}
                />
              </label>
            </div>
            {showValidation && !filePath && (
              <span className={styles.errorMessage}>File path is required</span>
            )}
          </label>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Image:
            <div className={styles.filePathContainer}>
              <input
                type="text"
                value={image ? image.name : ''}
                readOnly
                placeholder="No file selected"
                className={`${styles.input} ${styles.filePathInput}`}
              />
              <label className={styles.fileSelectButton}>
                Choose File
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/gif,image/webp"
                  onChange={handleImageChange}
                  className={styles.hiddenFileInput}
                />
              </label>
            </div>
            {previewUrl && (
              <div className={styles.imagePreview}>
                <img src={previewUrl} alt="Preview" />
              </div>
            )}
          </label>
        </div>
        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </div>
  );
}
