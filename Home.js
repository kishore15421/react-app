import React,{ Component } from 'react'

export class Home extends Component{
    render(){
        return(
                    <div>
                      <header>
                        <div className="container-fluid p-0">
                          <nav className="navbar navbar-expand-lg">
                            <a className="navbar-brand" href="#">
                              <i className="fas fa-exchange-alt" /> Myfin</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                              <i className="fas fa-align-right text-light" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                              <div className="mr-auto" />
                              <ul className="navbar-nav">
                                <li className="nav-item active">
                                  <a className="nav-link" href="#">HOME
                                    <span className="sr-only">(current)</span>
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="#">About us</a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="#">payments</a>
                                </li>
                                <li className="nav-item dropdown">
                                  <div className="dropdown">
                                    <a href="#" className="nav-link">Prices</a>
                                    <div className="dropdown-content">
                                      <a href="table.html">Skrill</a>
                                      <a href="table.html">Neteller</a>
                                    </div>
                                  </div>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="#" />
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="#">ABOUT</a>
                                </li>
                              </ul>
                            </div>
                          </nav>
                        </div>
                        <div className="container text-center">
                          <div className="row">
                            <div className="col-md-7 col-sm-12  text-white">
                              <h1>WELCOME TO ECURRENCY TEAMDIGITAL &amp; CRYPTO CURRENCY EXCHANGE SERVICE
                              </h1>
                              <p>
                                Myfin is easy to transfer online payments
                              </p>
                              <button className="btn btn-light px-5 py-2 primary-btn" onclick="window.location.href=' https://docs.google.com/forms/d/e/1FAIpQLSfMVVmQLnuesIxobHn8BObM837_i_TrDX8gdBv9jtYUqIYtWw/viewform?usp=pp_url' ">
                                Click to make a request
                              </button>
                            </div>
                          </div>
                        </div>
                      </header>
                      <main>
                        <section className="section-2 container-fluid p-0">
                          <div className="cover">
                            <div className="overlay" />
                            <div className="content text-center">
                              <h1>Some Features That Made Us Unique</h1>
                              <p>
                                SKRILL, NETELLER &amp; ECOPAYZ
                              </p>
                            </div>
                          </div>
                          <div className="container-fluid text-center">
                            <div className="numbers d-flex flex-md-row flex-wrap justify-content-center">
                              <div className="rect">
                                <h1>342</h1>
                                <p>Happy Client</p>
                              </div>
                              <div className="rect">
                                <h1>1654</h1>
                                <p>Total transactions</p>
                              </div>
                              <div className="rect">
                                <h1>234</h1>
                                <p>Likes</p>
                              </div>
                              <div className="rect">
                                <h1>546</h1>
                                <p>Registered Members</p>
                              </div>
                            </div>
                          </div>
                          <div className="purchase text-center">
                            <h1>Purchase Whatever You Want</h1>
                            <p>
                              Myfin transfers
                            </p>
                            <div className="cards">
                              <div className="d-flex flex-row justify-content-center flex-wrap">
                                <div className="card">
                                  <div className="card-body">
                                  <div className="title">
                                      <h5 className="card-title">Skrill</h5>
                                    </div>
                                    <p className="card-text">
                                      HOW TO GET THE BEST EXCHANGE RATE WHEN YOU SEND MONEY
                                    </p>
                                    <div className="pricing">
                                      <h1>$1=78.99</h1>
                                      <a href="#" className="btn btn-dark px-5 py-2 primary-btn mb-5">Register Now</a>
                                    </div>
                                  </div>
                                </div>
                                <div className="card">
                                  <div className="card-body">
                                  <div className="title">
                                      <h5 className="card-title">Neteller</h5>
                                    </div>
                                    <p className="card-text">
                                      A NETELLER Account lets you pay or play online, send and receive money and make fast, secure online payments whenever you need to.
                                    </p>
                                    <div className="pricing">
                                      <h1>$1=77.99</h1>
                                      <a href="#" className="btn btn-dark px-5 py-2 primary-btn mb-5">Register Now</a>
                                    </div>
                                  </div>
                                </div>
                                <div className="card">
                                  <div className="card-body">
                                    <div className="title">
                                      <h5 className="card-title">Ecopayz</h5>
                                    </div>
                                    <p className="card-text">
                                      Freedom to make secure online payments worldwide
                                      without worrying about your security and privacy
                                    </p>
                                    <div className="pricing">
                                      <h1>$78.99</h1>
                                      <a href="#" className="btn btn-dark px-5 py-2 primary-btn mb-5">Register Now</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        <section className="section-3 container-fluid p-0 text-center">
                          <div className="row">
                            <div className="col-md-12 col-sm-12">
                              <h1>Download Our App for all Platform</h1>
                              <p>
                                COMING SOON................
                              </p>
                            </div>
                          </div>
                          <div className="platform row">
                            <div className="col-md-6 col-sm-12 text-right">
                              <div className="desktop shadow-lg">
                                <div className="d-flex flex-row justify-content-center">
                                  <i className="fas fa-desktop fa-3x py-2 pr-3" />
                                  <div className="text text-left">
                                    <h3 className="pt-1 m-0">Desktop</h3>
                                    <p className="p-0 m-0">On website</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-sm-12 text-left">
                              <div className="desktop shadow-lg">
                                <div className="d-flex flex-row justify-content-center">
                                  <i className="fas fa-mobile-alt fa-3x py-2 pr-3" />
                                  <div className="text text-left">
                                    <h3 className="pt-1 m-0">On Mobile</h3>
                                    <p className="p-0 m-0">On Play Store</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        {/* Section 4 */}
                        <section className="section-4">
                          <div className="container text-center">
                            <h1 className="text-dark">What our Customer's  Say about us</h1>
                            <p className="text-secondary">Myfin.</p>
                          </div>
                          <div className="team row ">
                            <div className="col-md-4 col-12 text-center">
                              <div className="card mr-2 d-inline-block shadow-lg">
                                <div className="card-img-top">
                                  <img src="../assets/UI-face-3.jpg" className="img-fluid border-radius p-4" alt="" />
                                </div>
                                <div className="card-body">
                                  <h3 className="card-title">Arun</h3>
                                  <p className="card-text">
                                    "Your service always non-comparable. Great Great..."
                                  </p>
                                  <a href="#" className="text-secondary text-decoration-none">From</a>
                                  <p className="text-black-50">Karnataka</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-12">
                              <div id="carouselExampleControls" className="carousel slide " data-ride="carousel">
                                <div className="carousel-inner text-center">
                                  <div className="carousel-item active">
                                    <div className="card mr-2 d-inline-block shadow">
                                      <div className="card-img-top">
                                        <img src="../assets/UI-face-1.jpg" className="img-fluid rounded-circle w-50 p-4" alt="" />
                                      </div>
                                      <div className="card-body">
                                        <h3 className="card-title">Ganesh</h3>
                                        <p className="card-text">
                                          "Got my payments instantly and fastly... always suprb.service."
                                        </p>
                                        <a href="#" className="text-secondary text-decoration-none">From</a>
                                        <p className="text-black-50">Andhra pradesh</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="carousel-item">
                                    <div className="card  d-inline-block mr-2 shadow">
                                      <div className="card-img-top">
                                        <img src="../assets/UI-face-2.jpg" className="img-fluid rounded-circle w-50 p-4" alt="" />
                                      </div>
                                      <div className="card-body">
                                        <h3 className="card-title">Jaya Lakshmi</h3>
                                        <p className="card-text">
                                          "Very Very best service from ecurrencyteam"
                                        </p>
                                        <a href="#" className="text-secondary text-decoration-none">from</a>
                                        <p className="text-black-50">Andhra pradesh</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-12 text-center">
                              <div className="card mr-2 d-inline-block shadow-lg">
                                <div className="card-img-top">
                                  <img src="../assets/UI-face-4.jpg" className="img-fluid border-radius p-4" alt="" />
                                </div>
                                <div className="card-body">
                                  <h3 className="card-title">Mahesh</h3>
                                  <p className="card-text">
                                    "thanks a lot to my fin for fast payment"
                                  </p>
                                  <a href="#" className="text-secondary text-decoration-none">From</a>
                                  <p className="text-black-50">Karnataka</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </main>
                      <footer>
                        <div className="container-fluid p-0">
                          <div className="row text-left">
                            <div className="col-md-5 col-sm-5">
                              <h4 className="text-light">About us</h4>
                              <p className="text-muted">Myfin pvt.Ltd is one of the best currency Exchanger </p>
                              <p className="pt-4 text-muted">Copyright ©2019 All rights reserved | Myfin
                                <span> money exchanger</span>
                              </p>
                            </div>
                            <div className="col-md-5 col-sm-12">
                              <h4 className="text-light">Newsletter</h4>
                              <p className="text-muted">Stay Updated</p>
                              <form className="form-inline">
                                <div className="col pl-0">
                                  <div className="input-group pr-5">
                                    <input type="text" className="form-control bg-dark text-white" id="inlineFormInputGroupUsername2" placeholder="Email" />
                                    <div className="input-group-prepend">
                                      <div className="input-group-text">
                                        <i className="fas fa-arrow-right" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div className="col-md-2 col-sm-12">
                              <h4 className="text-light">Follow Us</h4>
                              <p className="text-muted">Let us be social</p>
                              <div className="column text-light">
                                <a href="https://m.facebook.com/myfin.xyz/?_rdr"><i className="fab fa-facebook-f" />
                                  <i className="fab fa-instagram" />
                                  <i className="fab fa-twitter" />
                                </a><a href=" https://api.whatsapp.com/send?phone=917981067942&text=&source=&data= "><i className="fab fa-whatsapp" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </footer>
                    </div>
                  );
                }
    }
export default Home;