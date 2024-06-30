import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ArticleDetails = () => {
  const location = useLocation();
  const { article } = location.state;

  return (
    <Container className="mt-6">
      <h1 className="mb-4">{article.title}</h1>
      
      <Card className="mb-4">
        <Card.Img variant="left" src={article.image} alt={article.title} style={{ maxWidth: '30%' }} />
        <Card.Body>
          <Card.Text className="mb-3">{article.description}</Card.Text>
          <Card.Text className="mb-3"><strong>Category:</strong> {article.category}</Card.Text>
        </Card.Body>
      </Card>

      {article.howToPrepare && (
        <Card className="mb-4">
          <Card.Body>
            <Card.Title>How to Prepare</Card.Title>
            <Card.Text>{article.howToPrepare}</Card.Text>
          </Card.Body>
        </Card>
      )}

      {article.recipe && (
        <Card className="mb-4">
          <Card.Body>
            <Card.Title>Recipe</Card.Title>
            <Card.Text>
              <pre>{article.recipe}</pre>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default ArticleDetails;
