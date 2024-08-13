class AboutUs extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section class="aboutus-section bg-primary bg-opacity-10">
          <div class="container pb-5">
            <div class="row justify-content-center align-items-center">
              ${this.renderItems()}
            </div>
          </div>
        </section>
      `;
  }

  renderItems() {
    const items = [
      {
        icon: "fas fa-book",
        title: "Diverse Course Offerings",
        content:
          "Discover a diverse range of courses tailored to your interests and career goals, including traditional subjects like business, engineering, and humanities, as well as emerging fields like data science, artificial intelligence, and cybersecurity. Our comprehensive selection ensures that you can find the right course to advance your education and career, no matter what your background or aspirations.",
      },
      {
        icon: "fab fa-slideshare",
        title: "Interactive Learning",
        content:
          "Experience interactive and engaging learning through our virtual classrooms, collaboration tools, and personalized feedback. Our interactive learning environment encourages peer-to-peer learning and provides ample opportunities to engage with instructors and experts in your field.",
      },
      {
        icon: "fas fa-tools",
        title: "Hands-On Projects",
        content:
          "Take your learning to the next level with our emphasis on hands-on projects and experiential learning. With a focus on hands-on learning, you'll be able to gain valuable experience and develop your expertise, ensuring that you're ready to take on the challenges of your career.",
      },
    ];

    return items
      .map(
        (item, i) => `
        <div key=${i} class="col-lg-4">
          <div class="card shadow text-center mb-4 border-primary">          
            <i class="${item.icon} fa-5x text-center text-primary pt-5"></i>
            <div class="card-body">
            <h4 class="card-title text-primary fw-bold">${item.title}</h4>
            <p class="card-text">${item.content}</p>
          </div>         
          </div>
        </div>
      `
      )
      .join("");
  }
}

customElements.define("aboutus-component", AboutUs);
