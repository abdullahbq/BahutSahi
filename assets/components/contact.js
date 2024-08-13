class Contact extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `   
    <section class="contactus-section bg-primary bg-opacity-10">    
    <title-component title="Contact Us"></title-component>
    <div class="container py-5">
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-4">
          <div class="card p-2 text-center shadow mb-4 border-primary">
            <div class="row">
              <div class="col-2 p-4">
              <h1 class="text-primary">
                <i class="fas fa-address-book"></i>
                </h1>
              </div>
              <div class="col-10">
                <h4 class="text-primary ">Our Address</h4>
                <p>
                  A108 Adam Street <br /> New York, NY 535022
                </p>
              </div>
            </div>
          </div>

          <div class="card p-2 text-center shadow mb-4 border-primary">
            <div class="row">
              <div class="col-2 p-4">
                <h1 class="text-primary">
                <i class="fas fa-envelope"></i>
                </h1>
              </div>
              <div class="col-10">
                <h4 class="text-primary">Email Us</h4>
                <p>
                  info@example.com
                  <br />
                  contact@example.com
                </p>
              </div>
            </div>
          </div>

          <div class="card p-2 text-center shadow mb-4 border-primary">
            <div class="row">
              <div class="col-2 p-4">
                <h1 class="text-primary">
                <i class="fas fa-phone"></i>
                </h1>
              </div>
              <div class="col-10">
                <h4 class="text-primary">Call Us</h4>
                <p>
                  +1 5589 55488 55
                  <br />
                  +1 6678 254445 41
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-7 col-md-12">
          <form
            method="POST"
            role="presentation"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="contact"
            class="card p-4 shadow mb-4 border-primary"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div class="form-row">
              <div class="col-lg-12 form-group mb-2">
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div class="col-lg-12 form-group mb-2">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div class="col-lg-12 form-group mb-2">
              <input
                type="text"
                class="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
              />
            </div>
            <div class="col-lg-12 form-group mb-4">
              <textarea
                class="form-control"
                name="message"
                id="message"
                rows="8"
                placeholder="Message"
              ></textarea>
            </div>
            <div class="text-center">
              <div
                class="btn-group btn-group-lg text-decoration-none mb-4 shadow"
                role="group"
                aria-label="Send"
              >
                <button type="submit" class="btn btn-primary btn-lg">
                  <span class="mx-4">Send Message</span>
                </button>
                <button type="reset" class="btn btn-light btn-lg">
                <i class="fas fa-eraser"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
    `;
  }
}

customElements.define("contact-component", Contact);
