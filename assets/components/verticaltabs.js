class VerticalTabs extends HTMLElement {
  connectedCallback() {
    const tabsData = [
      {
        label: "Courses",
        icon: "fas fa-book",
        content:
          "Explore a diverse range of courses that cater to various fields of study. Our courses are designed to provide in-depth knowledge and practical skills, ensuring you're well-prepared for the challenges of your chosen industry. Whether you're a student or a professional seeking continuous learning, our Courses tab is your gateway to educational excellence.",
      },
      {
        label: "Tutorials",
        icon: "fas fa-graduation-cap",
        content:
          "Dive into our extensive collection of tutorials covering a wide array of topics. From foundational concepts to advanced techniques, our Tutorials tab is your go-to resource for self-paced learning. Enhance your understanding, acquire new skills, and gain insights from industry experts as you navigate through our educational tutorials.",
      },
      {
        label: "Projects",
        icon: "fas fa-cogs",
        content:
          "Apply your knowledge to real-world scenarios with our Projects tab. Engage in hands-on projects that challenge your problem-solving skills and creativity. Our carefully curated projects cover a spectrum of domains, allowing you to build a robust portfolio that showcases your practical expertise to potential employers and collaborators.",
      },
      {
        label: "Trends",
        icon: "fas fa-lightbulb",
        content:
          "Stay abreast of the latest trends and innovations in the ever-evolving world of technology. The Tech Trends tab provides insightful content on emerging technologies, industry updates, and the future of education. Explore thought-provoking articles and stay informed about the cutting-edge developments shaping our educational landscape.",
      },
    ];

    this.innerHTML = `
          <section class="verticaltabs-section bg-primary bg-opacity-10">      
            <title-component title="Our Aspirations"></title-component>
            <div class="container text-center py-5">
              <div class="d-flex align-items-start">
                <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  ${this.generateTabs(tabsData)}
                </div>
                <div class="tab-content" id="v-pills-tabContent">
                  ${this.generateTabContent(tabsData)}
                </div>
              </div>
            </div>
          </section>`;

    this.addEventListener("click", (event) => {
      const targetTab = event.target.closest(".tab-link");
      if (targetTab) {
        event.preventDefault();
        const tabContent = targetTab.dataset.content;
        this.showTab(tabContent);
      }
    });

    // Show the content of the first tab initially
    this.showTab(tabsData[0].content);
  }

  generateTabs(tabsData) {
    return tabsData
      .map(
        (tab, index) => `
            <button class="tab-link btn btn-outline-primary rounded-pill m-2 shadow d-flex align-items-center fw-bold ${
              index === 0 ? "active" : ""
            }" 
                    data-content="${tab.content}" 
                    type="button" 
                    role="tab" 
                    aria-controls="v-pills-tab-${index}" 
                    aria-selected="${index === 0}">
              <i class="${tab.icon} me-2"></i> ${tab.label}
            </button>`
      )
      .join("");
  }

  generateTabContent(tabsData) {
    return tabsData
      .map(
        (tab, index) => `
            <div class="card card-body border-primary shadow tab-pane fade ${
              index === 0 ? "show active" : ""
            }" 
                 data-content="${tab.content}"
                 id="v-pills-tab-${index}" 
                 role="tabpanel" 
                 aria-labelledby="v-pills-tab-${index}">
                 <i class="${tab.icon} fa-4x p-3 text-primary"></i>
              <p>${tab.content}</p>
            </div>`
      )
      .join("");
  }

  showTab(tabContent) {
    const activeTab = this.querySelector(".tab-link.active");
    if (activeTab) {
      activeTab.classList.remove("active");
    }

    const newActiveTab = this.querySelector(
      `.tab-link[data-content="${tabContent}"]`
    );
    if (newActiveTab) {
      newActiveTab.classList.add("active");
    }

    const activeContent = this.querySelector(".tab-pane.show.active");
    if (activeContent) {
      activeContent.classList.remove("show", "active");
    }

    const newActiveContent = this.querySelector(
      `.tab-pane[data-content="${tabContent}"]`
    );
    if (newActiveContent) {
      newActiveContent.classList.add("show", "active");
    }
  }
}

customElements.define("vertical-tabs", VerticalTabs);
