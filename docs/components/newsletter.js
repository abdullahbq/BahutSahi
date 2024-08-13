class Newsletter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section class="newsletter-section bg-primary bg-opacity-10">
          <div class="container py-5">
            <div class="row justify-content-center">
              <div class="col-lg-10 col-md-10 col-sm-12">
                <div class="card shadow border-primary">
                  <div class="card-body p-5">
                    <h3 class="fw-bold">
                      <i class="fas fa-envelope text-primary"></i>
                      Join our newsletter and be the first to know!
                    </h3>
                    <p class="small">
                      Thousands of subscribers are already getting their news fresh,
                      FREE, and delivered directly to their inbox.
                    </p>
                    <form
                      method="POST"
                      role="presentation"
                      netlify-honeypot="bot-field"
                      data-netlify="true"
                      name="subscriber"
                    >
                      <input type="hidden" name="bot-field" />
                      <input type="hidden" name="form-name" value="subscriber" />
                      <div class="form-row py-2">
                        <div class="col-md-12 form-group mb-4">
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            id="name"
                            placeholder="Your Name"
                          />
                        </div>
                        <div class="col-md-12 form-group mb-4">
                          <input
                            type="email"
                            class="form-control"
                            name="email"
                            id="email"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div class="text-center">
                        <div
                          class="btn-group btn-group-lg mb-4 shadow"
                          role="group"
                          aria-label="Send"
                        >
                          <button type="submit" class="btn btn-primary btn-lg">
                            <span class="mx-4">Subscribe</span>
                          </button>
                          <button
                            type="reset"
                            class="btn btn-light btn-lg d-flex align-items-center"
                          >
                            <i class="fas fa-eraser"></i>
                          </button>
                        </div>
                        <p class="small mb-0">
                        <i class="fas fa-lock"></i> We value
                          your privacy, your information is safe with us.
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
  }
}

customElements.define("newsletter-component", Newsletter);
