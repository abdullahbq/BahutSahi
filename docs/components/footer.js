class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-dark">
        <div class="container-fluid py-5">
          <div class="row">
            <div class="col-md-6">
              <h2 class="fw-bold text-light"><img src="assets/images/inkredibledoc.png" alt="Your Logo" width="50" height="50" class="d-inline-block align-text-top"> InkredibleDoc</h2>
              <p class="text-light">Explore your passion and unlock your potential with our projects and courses! We offer an extensive range of courses, designed to cater to the diverse needs and interests of learners worldwide. Our courses are flexible, accessible, and self-paced, ensuring that you can learn anytime, anywhere. Our team of experienced instructors is dedicated to supporting you throughout your learning journey. Join us today and embark on a journey of lifelong learning!</p>
            </div>
            <div class="col-md-3">
              <h2 class="fw-bold text-light">Quick Links</h2>
              <ul class="list-unstyled">
                <li><a href="index.html" class="text-decoration-none text-primary">Home</a></li>
                <li><a href="blog.html" class="text-decoration-none text-primary">Blog</a></li>
                <li><a href="about.html" class="text-decoration-none text-primary">About</a></li>
                <li><a href="services.html" class="text-decoration-none text-primary">Services</a></li>
                <li><a href="contact.html" class="text-decoration-none text-primary">Contact</a></li>
              </ul>
            </div>
            <div class="col-md-3">
              <h2 class="fw-bold text-light">Follow Us</h2>
              <ul class="list-unstyled social-icons">
                <li class="d-inline-block me-2"><a href="#" target="_blank"><i class="fab fa-facebook fa-2x me-2"></i></a></li>
                <li class="d-inline-block me-2"><a href="#" target="_blank"><i class="fab fa-instagram fa-2x me-2"></i></a></li>
                <li class="d-inline-block"><a href="#" target="_blank"><i class="fab fa-github fa-2x me-2"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div
        class="copyright text-center text-light py-3"
        style="background-color: #0c0c0c; box-shadow: 0 -4px 10px -1px rgba(0, 0, 0, 0.2)">
        <span class="text-light">Copyright &copy; 2023</span> ---
        <span class="text-primary fw-bold">
        InkredibleDoc
        </span>
        ---
        <span class="text-light">All Rights Reserved</span>
      </div>
      </footer>
    `;
  }
}

customElements.define("footer-component", Footer);
