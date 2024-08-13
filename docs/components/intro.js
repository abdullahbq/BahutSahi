class Intro extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <section class="intro-section bg-primary bg-opacity-10">
                <div class="container py-5">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-lg-4 text-center order-md-2"><img class="img-fluid rounded-3 my-5 shadow" src="assets/images/01.jpg" alt="InkredibleDoc" /></div>
                        <div class="col-lg-8">
                            <div class="my-5 text-center text-xl-start">
                                <h1 class="display-5 fw-bolder mb-2">Welcome to InkredibleDoc!</h1>
                                <p class="lead fw-normal mb-4">
                                Your gateway to a world of knowledge and innovation in the field of engineering and technology. We are your premier destination for online education, offering a diverse range of courses designed to empower and inspire the next generation of engineers, innovators, and tech enthusiasts.</p>
                                <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                    <a class="btn btn-primary btn-lg px-4 me-sm-3 shadow" href="#features">Get Started</a>
                                    <a class="btn btn-outline-success btn-lg px-4 shadow" href="#!">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define("intro-component", Intro);
