import React from 'react';
import { Carousel , Image } from 'react-bootstrap'; // Import Carousel from react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS for styling (if not already imported)
 // Import your custom CSS file if needed

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="hero_area">
        {/* Header section */}
        <header className="header_section">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <a className="navbar-brand" href="index.html">
                <span>Restoran</span>
              </a>
              <div className="">
                <div className="User_option">
                  <a href="">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <span>Login</span>
                  </a>
                  <form className="form-inline ">
                    <input type="search" placeholder="Search" />
                    <button className="btn  nav_search-btn" type="submit">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </form>
                </div>
                <div className="custom_menu-btn">
                  <button onClick="openNav()">
                    <img src="images/menu.png" alt="" />
                  </button>
                </div>
                <div id="myNav" className="overlay">
                  <div className="overlay-content">
                    <a href="index.html">Home</a>
                    <a href="about.html">About</a>
                    <a href="blog.html">Blog</a>
                    <a href="testimonial.html">Testimonial</a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
        
        {/* Slider section */}
        <section className="slider_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="detail-box">
                  <h1>Discover Restaurant And Food</h1>
                  <p>when looking at its layout. The point of using Lorem Ipsum</p>
                </div>
              </div>
            </div>
          </div>
          <div className="slider_container">
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-10" src="images/slider-img1.png" alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-10" src="images/slider-img2.png" alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-10" src="images/slider-img3.png" alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-10" src="images/slider-img4.png" alt="Fourth slide" />
              </Carousel.Item>
              {/* Add more Carousel.Item for additional slides as needed */}
            </Carousel>
          </div>
        </section>
        {/* End slider section */}
      </div>

      {/* Recipe section */}
      <section className="recipe_section layout_padding-top">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Best Popular Recipes</h2>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src="images/r1.jpg" className="box-img" alt="" />
                </div>
                <div className="detail-box">
                  <h4>Breakfast</h4>
                  <a href=""><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src="images/r2.jpg" className="box-img" alt="" />
                </div>
                <div className="detail-box">
                  <h4>Lunch</h4>
                  <a href=""><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src="images/r3.jpg" className="box-img" alt="" />
                </div>
                <div className="detail-box">
                  <h4>Dinner</h4>
                  <a href=""><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="">Order Now</a>
          </div>
        </div>
      </section>
      {/* End recipe section */}

      {/* App section */}
      <section className="app_section">
        <div className="container">
          <div className="col-md-9 mx-auto">
            <div className="row">
              <div className="col-md-7 col-lg-8">
                <div className="detail-box">
                  <h2><span>Get the</span> <br />Restoran App</h2>
                  <p>long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The poin</p>
                  <div className="app_btn_box">
                    <a href="" className="mr-1">
                      <img src="images/google_play.png" className="box-img" alt="" />
                    </a>
                    <a href="">
                      <img src="images/app_store.png" className="box-img" alt="" />
                    </a>
                  </div>
                  <a href="" className="download_btn">Download Now</a>
                </div>
              </div>
              <div className="col-md-5 col-lg-4">
                <div className="img-box">
                  <img src="images/mobile.png" className="box-img" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End app section */}

      {/* About section */}
      <section className="about_section layout_padding">
        <div className="container">
          <div className="col-md-11 col-lg-10 mx-auto">
            <div className="heading_container heading_center">
              <h2>About Us</h2>
            </div>
            <div className="box">
              <div className="col-md-7 mx-auto">
                <div className="img-box">
                  <img src="images/about-img.jpg" className="box-img" alt="" />
                </div>
              </div>
              <div className="detail-box">
                <p>
                  Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable
                </p>
                <a href=""><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End about section */}

      {/* News section */}
      <section className="news_section">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Latest News</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="box">
                <div className="img-box">
                  <img src="images/n1.jpg" className="box-img" alt="" />
                </div>
                <div className="detail-box">
                  <h4>News Title</h4>
                  <p>Posted by Admin | 1 January, 2024</p>
                  <a href=""><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box">
                <div className="img-box">
                  <img src="images/n2.jpg" className="box-img" alt="" />
                </div>
                <div className="detail-box">
                  <h4>News Title</h4>
                  <p>Posted by Admin | 1 January, 2024</p>
                  <a href=""><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="">View All</a>
          </div>
        </div>
      </section>
      {/* End news section */}

      {/* Client section */}
      <section className="client_section layout_padding">
        <div className="container">
          <div className="col-md-11 col-lg-10 mx-auto">
            <div className="heading_container heading_center">
              <h2>Testimonial</h2>
            </div>
            <div id="customCarousel1" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="detail-box">
                    <h4>Virginia</h4>
                    <p>Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and</p>
                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="detail-box">
                    <h4>Virginia</h4>
                    <p>Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and</p>
                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev d-none" href="#customCarousel1" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#customCarousel1" role="button" data-slide="next">
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* End client section */}

      {/* Footer section */}
      <div className="footer_container">
        <section className="info_section">
          <div className="container">
            <div className="row">
              <div className="col-md-4 mx-auto">
                <div className="info_logo">
                  <h2>Restoran</h2>
                </div>
              </div>
              <div className="col-md-8 mx-auto">
                <div className="row">
                  <div className="col-md-6">
                    <div className="info_detail">
                      <h4>Working Hours</h4>
                      <p>Mon - Fri : 9:00 Am - 10:00 Pm <br /> Saturday : 10:00 Am - 6:00 Pm</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info_detail">
                      <h4>Location</h4>
                      <p>Virginia, looked up one of the more obscure Latin words, consectetur.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer_section">
          <div className="container">
            <p>
              &copy; <span id="displayYear"></span> All Rights Reserved By
              <a href="https://html.design/">Free Html Templates</a><br />
              Distributed By: <a href="https://themewagon.com/">ThemeWagon</a>
            </p>
          </div>
        </footer>
      </div>
      {/* End footer section */}
    </div>
  );
}

export default AboutUs;
