// import React, { useEffect, useState } from 'react';
// import { Card, Button, Row, Col, Container } from 'react-bootstrap';
// import { getAllArticles, getLatestArticles, getArticles } from '../app/app';

// const Home = () => {
//   const [articles, setArticles] = useState([]);
//   const [latestArticles, setLatestArticles] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredArticles, setFilteredArticles] = useState([]);
//   const [searchedArticles, setSearchedArticles] = useState([]);

//   useEffect(() => {
//     // Fetch all articles
//     getAllArticles()
//       .then(response => {
//         const fetchedArticles = response.data;
//         setArticles(fetchedArticles);
//         setFilteredArticles(fetchedArticles); // Initialize filtered articles with all articles
//         setCategories(['All', ...new Set(fetchedArticles.map(article => article.category))]);
//       })
//       .catch(error => console.log(error));

//     // Fetch latest articles
//     getLatestArticles(4)
//       .then(response => setLatestArticles(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   // Handle category selection
//   const handleCategorySelect = (category) => {
//     setSelectedCategory(category);
//     filterArticles(category, searchTerm);
//   };

//   // Handle search input change
//   const handleSearchInputChange = (event) => {
//     const { value } = event.target;
//     setSearchTerm(value);
//     searchArticles(value);
//   };

//   // Filter articles based on category
//   const filterArticles = (category, searchTerm) => {
//     let filtered = articles;

//     if (category !== 'All') {
//       filtered = filtered.filter(article => article.category === category);
//     }

//     setFilteredArticles(filtered);
//   };

//   // Search articles based on title
//   const searchArticles = (searchTerm) => {
//     if (searchTerm.trim() === '') {
//       setSearchedArticles([]);
//       return;
//     }

//     const searched = articles.filter(article =>
//       article.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     setSearchedArticles(searched);
//   };

//   return (
//     <Container>
//       {/* Search bar */}
//       <section className="mb-2">
//         <h2>Search Articles by Title</h2>
//         <div className="mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Search by title..."
//             value={searchTerm}
//             onChange={handleSearchInputChange}
//           />
//         </div>
//         {/* Display searched articles */}
//         {searchedArticles.length > 0 && (
//           <div className="mb-4">
//             <h3>Search Results</h3>
//             <Row xs={1} md={2} lg={3} className="g-4">
//               {searchedArticles.map(article => (
//                 <Col key={article.id}>
//                   <Card className="h-100">
//                     <Card.Img variant="top" src={article.image} style={{ height: '200px', objectFit: 'cover' }} />
//                     <Card.Body>
//                       <Card.Title>{article.title}</Card.Title>
//                       <Card.Text>{article.description}</Card.Text>
//                     </Card.Body>
//                   </Card>
//                 </Col>
//               ))}
//             </Row>
//           </div>
//         )}
//       </section>
//       {/* Bloc des derniers articles */}

//       <section className="mb-4 mt-4">
//         <h2>Derniers Articles</h2>
//         <Row xs={1} md={2} lg={4} className="g-4">
//           {latestArticles.map(article => (
//             <Col key={article.id}>
//               <Card className="h-100">
//                 <Card.Img variant="top" src={article.image} style={{ height: '200px', objectFit: 'cover' }} />
//                 <Card.Body>
//                   <Card.Title>{article.title}</Card.Title>
//                   <Card.Text>{article.description}</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </section>

    

//       {/* Bloc de categories */}
//       <section className="mb-2">
//         <h2>Categories</h2>
//         <div className="d-flex flex-wrap">
//           {categories.map((category, index) => (
//             <Button
//               key={index}
//               variant={selectedCategory === category ? 'primary' : 'secondary'}
//               className="me-2 mb-2"
//               onClick={() => handleCategorySelect(category)}
//             >
//               {category}
//             </Button>
//           ))}
//         </div>
//       </section>

//       {/* Bloc des articles */}
//       <section>
//         <h2>Filtered Articles</h2>
//         <Row xs={1} md={2} lg={3} className="g-4">
//           {filteredArticles.map(article => (
//             <Col key={article.id}>
//               <Card className="h-100">
//                 <Card.Img variant="top" src={article.image} style={{ height: '200px', objectFit: 'cover' }} />
//                 <Card.Body>
//                   <Card.Title>{article.title}</Card.Title>
//                   <Card.Text>{article.description}</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </section>
//     </Container>
//   );
// };

// export default Home;


import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getAllArticles, getLatestArticles } from '../app/app';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [latestArticles, setLatestArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [searchedArticles, setSearchedArticles] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getAllArticles()
      .then(response => {
        const fetchedArticles = response.data;
        setArticles(fetchedArticles);
        setFilteredArticles(fetchedArticles); // Initialize filtered articles with all articles
        setCategories(['All', ...new Set(fetchedArticles.map(article => article.category))]);
        const list = fetchedArticles;
        const sortedArticles = list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 4);
        setLatestArticles(sortedArticles);
      })
      .catch(error => console.log(error));

    // getLatestArticles(5)
    //   .then(response => setLatestArticles(response.data))
    //   .catch(error => console.log(error));
  }, []);


  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    filterArticles(category, searchTerm);
  };

  const handleSearchInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    searchArticles(value);
  };

  const filterArticles = (category, searchTerm) => {
    let filtered = articles;

    if (category !== 'All') {
      filtered = filtered.filter(article => article.category === category);
    }

    setFilteredArticles(filtered);
  };

  const searchArticles = (searchTerm) => {
    if (searchTerm.trim() === '') {
      setSearchedArticles([]);
      return;
    }

    const searched = articles.filter(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchedArticles(searched);
  };

  const handleCardClick = (article) => {
    navigate('/details', { state: { article } });
  };

  return (
    <Container>
      {/* Search bar */}
      <section className="mb-2">
        <h2>Search Articles by Title</h2>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
        </div>
        {/* Display searched articles */}
        {searchedArticles.length > 0 && (
          <div className="mb-4">
            <h3>Search Results</h3>
            <Row xs={1} md={2} lg={3} className="g-4">
              {searchedArticles.map(article => (
                <Col key={article.id}>
                  <Card className="h-100" onClick={() => handleCardClick(article)}>
                    <Card.Img variant="top" src={article.image} style={{ height: '200px', objectFit: 'cover' }} />
                    <Card.Body>
                      <Card.Title>{article.title}</Card.Title>
                      <Card.Text>{article.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        )}
      </section>

      {/* Bloc des derniers articles */}
      <section className="mb-4 mt-4">
        <h2>Derniers Articles</h2>
        <Row xs={1} md={2} lg={4} className="g-4">
          {latestArticles.map(article => (
            <Col key={article.id}>
              <Card className="h-100" onClick={() => handleCardClick(article)}>
                <Card.Img variant="top" src={article.image} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>{article.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Bloc de categories */}
      <section className="mb-2">
        <h2>Categories</h2>
        <div className="d-flex flex-wrap">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={selectedCategory === category ? 'primary' : 'secondary'}
              className="me-2 mb-2"
              onClick={() => handleCategorySelect(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Bloc des articles */}
      <section>
        <h2>Filtered Articles</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {filteredArticles.map(article => (
            <Col key={article.id}>
              <Card className="h-100" onClick={() => handleCardClick(article)}>
                <Card.Img variant="top" src={article.image} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>{article.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
};

export default Home;
