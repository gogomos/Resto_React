import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { addArticle } from '../app/app'; // Adjust the path as necessary

const AddArticle = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [category, setCategory] = useState('');
  const [prepareInstructions, setPrepareInstructions] = useState('');
  const [recipe, setRecipe] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleImageUpload = (e) => {
    try {
      const file = e.target.files[0];
      setFile(file);
      setImageUrl(URL.createObjectURL(file));
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const articleData = {
        title,
        description,
        category,
        image: file,
        howToPrepare: prepareInstructions,
        recipe: recipe,
      };

      await addArticle(articleData);

      setTitle('');
      setDescription('');
      setCategory('');
      setFile(null);
      setImageUrl('');
      setPrepareInstructions('');
      setRecipe('');
      setSuccessMessage('Article added successfully');
      setErrorMessage('');
    } catch (error) {
      console.error('Error adding article:', error);
      setSuccessMessage('');
      setErrorMessage('Failed to add article. Please try again.');
    }
  };

  return (
    <div className="mt-4">
      <h2 className="mb-4">Add New Article</h2>
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </Form.Group>
        </Row>

        <Form.Group controlId="description" className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="prepareInstructions" className="mb-3">
          <Form.Label>How to Prepare this Meal</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter preparation instructions"
            value={prepareInstructions}
            onChange={(e) => setPrepareInstructions(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="recipe" className="mb-3">
          <Form.Label>Recipe</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter recipe"
            value={recipe}
            onChange={(e) => setRecipe(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="image" className="mb-3">
          <Form.Label>Upload Image</Form.Label>
          <Form.Control type="file" onChange={handleImageUpload} />
          {imageUrl && (
            <div className="mt-2">
              <h6>Uploaded Image Preview:</h6>
              <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%' }} />
            </div>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Article
        </Button>
      </Form>
    </div>
  );
};

export default AddArticle;
