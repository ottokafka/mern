import React from "react";
import fade1 from "./img/fade1.jpeg";
import fade2 from "./img/fade2.jpeg";
import fade3 from "./img/fade3.jpeg";
import fade4 from "./img/fade4.jpeg";
import fade5 from "./img/fade5.jpeg";
import fade6 from "./img/fade6.jpeg";
import fade7 from "./img/fade7.jpeg";
import fade8 from "./img/fade8.jpeg";
import fade9 from "./img/fade9.jpeg";

import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">My Startup</h1>
          <p class="lead text-muted">
            Create you business or find a business. Want to setup your
            barbershop online? Now you can. Want to find a barber in your area.
          </p>
          <p>
            <Link to="/Login" class="btn btn-primary my-2">
              Login
            </Link>{" "}
            <Link to="/Signup" class="btn btn-secondary my-2">
              Sign up
            </Link>
          </p>
        </div>
      </section>

      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img
                  class="card-img-top"
                  src={fade1}
                  alt="Thumbnail [100%x225]"
                  data-holder-rendered="true"
                />
                <div class="card-body">
                  <p class="card-text">fades</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      {/* <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button> */}
                      {/* <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button> */}
                    </div>
                    <small class="text-muted">35 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img
                  class="card-img-top"
                  src={fade2}
                  alt="Thumbnail [100%x225]"
                  data-holder-rendered="true"
                />
                <div class="card-body">
                  <p class="card-text">fades</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      {/* <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button> */}
                    </div>
                    <small class="text-muted">30 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img
                  class="card-img-top"
                  src={fade3}
                  alt="Thumbnail [100%x225]"
                  data-holder-rendered="true"
                />
                <div class="card-body">
                  <p class="card-text">fades</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      {/* <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button> */}
                    </div>
                    <small class="text-muted">30 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img
                  class="card-img-top"
                  src={fade4}
                  alt="Thumbnail [100%x225]"
                  data-holder-rendered="true"
                />
                <div class="card-body">
                  <p class="card-text">fades</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      {/* <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button> */}
                    </div>
                    <small class="text-muted">30 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img
                  class="card-img-top"
                  src={fade5}
                  alt="Thumbnail [100%x225]"
                  data-holder-rendered="true"
                />
                <div class="card-body">
                  <p class="card-text">fades</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      {/* <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button> */}
                    </div>
                    <small class="text-muted">30 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img
                  class="card-img-top"
                  src={fade6}
                  alt="Thumbnail [100%x225]"
                  data-holder-rendered="true"
                />
                <div class="card-body">
                  <p class="card-text">fades</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      {/* <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button> */}
                    </div>
                    <small class="text-muted">30 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img
                  class="card-img-top"
                  src={fade8}
                  alt="Thumbnail [100%x225]"
                  data-holder-rendered="true"
                />
                <div class="card-body">
                  <p class="card-text">fades</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      {/* <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button> */}
                    </div>
                    <small class="text-muted">30 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img
                  class="card-img-top"
                  src={fade7}
                  alt="Thumbnail [100%x225]"
                  data-holder-rendered="true"
                />
                <div class="card-body">
                  <p class="card-text">fades</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      {/* <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button> */}
                    </div>
                    <small class="text-muted">30 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img
                  class="card-img-top"
                  src={fade9}
                  alt="Thumbnail [100%x225]"
                  data-holder-rendered="true"
                />
                <div class="card-body">
                  <p class="card-text">fades</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      {/* <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button> */}
                    </div>
                    <small class="text-muted">30 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
