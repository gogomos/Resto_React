import axios from 'axios';

// Cloudinary configuration
const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/dgbwl69xi/upload'; // Replace with your Cloudinary upload URL
const cloudinaryPreset = 'tjbjycer'; // Replace with your Cloudinary upload preset

export const articlesApi = axios.create({
  baseURL: "http://localhost:9000",
});

// CRUD Operations

// Get All Articles
export const getAllArticles = () => {
  return articlesApi.get("/articles");
};

// Get Articles with Search and Pagination
export const getArticles = (keyword = "", page, size) => {
  return articlesApi.get(`/articles?title_like=${keyword}&_page=${page}&_limit=${size}`);
};

// Get a Single Article
export const getArticle = (id) => {
  return articlesApi.get(`/articles/${id}`);
};

// Add a New Article with Cloudinary image upload
// export const addArticle = async (articleData) => {
//     try {
//       // Upload image to Cloudinary
//       const formData = new FormData();
//       formData.append('file', articleData.image); // Assuming 'image' is the file input from the form
//       formData.append('upload_preset', cloudinaryPreset);
  
//       const cloudinaryResponse = await axios.post(cloudinaryUrl, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
  
//       // If image upload to Cloudinary is successful, proceed to add article
//       const imageUrl = cloudinaryResponse.data.secure_url; // Extract the image URL from Cloudinary response
  
//       // Add article data including the Cloudinary image URL
//       const response = await articlesApi.post('/articles', {
//         title: articleData.title,
//         description: articleData.description,
//         image: imageUrl,
//         category: articleData.category,
//       });
  
//       return response.data; // Return the newly added article data
//     } catch (error) {
//       console.error('Error adding article:', error);
//       throw error; // Propagate the error for handling in the component
//     }
//   };

export const addArticle = async (articleData) => {
    try {
      // Upload image to Cloudinary
      const formData = new FormData();
      formData.append('file', articleData.image); // Assuming 'image' is the file input from the form
      formData.append('upload_preset', cloudinaryPreset);
  
      const cloudinaryResponse = await axios.post(cloudinaryUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      // If image upload to Cloudinary is successful, proceed to add article
      const imageUrl = cloudinaryResponse.data.secure_url; // Extract the image URL from Cloudinary response
  
      // Add article data including the Cloudinary image URL
      const response = await articlesApi.post('/articles', {
        title: articleData.title,
        description: articleData.description,
        image: imageUrl,
        category: articleData.category,
        howToPrepare:articleData.howToPrepare,
        recipe: articleData.recipe,
        createdAt: new Date().toISOString(), // Add creation date
      });
  
      return response.data; // Return the newly added article data
    } catch (error) {
      console.error('Error adding article:', error);
      throw error; // Propagate the error for handling in the component
    }
  };
  

// Update an Article
export const updateArticle = (article) => {
  return articlesApi.put(`/articles/${article.id}`, article);
};

// Delete an Article
export const deleteArticle = (id) => {
  return articlesApi.delete(`/articles/${id}`);
};

// Get Latest Articles
export const getLatestArticles = async (limit = 5) => {
    try {
      const response = await articlesApi.get('/articles');
      // Sort articles by createdAt in descending order
      const sortedArticles = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, limit);
      return sortedArticles;
    } catch (error) {
      console.error('Error fetching latest articles:', error);
      throw error;
    }
  };