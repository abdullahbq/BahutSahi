class Tabs extends HTMLElement {
  connectedCallback() {
    const jsonData = [
      {
        title: "<strong>Welcome to InkredibleDoc</strong>",
        icon: "fas fa-university",
        content: `
          <h2 class="text-primary">Explore the World of Technology and Education</h2>
          <p>Welcome to InkredibleDoc, your gateway to a diverse range of courses, tutorials, and projects in the fields of technology and education. Whether you're a student, professional, or lifelong learner, our platform is designed to empower you on your educational journey.</p>
        `,
      },
      {
        title: "<strong>Featured Courses</strong>",
        icon: "fas fa-graduation-cap",
        content: `
          <h2 class="text-primary">Enhance Your Skills with Our Featured Courses</h2>
          <p>At TechEduHub, we offer a curated selection of courses covering cutting-edge technologies. From programming languages to data science and artificial intelligence, our courses are crafted to meet the demands of the ever-evolving tech landscape. Dive into interactive learning experiences led by industry experts.</p>
        `,
      },
      {
        title: "<strong>Tutorials for Every Level</strong>",
        icon: "fas fa-book-open",
        content: `
          <h2 class="text-primary">Learn at Your Own Pace with Tutorials</h2>
          <p>Our platform provides a plethora of tutorials catering to learners of all levels. Whether you're a beginner looking to grasp the basics or an advanced learner seeking in-depth knowledge, our tutorials cover a wide range of topics. Explore step-by-step guides, practical tips, and hands-on projects to reinforce your understanding.</p>
        `,
      },
      {
        title: "<strong>Real-world Projects</strong>",
        icon: "fas fa-cogs",
        content: `
          <h2 class="text-primary">Apply Your Knowledge with Real-world Projects</h2>
          <p>At TechEduHub, we believe in the power of practical application. Engage in real-world projects that simulate industry scenarios. Build a portfolio showcasing your skills and gain hands-on experience that sets you apart in the competitive job market.</p>
        `,
      },
      {
        title: "<strong>Community and Collaboration</strong>",
        icon: "fas fa-users",
        content: `
          <h2 class="text-primary">Join a Vibrant Learning Community</h2>
          <p>Connect with like-minded learners, share insights, and collaborate on projects within our thriving community. TechEduHub fosters a supportive environment where learners can engage in discussions, seek help, and celebrate each other's successes. Education is not just about acquiring knowledge; it's also about building connections.</p>
        `,
      },
      {
        title: "<strong>Stay Updated with the Latest Trends</strong>",
        icon: "fas fa-lightbulb",
        content: `
          <h2 class="text-primary">Keep Abreast of Educational Trends and Innovations</h2>
          <p>Education is a dynamic field, and staying updated is crucial. Explore our content on the latest trends, innovations, and advancements in technology and education. From industry insights to emerging technologies, we strive to keep you informed and inspired.</p>
        `,
      },
    ];

    this.render(jsonData);

    this.tabsContainer = this.querySelector(".tabs-container");
    this.tabContents = this.querySelectorAll(".tab-pane");

    this.tabsContainer.addEventListener("click", (event) => {
      const tab = event.target.closest(".tab-link");
      if (tab && tab.dataset.index !== undefined) {
        event.preventDefault();
        this.showTabContent(parseInt(tab.dataset.index));
      }
    });

    this.showTabContent(0);
  }

  render(data) {
    this.innerHTML = `
    <section class="tabs-section bg-primary bg-opacity-10">      
    <title-component title="Educational Offerings"></title-component>
      <div class="container text-center py-5">
            <div class="tabs-container">
              ${data
                .map(
                  (tab, i) =>
                    `<a class="tab-link btn btn-outline-primary rounded-pill m-2 shadow" data-index="${i}" data-toggle="tab" href="#tab-${i}"><i class="${tab.icon} me-2"></i> ${tab.title}</a>`
                )
                .join("")}
            </div>
            <div class="col-lg-8 tab-content mx-auto">
              ${data
                .map(
                  (tab, i) =>
                    `<div class="card card-body mt-4 border-primary shadow tab-pane" id="tab-${i}"><i class="${tab.icon} fa-4x p-3 text-primary"></i>
                    <p>${tab.content}</p></div>`
                )
                .join("")}
            </div>
        </div>
      </section>`;
  }

  showTabContent(index) {
    this.tabsContainer
      .querySelectorAll(".tab-link")
      .forEach((tab) => tab.classList.remove("active"));
    this.tabContents.forEach((content) =>
      content.classList.remove("active", "show")
    );

    this.tabsContainer
      .querySelector(`.tab-link[data-index="${index}"]`)
      .classList.add("active");
    this.tabContents[index].classList.add("active", "show");
  }
}

customElements.define("tabs-component", Tabs);
