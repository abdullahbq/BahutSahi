class Team extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const items = [
      {
        authorname: "John Doe",
        role: "Manager",
        instagram: "https://www.google.com",
        github: "https://www.google.com",
        linkedin: "https://www.google.com",
        authorimage: "abdullah",
      },
      {
        authorname: "John Doe",
        role: "CTO",
        instagram: "https://www.google.com",
        github: "https://www.google.com",
        linkedin: "https://www.google.com",
        authorimage: "abdullah",
      },
      {
        authorname: "John Doe",
        role: "CEO",
        instagram: "https://www.google.com",
        github: "https://www.google.com",
        linkedin: "https://www.google.com",
        authorimage: "abdullah",
      },
    ];

    this.innerHTML = `
        <section class="team-section bg-primary bg-opacity-10">
        <title-component title="Team"></title-component>      
          <div class="container py-5">
            <div class="row justify-content-center">
              ${items.map((item, i) => this.generateTeamCard(item, i)).join("")}
            </div>
            <div class="col-lg-12 col-md-12 mt-3 text-center">
              <a href="about.html" class="btn-group btn-group-lg text-decoration-none mb-4 shadow">
                <button class="btn btn-primary btn-lg">
                  <span class="mx-4">View All</span>
                </button>
                <button class="btn btn-light btn-lg d-flex align-items-center">
                  <i class="fas fa-arrow-right"></i>
                </button>
              </a>
            </div>
          </div>
        </section>
      `;
  }

  generateTeamCard(item, index) {
    return `
        <div key=${index} class="col-lg-4 col-md-6 col-sm-6 mb-4">
          <div class="card shadow text-center p-4 border-primary">
            <img class="card-img shadow rounded-circle mb-4" src="assets/images/${item.authorimage}.jpg" alt="${item.authorimage}" style="width: 160px; height: 160px; margin: 0 auto;">
            <h4 class="text-primary fw-bold">${item.authorname}</h4>
            <p>${item.role}</p>
            <div class="float-middle">
              <a href="${item.instagram}" class="m-2 btn bg-primary text-light shadow">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="${item.github}" class="m-2 btn bg-primary text-light shadow">
                <i class="fab fa-github"></i>
              </a>
              <a href="${item.linkedin}" class="m-2 btn bg-primary text-light shadow">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      `;
  }
}

customElements.define("team-component", Team);
