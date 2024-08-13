class About extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="biodata-section bg-primary bg-opacity-10">    
    <title-component title="About Us"></title-component>
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="card shadow mb-4 border-primary">
            <div class="card-body">
              <div class="d-flex flex-column align-items-center text-center">
              <img src="assets/images/abdullah.jpg" class="card-img-top shadow rounded-circle mb-2" style="width: 160px; height: 160px; margin: 0 auto" alt="Abdullah">                
                <div class="mt-3">
                  <h4 class="fw-bold">Dr. Abdullah Bin Queyam</h4>
                  <p class="text-secondary mb-1">Assistant Professor and Web Developer</p>
                  <p class="text-muted font-size-sm">
                    Jamshedpur, INDIA
                  </p>
                  <button class="btn btn-outline-primary shadow m-2">
                    Follow
                  </button>
                  <button class="btn btn-outline-primary shadow m-2">
                    Message
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="card shadow mb-4 border-primary">
            <div class="card-body">
              <li class="d-flex justify-content-between align-items-center">
                <h6 class="mb-0">
                <i class="fas fa-globe"></i> Website
                </h6>
                <span class="text-secondary">https://www.inkredibledoc.com</span>
              </li>
              <hr />
              <li class="d-flex justify-content-between align-items-center">
                <h6 class="mb-0">
                <i class="fab fa-github"></i> Github
                </h6>
                <span class="text-secondary">abdullahbq</span>
              </li>
              <hr />
              <li class="d-flex justify-content-between align-items-center">
                <h6 class="mb-0">
                <i class="fab fa-linkedin"></i> Linkedin
                </h6>
                <span class="text-secondary">@bootdey</span>
              </li>
              <hr />
              <li class="d-flex justify-content-between align-items-center">
                <h6 class="mb-0">
                <i class="fab fa-instagram"></i> Instagram
                </h6>
                <span class="text-secondary">bootdey</span>
              </li>
              <hr />
              <li class="d-flex justify-content-between align-items-center">
                <h6 class="mb-0">
                <i class="fab fa-researchgate"></i> Researchgate
                </h6>
                <span class="text-secondary">bootdey</span>
              </li>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="card shadow mb-4 border-primary">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Full Name</h6>
                </div>
                <div class="col-sm-9 text-secondary">Dr. Abdullah Bin Queyam</div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Email</h6>
                </div>
                <div class="col-sm-9 text-secondary">abdullahbinqueyam@gmail.com</div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Phone</h6>
                </div>
                <div class="col-sm-9 text-secondary">+91-Private</div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Mobile</h6>
                </div>
                <div class="col-sm-9 text-secondary">+91-Private</div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Address</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  Jamshedpur, Jharkhand, INDIA
                </div>
              </div>
            </div>
          </div>
          <div class="row gutters-sm">
            <div class="col-sm-6 mb-3">
              <div class="card shadow mb-4 h-100 border-primary">
                <div class="card-body">
                  <h6 class="d-flex align-items-center mb-3">
                    <i class="material-icons text-info me-2">
                      assignment
                    </i>
                    Project Status
                  </h6>
                  <p class="mb-1">Web Design</p>
                  <div
                    class="progress mb-3"
                    style="height: 10px; border-radius: 10px"
                  >
                    <div
                      class="progress-bar bg-pimary"
                      role="progressbar"
                      aria-label="progressbar"
                      style="width: 66%" 
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p class="mb-1">Website Markup</p>
                  <div
                    class="progress mb-3"
                    style="height: 10px; border-radius: 10px"
                  >
                    <div
                      class="progress-bar bg-pimary"
                      role="progressbar"
                      aria-label="progressbar"
                      style="width: 86%"
                      aria-valuenow="72"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p class="mb-1">One Page</p>
                  <div
                    class="progress mb-3"
                    style="height: 10px; border-radius: 10px"
                  >
                    <div
                      class="progress-bar bg-pimary"
                      role="progressbar"
                      aria-label="progressbar"
                      style="width: 76%"
                      aria-valuenow="89"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p class="mb-1">Mobile Template</p>
                  <div
                    class="progress mb-3"
                    style="height: 10px; border-radius: 10px"
                  >
                    <div
                      class="progress-bar bg-pimary"
                      role="progressbar"
                      aria-label="progressbar"
                      style="width: 66%"
                      aria-valuenow="55"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p class="mb-1">Backend API</p>
                  <div
                    class="progress mb-3"
                    style="height: 10px; border-radius: 10px"
                  >
                    <div
                      class="progress-bar bg-pimary"
                      role="progressbar"
                      aria-label="progressbar"
                      style="width: 96%"
                      aria-valuenow="66"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 mb-3">
              <div class="card shadow mb-4 h-100 border-primary">
                <div class="card-body">
                  <h6 class="d-flex align-items-center mb-3">
                    <i class="material-icons text-info me-2">
                      assignment
                    </i>
                    Project Status
                  </h6>
                  <p class="mb-1">Web Design</p>
                  <div
                    class="progress mb-3"
                    style="height: 10px; border-radius: 10px"
                  >
                    <div
                      class="progress-bar bg-pimary"
                      role="progressbar"
                      aria-label="progressbar"
                      style="width: 61%"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p class="mb-1">Website Markup</p>
                  <div
                    class="progress mb-3"
                    style="height: 10px; border-radius: 10px"
                  >
                    <div
                      class="progress-bar bg-pimary"
                      role="progressbar"
                      aria-label="progressbar"
                      style="width: 86%"
                      aria-valuenow="72"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p class="mb-1">One Page</p>
                  <div
                    class="progress mb-3"
                    style="height: 10px; border-radius: 10px"
                  >
                    <div
                      class="progress-bar bg-pimary"
                      role="progressbar"
                      aria-label="progressbar"
                      style="width: 76%"
                      aria-valuenow="89"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p class="mb-1">Mobile Template</p>
                  <div
                    class="progress mb-3"
                    style="height: 10px; border-radius: 10px"
                  >
                    <div
                      class="progress-bar bg-pimary"
                      role="progressbar"
                      aria-label="progressbar"
                      style="width: 56%"
                      aria-valuenow="55"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p class="mb-1">Backend API</p>
                  <div
                    class="progress mb-3"
                    style="height: 10px; border-radius: 10px"
                  >
                    <div
                      class="progress-bar bg-pimary"
                      role="progressbar"
                      aria-label="progressbar"
                      style="width: 76%"
                      aria-valuenow="66"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
      `;
  }
}

customElements.define("about-component", About);
