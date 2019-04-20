import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import banner from "./image/banner.png";
import phone from "./image/phone.png";
import pad from "./image/pad.png";
import laphone from "./image/laphone.png";
import g1 from "./image/g1.jpg";
import g2 from "./image/g2.jpg";
import g3 from "./image/g3.jpg";
import g4 from "./image/g4.jpg";
import g5 from "./image/g5.jpg";
import g6 from "./image/g6.jpg";
import g7 from "./image/g7.jpg";
import g8 from "./image/g8.jpg";
import "./index.css";
class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="home">
          <div className="banner">
            <div className="container">
              <div className="row banner-text">
                <div className="slider-info col-md-4 col-lg-6">
                  <div className="banner-info-grid mt-5">
                    <h2>Welcome To Digital Marketing Agency </h2>
                    <p>
                      Integer pulvinar leo id viverra feugiat. Pellentesque
                      libero justo, semper at tempus vel, ultrices in ligula.
                      Nulla ut sollicitudin velit. Sed porttitor orci vel
                      fermentum maximus. Curabitur ut turpis massa.
                    </p>
                  </div>
                  <a className="btn mr-2 text-center" href="#popup1">
                    Read More{" "}
                  </a>
                  <a className="btn text-center" href="#popup2">
                    Watch Video{" "}
                  </a>
                </div>
                <div className="col-lg-6 col-md-8 mt-lg-0 mt-sm-5 mt-3 banner-image text-center">
                  <img src={banner} alt="" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="container">
            <div className="row">
              <div className=" col-md-6 col-lg-6 col-sm-12">
                <div className="banner mt-5">
                  <h1>Welcome to Digital Marketing Agency</h1>
                  <p>
                    Integer pulvinar leo id viverra feugiat. Pellentesque libero
                    justo, semper at tempus vel, ultrices in ligula. Nulla ut
                    sollicitudin velit. Sed porttitor orci vel fermentum
                    maximus. Curabitur ut turpis massa.
                  </p>
                  <div>
                    <a class="btn mr-2 uppercase" href="#popup1">
                      Read More
                    </a>
                    <a class="btn uppercase" href="#popup2">
                      watch video
                    </a>
                  </div>
                </div>
              </div>
              <div className=" col-md-6 col-lg-6 col-sm-12">
                <img src={banner} className="img-fluid" alt="" />
              </div>
            </div>
          </div> */}
        </section>
        {/* about us */}

        <section class="about mt-5">
          <div className="container pt-lg-5 pt-sm-3">
            <div className="row">
              <div className="col-sm-4 col-md-3 col-lg-3">
                <h3 className="heading text-center">About Us</h3>
              </div>
              <div className="col-sm-4 col-md-6 col-lg-6 about-text">
                <h3>Welcome To Our Digital Marketing Agency Website</h3>
                <p className="mt-3">
                  Integer pulvinar leo id viverra feugiat. Pellentesque libero
                  justo, semper at tempus vel, ultrices in ligula. Nulla uter
                  sollicitudin velit. Sed porttitor orci vel ferm.
                </p>
                <p className="mt-2">
                  Integer pulvinar leo id viverra feugiat. Pellentesque libero
                  justo, semper at tempus vel, ultrices in ligula. Nulla uter
                  sollicitudin velit. Sed porttitor orci vel fermentum elit
                  maximus. Curabitur ut turpis massa in condimentum libero.
                  Pellentesque maximus.
                </p>
              </div>
              <div className="col-sm-4 col-md-3 col-lg-3 ">
                <img src={phone} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* why choose us */}
        <section className="choose py-5">
          <div className="container py-md-3">
            <h3 className="heading mb-5">What We Provide</h3>
            <div className="row">
              <div className="col-lg-3">
                <div className="f1 icon1 p-4">
                  <div className="icon" />
                  <i className="fab fa-bandcamp" />
                  <h3 className="my-3">Branding</h3>
                  <p>
                    Excepteur sint occaecat non proident, sunt in culpa quis.
                    Phasellus lacinia id erat eu ullamcorper.
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="f1 icon2 p-4">
                  <div className="icon">
                    <i className="fab fa-codepen" />
                  </div>
                  <h3 className="my-3">Marketing</h3>
                  <p>
                    Excepteur sint occaecat non proident, sunt in culpa quis.
                    Phasellus lacinia id erat eu ullamcorper.
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="f1 icon3 p-4">
                  <div className="icon">
                    <i class="fab fa-btc" />
                  </div>
                  <h3 className="my-3">Advertising</h3>
                  <p>
                    Excepteur sint occaecat non proident, sunt in culpa quis.
                    Phasellus lacinia id erat eu ullamcorper.
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="f1 icon4 p-4">
                  <div className="icon">
                    <span className="fas fa-cloud" />
                  </div>
                  <h3 className="my-3">Product Sales</h3>
                  <p>
                    Excepteur sint occaecat non proident, sunt in culpa quis.
                    Phasellus lacinia id erat eu ullamcorper.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="marketing py-5">
          <div className="container py-md-3">
            <h3 className="heading mb-5">Marketing Process</h3>
            <div className="row">
              <div className="col-lg-3 my-lg-4">
                <div>
                  {" "}
                  <img src={phone} class="img-fluid" alt="" />
                </div>
                <h4 className="mb-3 feed-title">Marketing Products</h4>
                <p>
                  Excepteur ut occaecat proident, sunt in culpa quis. Phasellus
                  lacinia id erat risus quis.
                </p>
              </div>
              <div className="col-lg-3 mt-4 my-lg-4">
                <div>
                  <img src={pad} className="img-fluid" alt="" />
                </div>
                <h4 className="mb-3 feed-title">Advertising Agency</h4>
                <p>
                  Excepteur ut occaecat proident, sunt in culpa quis. Phasellus
                  lacinia id erat risus quis.
                </p>
              </div>
              <div className="col-lg-3 mt-4 my-lg-4">
                <div>
                  <img src={phone} className="img-fluid" alt="" />
                </div>
                <h4 className="mb-3 feed-title">Process Planning</h4>
                <p>
                  Excepteur ut occaecat proident, sunt in culpa quis. Phasellus
                  lacinia id erat risus quis.
                </p>
              </div>
              <div className="col-lg-3 mt-4">
                <div>
                  <img src={pad} className="img-fluid" alt="" />
                </div>
                <h4 className="mb-3 feed-title">Product Sales</h4>
                <p>
                  Excepteur ut occaecat proident, sunt in culpa quis. Phasellus
                  lacinia id erat risus quis.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="agency py-5">
          <div className="container">
            <div className="py-3 py-lg-5">
              <div className="row">
                <div className="col-md-6 agency-right">
                  <h3 className="agency-title">
                    Digital Marketing <br /> Business Agency
                  </h3>
                  <p className="mt-4">
                    Lorem ipsum dolor sit amet Neque porro quisquam est qui
                    dolorem Lorem int ipsum dolor sit amet when an unknown
                    printer took a galley of type.Vivamus id tempor felis. Cras
                    sagittis mi sit amet malesuada mollis. Mauris porroinit
                    consectetur cursus tortor vel interdum.
                  </p>
                </div>
                <div className="col-md-6">
                  <img src={laphone} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="portfolio py-5">
          <div className="container py-3">
            <h3 className="heading mb-4">Our Portfolio</h3>
            <div className="row text-center">
              <div className="col-md-3 col-6 gal-img">
                <img src={g1} className="img-fluid" alt="" />
              </div>
              <div className="col-md-3 col-6 gal-img">
                <img src={g2} className="img-fluid" alt="" />
              </div>
              <div className="col-md-3 col-6 gal-img">
                <img src={g3} className="img-fluid" alt="" />
              </div>
              <div className="col-md-3 col-6 gal-img">
                <img src={g4} className="img-fluid" alt="" />
              </div>
              <div className="col-md-3 col-6 gal-img">
                <img src={g5} className="img-fluid" alt="" />
              </div>
              <div className="col-md-3 col-6 gal-img">
                <img src={g6} className="img-fluid" alt="" />
              </div>
              <div className="col-md-3 col-6 gal-img">
                <img src={g7} className="img-fluid" alt="" />
              </div>
              <div className="col-md-3 col-6 gal-img">
                <img src={g8} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="partners mt-5 pb-5">
          <div className="container pt-5 pb-3">
            <h3 className="heading white-text pt-3 mb-5">
              Our Marketing Partners
            </h3>
            <div className="text-center">
              <ul className="row list-unstyled partners-icon">
                <li className=" col-4 col-lg-2">
                  <i className="fab fa-codepen" aria-hidden="true" />
                </li>
                <li className=" col-4 col-lg-2 border-left border-right">
                  <i className="fab fa-lastfm" aria-hidden="true" />
                </li>
                <li className=" col-4 col-lg-2 border-right">
                  <i className="fab fa-codiepie" aria-hidden="true" />
                </li>
                <li className=" col-4 col-lg-2 border-right mt-md-0 mt-3">
                  <i className="fab fa-drupal" aria-hidden="true" />
                </li>
                <li className=" col-4 col-lg-2 border-right mt-md-0 mt-3">
                  <i className="fab fa-dashcube" aria-hidden="true" />
                </li>
                <li className=" col-4 col-lg-2 mt-md-0 mt-3">
                  <i className="fab fa-skyatlas" aria-hidden="true" />
                </li>
              </ul>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="container pt-5 pb-5">
            <div className="row">
              <div className="col-lg-4">
                <h5 className="white-text mb-4">
                  <b className="white-text">WHO WE ARE</b>
                </h5>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium ipsum doloremque elit laudantium, totam rem
                  aperiam, eaque ipsa quae. Excepteur ut occaecat proident, sunt
                  voluptatem et accusantium doloremque elit dolor sit amet.
                </p>
                <b>Trusted by more than 1000+ people</b>
              </div>
              <div className="col-lg-3">
                <h5 className="white-text mb-4">
                  <b className="white-text">LATEST NEWS</b>
                </h5>
                <p>
                  {" "}
                  <i class="fab fa-twitter white-text pr-2" />
                  <b> Sed ut piciatis unde natus</b> <br /> Sed ut perspiciatis
                  unde omnis iste natus error sit volupta.... <br />
                  <i>23 Nov 2018.</i>
                </p>
                <p>
                  <i class="fab fa-twitter white-text pr-2" />
                  <b> Modi tempra incunt sit</b> <br />
                  Sed ut perspiciatis unde omnis iste natus error sit
                  volupta.... <br />
                  <i>24 Nov 2018.</i>
                </p>
              </div>
              <div className="col-lg-3">
                <h5 className="white-text mb-4">CONTACT US</h5>
                <p>
                  <i class="fas fa-map-marker-alt pr-2" /> <b>Location</b>{" "}
                  <br />
                  Marketing Agency, 5th cross, 4th building, New York City.{" "}
                </p>
                <p>
                  <i class="fas fa-phone fa-rotate-90 pr-2" /> <b>Phone</b>{" "}
                  <br /> +121 098 8907 9987{" "}
                </p>
                <p>
                  <i class="fas fa-envelope-open pr-2" /> <b>Email</b>
                  <br />
                  info@example.com
                </p>
              </div>
              <div className="col-lg-2">
                <h5 className="white-text mb-4">QUICK LINKS</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <NavLink to="/" className="footer-link">
                      Home
                    </NavLink>
                  </li>
                  <li className="mb-2">
                    <NavLink to="/about" className="footer-link">
                      About
                    </NavLink>
                  </li>
                  <li className="mb-2">
                    <NavLink className="footer-link">Dropdown</NavLink>
                  </li>
                  <li className="mb-2">
                    <NavLink to="/team" className="footer-link">
                      Team Page
                    </NavLink>
                  </li>
                  <li className="mb-2">
                    <NavLink to="/contact" className="footer-link">
                      Contact Page
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <div className="copy-right border-top py-4 text-center">
          <p>
            &copy; 2019 Digital. All Rights Reserved | Design by <b>Moyin</b>
          </p>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
