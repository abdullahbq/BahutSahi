class Portfolio extends HTMLElement {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          name: "The Lazy Artist Gallery",
          category: "People",
          src: "01",
        },
        {
          name: "Daria Shevtsova",
          category: "Food",
          src: "01",
        },
        {
          name: "Kasuma",
          category: "Animals",
          src: "01",
        },
        {
          name: "Dominika Roseclay",
          category: "Plants",
          src: "01",
        },
        {
          name: "Scott Webb",
          category: "Plants",
          src: "01",
        },
        {
          name: "Jeffrey Czum",
          category: "People",
          src: "01",
        },
        {
          name: "Dominika Roseclay",
          category: "Food",
          src: "01",
        },
        {
          name: "Valeria Boltneva",
          category: "Animals",
          src: "01",
        },
      ],
      filters: ["All", "People", "Animals", "Plants", "Food"],
      selectedFilter: "All",
    };
  }

  connectedCallback() {
    this.render();
  }

  setFilter(filter) {
    this.setState({ selectedFilter: filter });
  }

  render() {
    this.innerHTML = `
      <section class="portfolio-section bg-primary bg-opacity-10">
        <title-component title="Portfolio"></title-component>
        <div class="container py-5">
          <div class="d-flex justify-content-center mb-4">
            ${this.state.filters
              .map(
                (filter) => `
                <button
                  class="btn rounded-pill shadow ${
                    filter === this.state.selectedFilter
                      ? "btn-primary"
                      : "btn-outline-primary"
                  } me-2"
                  onclick="document.querySelector('portfolio-component').setFilter('${filter}')"
                >
                  ${filter}
                </button>
              `
              )
              .join("")}
          </div>
          <div class="row justify-content-center">
            ${this.state.projects
              .filter((project) => {
                return (
                  this.state.selectedFilter === "All" ||
                  project.category === this.state.selectedFilter
                );
              })
              .map(
                (project, index) => `
                <div key="${index}" class="col-lg-4 col-md-4 col-sm-12">
                  <div class="card shadow mb-4 position-relative">
                    <img
                      class="card-img"
                      src="assets/images/${project.src}.jpg"
                      alt="${project.name}"
                    />
                    <div class="card-overlay position-absolute top-50 start-50 translate-middle text-center">
                      <h5 class="text-light fw-bold">${project.name}</h5>
                      <p class="badge bg-primary">${project.category}</p>
                    </div>
                  </div>
                </div>
              `
              )
              .join("")}
          </div></div>
      </section>
    `;
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}

customElements.define("portfolio-component", Portfolio);
