class Resume extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `        
    <!DOCTYPE html>
    <html lang="en">    
    <body>    
      <section id="header" class="bg-primary bg-opacity-10">
        <div class="container py-5">
          <div class="card shadow border-primary mb-1">
            <div class="card-header border-0">
              <div class="row align-items-center">
                <div class="col-9">
                  <h2 class="text-primary fw-bold">Dr. Abdullah Bin Queyam</h2>
    
                  <div class="fst-italic">
                    I am a Professor of Biomedical Instrumentation and also loves Web
                    Developement.
                    <span class="noprint fst-normal">
                      <a class="noprint btn btn-primary btn-sm text-light text-decoration-none shadow" style="font-size: 1em"
                        href="assets/abdullahbq_resume.pdf" target="_blank">Download CV</a>
                    </span>
                  </div>
                  <hr class="my-2" />
                  <div class="self-title mb-2">
                    <span class="strong">Research Interests | </span> Biomedical
                    Instrumentation, Virtual Instrumentation, Portable Healthcare
                    Instrumentation, Medical Signal Processing, Pattern Recognition,
                    Signal Decomposition and Web Development.
                  </div>
                </div>
                <div class="col-3">
                  <div class="text-center">
                    <img src="assets/images/abdullah.jpg" style="border-radius: 100%" alt="Abdullah Bin Queyam" width="100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <div class="card border-primary shadow mb-1">
            <h6 class="card-header text-primary strong">
              <i class="fas fa-university"></i> WORK EXPERIENCE
            </h6>
    
            <div class="card-header">
              <span class="fs-7 strong">
                <i class="fas fa-briefcase"></i> Assistant Professor at Banasthali
                Vidyapith
              </span>
              <span class="float-end text-danger">Rajasthan, INDIA | June 2018 - Present</span>
              <ul class="description">
                <li><span class="strong">Department | </span> School of Automation</li>
                <li>
                  <span class="strong">Nature of Job | </span> Teaching and Academic
                </li>
                <li>
                  <span class="strong">Responsibilities | </span> Taught students
                  applied knowledge in the areas of Digital Electronics, Biomedical
                  Instrumentation, Embedded Systems and Static Web Development. Involved
                  with development and enhancement of Laboratories in the Department.
                </li>
              </ul>
            </div>
    
            <div class="card-header">
              <span class="fs-7 strong">
                <i class="fas fa-briefcase"></i> Research Scholar at NIT, Jalandhar
              </span>
              <span class="float-end text-danger">Punjab, INDIA | June 2014 - June 2018</span>
              <ul class="description">
                <li>
                  <span class="strong">Department | </span> Electronics Instrumentation
                  and Control Engineering
                </li>
                <li>
                  <span class="strong">Nature of Job | </span> Research Work and
                  Teaching Assistant
                </li>
                <li>
                  <span class="strong">Responsibilities | </span> Research and
                  Development of a low-cost feto-maternal wellbeing monitoring device
                  using AI and ML algorithms.
                </li>
              </ul>
            </div>
    
            <div class="card-header">
              <span class="fs-7 strong">
                <i class="fas fa-briefcase"></i> Assistant Professor at Mewar University
              </span>
              <span class="float-end text-danger">Rajasthan, INDIA | June 2013 - June 2014</span>
              <ul class="description">
                <li>
                  <span class="strong">Department | </span> Electronics and
                  Communication Engineering
                </li>
                <li>
                  <span class="strong">Nature of Job | </span> Teaching and Academic
                </li>
                <li>
                  <span class="strong">Responsibilities | </span> Taught undergraduate
                  students as well as postgraduate students applied knowledge in the
                  areas of Embedded Electronics, Instrumentation and Research.
                  Established biomedical laboratory and taught students about human
                  physiology and their measurements.
                </li>
              </ul>
            </div>
            <div class="card-header border-0">
              <span class="fs-7 strong">
                <i class="fas fa-briefcase"></i> Placement Leader at Thapar University
              </span>
              <span class="float-end text-danger">Punjab, INDIA | June 2012 - June 2013</span>
              <ul class="description">
                <li>
                  <span class="strong">Department | </span>| Center for Industrial
                  Liasion & Placement (CILP)
                </li>
                <li>
                  <span class="strong">Nature of Job | </span> Arranges campus
                  interviews for placement of final year students of all branches by
                  inviting various Public Sector and Private organization. Closely
                  involved in Industry/Institute Interaction Programmes.
                </li>
              </ul>
            </div>
          </div>
    
          <div class="card border-primary shadow mb-1">
            <h6 class="card-header strong text-primary">
              <i class="fas fa-project-diagram"></i> PROJECTS
            </h6>
    
            <div class="card-header">
              <span class="fs-7 strong">
                <i class="fas fa-file-medical"></i> Feto-Maternal Monitoring System
              </span>
              <span class="float-end text-danger">AICTE, GoI Funded Project</span>
              <ul class="description">
                <li><span class="strong">Ph.D. Research Work </span></li>
                <li>
                  <span class="strong">Abstract | </span> Designed and developed a
                  real-time multi-parameter monitoring system at an affordable cost
                  which provides a means of feto-maternal surveillance in high-risk
                  pregnancies. Implemented health telemonitoring using smartphone
                  applications and Internet/Cloud services which greatly improves the
                  reach of pregnant women to the healthcare services and also helps in
                  patient-specific database generation.
                </li>
              </ul>
            </div>
    
            <div class="card-header border-0">
              <span class="fs-7 strong">
                <i class="fas fa-file-medical-alt"></i> Stress Detection of Automobile
                Drivers
              </span>
              <span class="float-end text-danger">Thapar University</span>
              <ul class="description">
                <li><span class="strong">M.E. Research Work </span></li>
                <li>
                  <span class="strong">Abstract | </span> In order to minimize human
                  error while driving, we can monitor stress and fatigue by measuring
                  physiological parameters like ElectroCardioGram (ECG), ElectroMyoGram
                  (EMG), Skin Conductance (SC) also called as Galvanic Skin Response
                  (GSR) and Respiration Rate (RR) continuously over a period of time.
                  Hence, designed and developed a stress level prediction algorithm for
                  automobile drivers using neural networks.
                </li>
              </ul>
            </div>
          </div>
    
    
          <div class="card border-primary shadow mb-1">
            <h6 class="fs-7 card-header strong text-primary">
              <i class="fas fa-user-tie"></i> PERSONAL INFORMATION
            </h6>
    
            <div class="card-header border-0 py-0">
              <ul class="description">
                <li>
                  <i class="fas fa-phone"></i>
                  <small class="fs-9">+91 9815810631</small>
                </li>
                <li>
                  <i class="fas fa-envelope"></i>
                  <small class="fs-9">abdullahbinqueyam@gmail.com</small>
                </li>
                <li>
                  <i class="fab fa-google"></i>
                  <small class="fs-9">scholar.google.co.in/citations?user=bothSAIAAAAJ</small>
                </li>
                <li>
                  <i class="fab fa-researchgate"></i>
                  <small class="fs-9">researchgate.net/profile/Abdullah_Bin_Queyam</small>
                </li>
                <li>
                  <i class="fab fa-linkedin-in"></i>
                  <small class="fs-9">linkedin.com/in/abdullah‑bin‑queyam‑39192414</small>
                </li>
                <li>
                  <i class="fas fa-id-card"></i>
                  <small class="fs-9">orcid.org/0000‑0003‑1393‑872X</small>
                </li>
                <li>
                  <i class="fab fa-internet-explorer"></i>
                  <small class="fs-9">https://www.inkredibledoc.com</small>
                </li>
              </ul>
            </div>
          </div>
    
          <div class="card border-primary shadow mb-1">
            <h6 class="fs-7 card-header strong text-primary">
              <i class="fas fa-graduation-cap"></i> EDUCATION
            </h6>
    
            <div class="card-header">
              <span class="fs-8 strong">
                <i class="fas fa-user-graduate"></i> Ph.D. in Electronics
                Instrumentation and Control
              </span>
              <ul class="description">
                <li><span class="strong">University | </span> NIT Jalandhar, INDIA</li>
                <li><span class="strong">Duration | </span> 2014 - 2018</li>
              </ul>
            </div>
    
            <div class="card-header">
              <span class="fs-8 strong">
                <i class="fas fa-user-graduate"></i> M.E. in Electronics Instrumentation
                and Control
              </span>
              <ul class="description">
                <li>
                  <span class="strong">University | </span> Thapar University, INDIA
                </li>
                <li><span class="strong">Duration | </span> 2011 - 2013</li>
              </ul>
            </div>
    
            <div class="card-header border-0">
              <span class="fs-8 strong">
                <i class="fas fa-user-graduate"></i> B.Tech. in Electronics
                Instrumentation and Control
              </span>
              <ul class="description">
                <li><span class="strong">University | </span> RTU, Kota, INDIA</li>
                <li><span class="strong">Duration | </span> 2006 - 2010</li>
              </ul>
            </div>
          </div>
    
          <div class="card border-primary shadow mb-1">
            <h6 class="fs-7 card-header strong text-primary">
              <i class="fas fa-laptop-code"></i> TECHNICAL SKILLS
            </h6>
    
            <div class="card-header border-0 py-0">
              <ul class="description">
                <li>JavaScript/React</li>
                <li>Python</li>
                <li>LabVIEW/MATLAB</li>
                <li>HTML/PHP/CSS</li>
                <li>MIT-AppInventor</li>
              </ul>
            </div>
          </div>
    
          <div class="card border-primary shadow mb-1">
            <h6 class="fs-7 card-header strong text-primary">
              <i class="fas fa-user-tie"></i> PROFESSIONAL SKILLS
            </h6>
    
            <div class="card-header border-0 py-0">
              <ul class="description">
                <li>Effective communication</li>
                <li>Team player</li>
                <li>Strong problem solver</li>
                <li>Good time management</li>
              </ul>
            </div>
          </div>
    
          <div class="card border-primary shadow mb-1">
            <h6 class="fs-7 card-header strong text-primary">
              <i class="fas fa-language"></i> LANGUAGES
            </h6>
    
            <div class="card-header border-0 py-0">
              <ul class="description">
                <li><strong>English</strong> | (Full business proficiency)</li>
                <li><strong>Hindi</strong> | (Native proficiency)</li>
              </ul>
            </div>
          </div>
    
          <div class="card border-primary shadow mb-1">
            <h6 class="card-header strong text-primary">
              <i class="fas fa-book"></i> BOOK CHAPTERS
            </h6>
    
            <div class="card-header border-0">
              <li>
                <span>
                  R. Kumar, S. K. Pahuja, A. Sengupta, <strong>A. B. Queyam</strong> ,
                  “Electrical Impedance Tomography: A Real Time Medical Imaging
                  Technique,” Handbook of Research on Advanced Concepts in Real‑Time
                  Image and Video Processing, IGI Global Publisher, Ch. 6. pp 130‑152,
                  August 2017. [SCOPUS INDEXiNG]
                </span>
                <span class="float-end text-danger">AUG. 2017</span>
              </li>
            </div>
          </div>
    
          <div class="card border-primary shadow mb-1">
            <h6 class="card-header text-primary strong">
              <i class="fas fa-chart-line"></i> INTERNATIONAL CONFERENCES
            </h6>
    
            <div class="card-header">
              <li>
                <span>
                  <strong>A. B. Queyam</strong> , Ramesh Kumar Meena, S. K. Pahuja and
                  D. Singh, “An IoT based Multi‑Parameter Data Acquisition System for
                  Eff icient Bio‑Telemonitoring of Pregnant Women at Home,” 8th Interna‑
                  tional Conference CONFLUENCE–2018 on Cloud Computing, Data Science &
                  Engineering, 2018.
                </span>
                <span class="float-end text-danger">JAN. 2018</span>
              </li>
            </div>
    
            <div class="card-header">
              <li>
                <span>
                  Ramesh Kumar, Sharvan Kumar, <strong>A. B. Queyam</strong> and A.
                  Sengupta “An Experimental validation of Bio‑impedance Technique for
                  medical & non‑medical Application,” 8th International Conference
                  CONFLUENCE–2018 on Cloud Computing, Data Science & Engineering,
                  2018.</span>
                <span class="float-end text-danger">JAN. 2018</span>
              </li>
            </div>
    
            <div class="card-header border-0">
              <li>
                <span>
                  <strong>A. B. Queyam</strong>, S.K.Pahuja, D.Singh,
                  “Fetalwell‑beingPredictionUsingSimulationofMarkovBased Mathematical
                  Model,” Indian Journal of Physiology and Pharmacology ‑ Supplement,
                  APPICON 2015, AIIMS Jodhpur , 59(5), 2015.</span><span class="float-end text-danger">DEC. 2015</span>
              </li>
            </div>
          </div>
    
          <div class="card border-primary shadow mb-1">
            <h6 class="card-header text-primary strong">
              <i class="fas fa-chart-line"></i> INTERNATIONAL JOURNALS
            </h6>
    
            <div class="card-header">
              <li>
                <span>
                  <strong>A. B. Queyam</strong>, S. K. Pahuja, and D. Singh, “Doppler
                  Ultrasound Based Non‑Invasive Heart Rate Tele‑ monitoring System for
                  Wellbeing Assessment,” International Journal of Intelligent Systems
                  and Ap‑ plications (IJISA), vol. 10, no. 12, pp. 69‑79, Dec. 2018.
                  [SCOPUS INDEXING]
                </span>
                <span class="float-end text-danger">DEC. 2018</span>
              </li>
            </div>
    
            <div class="card-header">
              <li>
                <span>
                  <strong>A. B. Queyam</strong>, S. K. Pahuja, and D. Singh,
                  “Quantification of Feto‑Maternal Heart Rate from Abdom‑ inal ECG
                  Signal Using Empirical Mode Decomposition for Heart Rate Variability
                  Analysis,” MDPI, Technologies, 5(4), 68, 2017. [WEB OF SCIENCE,
                  ESCI]</span>
                <span class="float-end text-danger">OCT. 2017</span>
              </li>
            </div>
            <div class="card-header">
              <li>
                <span>
                  <strong>A. B. Queyam</strong>, S. K. Pahuja, and D. Singh,
                  “Non‑Invasive Feto‑Maternal Well‑Being Monitoring: A Review of
                  Methods,” Journal of Engineering Science and Technology Review
                  (JESTR), vol. 6, no. 5, pp. 7–14, Mar. 2017. [UGC APPROVED, SCOPUS
                  INDEXING]</span>
                <span class="float-end text-danger">MAR. 2017</span>
              </li>
            </div>
            <div class="card-header">
              <li>
                <span>
                  <strong>A. B. Queyam</strong>, S. K. Pahuja, and D. Singh, “Simulation
                  and Analysis of Umbilical Blood Flow us‑ ing Markov‑based Mathematical
                  Model,” International Journal of Intelligent Systems and Applications
                  (IJISA), vol. 9, no. 3, pp. 41–50, Mar. 2017. [UGC APPROVED, SCOPUS
                  INDEXING]</span>
                <span class="float-end text-danger">MAR. 2017</span>
              </li>
            </div>
            <div class="card-header">
              <li>
                <span>
                  <strong>A. B. Queyam</strong>, S. K. Pahuja, and D. Singh,
                  “LabVIEW‑based Virtual Instrument for Simulation of Doppler Blood Flow
                  Velocimetry of Umbilical Artery,” Journal of Instrumentation
                  Technology & Inno‑ vation (JoITI), vol. 6, no. 1, pp. 1–9, 2016. [UGC
                  APPROVED]</span>
                <span class="float-end text-danger">FEB. 2016</span>
              </li>
            </div>
            <div class="card-header">
              <li>
                <span>
                  M. Singh and <strong>A. B. Queyam</strong>, “A Novel Method of Stress
                  Detection using Physiological Measure‑ ments of Automobile Drivers,”
                  International Journal of Electronics Engineering (IJEE), no. 2, pp.
                  13–20, 2013. [UGC APPROVED, ICI INDEXING]</span>
                <span class="float-end text-danger">DEC. 2013</span>
              </li>
            </div>
            <div class="card-header">
              <li>
                <span>
                  M. Singh and <strong>A. B. Queyam</strong>, “Correlation between
                  Physiological Parameters of Automobile Drivers and Traff ic Conditions
                  ,” International Journal of Electronics Engineering (IJEE), no. 2, pp.
                  6–12, 2013. [UGC APPROVED, ICI INDEXING]</span>
                <span class="float-end text-danger">DEC. 2013</span>
              </li>
            </div>
    
            <div class="card-header border-0">
              <li>
                <span>
                  M. Singh and <strong>A. B. Queyam</strong>,“Stress Detection in
                  Automobile Drivers using Physiological Param‑ eters: A Review,”
                  International Journal of Electronics Engineering (IJEE), no. 2, pp.
                  1–5, 2013. [UGC APPROVED, ICI INDEXING]</span><span class="float-end text-danger">DEC. 2013</span>
              </li>
            </div>
          </div>
    
          <div class="card border-primary shadow mb-1">
            <h6 class="fs-7 card-header strong text-primary">
              <i class="fas fa-book"></i> SUBJECTS TAUGHT
            </h6>
    
            <div class="card-header border-0 py-0">
              <ul class="description">
                <li>Physiological Control Systems</li>
                <li>Neural Networks</li>
                <li>Digital Image Processing</li>
                <li>Fuzzy Logic Control</li>
                <li>Control System</li>
                <li>Biomedical Instrumentation</li>
                <li>Measurement and Instrumentation</li>
                <li>Communication Systems</li>
                <li>Digital Electronics</li>
                <li>Virtual Instrumentation</li>
                <li>Microprocessors and Microcontrollers</li>
              </ul>
            </div>
          </div>
    
          <div class="card border-primary shadow mb-1">
            <h6 class="fs-7 card-header text-primary strong">
              <i class="fas fa-rupee-sign"></i> FELLOWSHIPS AND GRANTS
            </h6>
    
            <div class="card-header">
              <li>
                <span>
                  Recieved MHRD, Govt. of India Fellowship for Full‑Time Ph.D. Program.
                </span>
                <span class="float-end text-danger">2014 – 2018</span>
              </li>
            </div>
    
            <div class="card-header">
              <li>
                <span>
                  Recieved a Project Grant from TEQIP‑II (MHRD) for project titled
                  “Feto‑Maternal Monitoring System” Under Enhancement of R & D and
                  Institutional Consultancy Activity. Reference No.
                  NITJ/TEQIP‑II/R&D/1825, Dated: 24–11–2015</span>
                <span class="float-end text-danger">2016 – 2017</span>
              </li>
            </div>
    
            <div class="card-header border-0">
              <li>
                <span>Recieved MHRD, Govt. of India Fellowship for Full‑Time M.E.
                  Program.</span><span class="float-end text-danger">2011 – 2013</span>
              </li>
            </div>
          </div>
    
          <div class="card border-primary shadow mb-1">
            <h6 class="fs-7 card-header strong text-primary">
              <i class="fas fa-award"></i> ACADEMIC ACHIEVEMENTS
            </h6>
    
            <div class="card-header">
              <li>
                <span>
                  GATE (Graduate Aptitude Test in Engineering) qualified.
                  (AIR–863)</span>
                <span class="float-end text-danger">2010</span>
              </li>
            </div>
    
            <div class="card-header">
              <li>
                <span>Ranked 2ⁿᵈ in Electronics Instrumentation and Control Engineering
                  (EIC) Department in B.Tech Uni‑ versity Examination.</span><span class="float-end text-danger">2010</span>
              </li>
            </div>
            <div class="card-header border-0">
              <li>
                <span>Passed the Certificate ’A’ Examination of National Cadet Corps (NCC)
                  ’Army Wing’ and scored ’B’ Grade.</span><span class="float-end text-danger">2001</span>
              </li>
            </div>
          </div>
    
          <div class="card border-primary shadow mb-1">
            <h6 class="card-header strong text-primary">
              <i class="fs-7 fas fa-snowboarding"></i> EXTRACURRICULAR
            </h6>
    
            <div class="card-header">
              <li>Placement Leader of the THAPAR PLACEMENT COUNCIL 2013.</li>
            </div>
    
            <div class="card-header">
              <li>
                Participated in Summer Sports Coaching Camp in Cricket organized by
                Atomic Energy Central School (AECS),in collaborationwithDepartmentof
                AtomicEnergy (DAE)SportsandCulturalCouncil, Mumbai.
              </li>
            </div>
            <div class="card-header border-0">
              <li>Winner of Basketball ‘Senior Group’ Team in AECS, Rawatbhata.</li>
            </div>
          </div>
    
          <div class="card border-primary shadow mb-1">
            <h6 class="card-header text-primary strong">
              <i class="fas fa-chart-line"></i> SHORT‑TERM COURSE/WORKSHOPS ORGANIZED
            </h6>
    
            <div class="card-header">
              <li>
                <span>
                  Organized Two‑days Workshop on Python and its Application under the
                  scheme of Consolidation of University Research for Innovation and
                  Excellence‑Artificial Intelligence by DST,Govt. of India, at School of
                  Automation, Banasthali Vidyapith, Rajasthan, INDIA.</span>
                <span class="float-end text-danger">JAN. 2020</span>
              </li>
            </div>
    
            <div class="card-header">
              <li>
                <span>
                  Organized Four‑days Workshop on Python and its Application in Machine
                  Learning under the scheme of Consolidation of University Research for
                  Innovation and Excellence‑Artificial Intelligence by DST, Govt. of
                  India, at School of Automation, Banasthali Vidyapith, Rajasthan,
                  INDIA.</span>
                <span class="float-end text-danger">DEC. 2019</span>
              </li>
            </div>
    
            <div class="card-header">
              <li>
                <span>
                  Organized One‑week Training Programme on Emerging Trends in Science
                  Education: Robotics and Automation in association with Center of
                  Excellence in Science and Mathematics Education (CESME), at School of
                  Automation, Banasthali Vidyapith, Rajasthan, INDIA.</span>
                <span class="float-end text-danger">MAR. 2019</span>
              </li>
            </div>
    
            <div class="card-header">
              <li>
                <span>
                  Organized One‑week TEQIP‑II Sponsored Short Term Course on Recent
                  Trends in Instrumentation and Control Engineering (RTICE), in
                  Department of Instrumentation and Control Engineering, Dr. B R
                  Ambedkar National Institute of Technology Jalandhar, Punjab,
                  INDIA.</span>
                <span class="float-end text-danger">DEC. 2014</span>
              </li>
            </div>
    
            <div class="card-header border-0">
              <li>
                <span>
                  Organized Two‑days Workshop on Android Technology, in collaboration
                  with Inspiration Technolo‑ gies, Faridabad, Haryana, at Mewar
                  University, Chittorgarh, Rajasthan, INDIA.</span><span class="float-end text-danger">DEC. 2013</span>
              </li>
            </div>
          </div>
    
          <div class="card border-primary shadow mb-1">
            <h6 class="card-header text-primary strong">
              <i class="fas fa-chart-line"></i> SHORT‑TERM COURSE/WORKSHOP/SEMINAR
              ATTENDED
            </h6>
    
            <div class="card-header">
              <li>
                <span>
                  Participated in One‑week Short Term Course on Artificial Intelligence:
                  Theories Techniques and Ap‑ plications, organized by Centre for
                  Artificial Intelligence, Banasthali Vidyapith, Rajasthan, INDIA.</span>
                <span class="float-end text-danger">JAN. 2020</span>
              </li>
            </div>
    
            <div class="card-header">
              <li>
                <span>
                  Participated in One‑week Faculty Development Programme on Innovation
                  and Research Trends in Artificial Intelligence, organized by Centre
                  for Artificial Intelligence, Banasthali Vidyapith, Rajasthan,
                  INDIA.</span>
                <span class="float-end text-danger">OCT. 2019</span>
              </li>
            </div>
    
            <div class="card-header">
              <li>
                <span>
                  Attended One‑month 3rd Induction Training Programme, under the scheme
                  of PMMMNMTT spon‑ sored by MHRD, Govt. of India, at Banasthali
                  Vidyapith, Rajasthan, INDIA.</span>
                <span class="float-end text-danger">DEC. 2018</span>
              </li>
            </div>
    
            <div class="card-header">
              <li>
                <span>
                  Attended GIAN (MHRD) International Summer‑Term Course on Medical
                  Textiles and Tissue Engineer‑ ing, organised by Department of Textile
                  Technology, Dr. B R Ambedkar National Institute of Technology
                  Jalandhar, Punjab, INDIA.</span>
                <span class="float-end text-danger">JUL. 2016</span>
              </li>
            </div>
    
            <div class="card-header">
              <li>
                <span>
                  Attended One‑week TEQIP‑II Sponsored Short Term Course on Recent
                  Trends in Soft ware Engineer‑ ing and Knowledge Mining (RTSEKM),
                  organised by Department of Computer Science and Engineer‑ ing, Dr. B R
                  Ambedkar National Institute of Technology Jalandhar, Punjab,
                  INDIA.</span>
                <span class="float-end text-danger">JUN. 2015</span>
              </li>
            </div>
    
            <div class="card-header">
              <li>
                <span>
                  Attended One‑week Summer School on Image Processing (SSIP), organised
                  by Department of Com‑ puter Engineering, National Institute of
                  Technology Kurukshetra, Haryana, INDIA.</span>
                <span class="float-end text-danger">JUN. 2015</span>
              </li>
            </div>
    
            <div class="card-header">
              <li>
                <span>
                  Attended One‑week Short‑Term Course on Electronics and Communication
                  System Design Aspects, organised by Department of Electronics and
                  Communication Engineering, Dr. B R Ambedkar National Institute of
                  Technology Jalandhar, Punjab, INDIA.</span>
                <span class="float-end text-danger">MAY. 2015</span>
              </li>
            </div>
    
            <div class="card-header">
              <li>
                <span>
                  Attended One‑week TEQIP‑II Sponsored Training Program on Emerging
                  Trends of Research in Elec‑ tronics and Communication, organised by
                  Department of Electronics and Communication Engineer‑ ing, Dr. B R
                  Ambedkar National Institute of Technology Jalandhar, Punjab,
                  INDIA.</span>
                <span class="float-end text-danger">DEC. 2014</span>
              </li>
            </div>
    
            <div class="card-header">
              <li>
                <span>
                  Attended One‑week TEQIP‑II Sponsored Short Term Course on Recent
                  Trends in Instrumentation and Control Engineering (RTICE), organised
                  by Department of Instrumentation and Control Engineering, Dr. B R
                  Ambedkar National Institute of Technology Jalandhar, INDIA.</span>
                <span class="float-end text-danger">DEC. 2014</span>
              </li>
            </div>
    
            <div class="card-header">
              <li>
                <span>
                  Attended One‑day Workshop on Filter Media Characterization and
                  Technology Transfer Events (FM‑ CTTE), organised by Department of
                  Textile Technology, Dr. B R Ambedkar National Institute of Tech‑
                  nology Jalandhar, Punjab, INDIA.</span>
                <span class="float-end text-danger">DEC. 2014</span>
              </li>
            </div>
    
            <div class="card-header">
              <li>
                <span>
                  Attended Two‑week ISTE Workshop held under the National Mission on
                  Education through ICT (MHRD) on Signals and Systems, conducted by
                  Indian Institute of Technology Kharagpur (IITK), West Bengal,
                  INDIA.</span>
                <span class="float-end text-danger">JAN. 2014</span>
              </li>
            </div>
    
            <div class="card-header border-0">
              <li>
                <span>
                  Attended Two‑day Faculty Training Program on NuMicro ARM Cortex‑M0 and
                  its Applications, organ‑ ised in collaboration with Nuvoton Technology
                  Corporation (NTC), Taiwan at University Institute of Engineering and
                  Technology (UIET), Punjab University, Chandigarh, INDIA.</span><span class="float-end text-danger">JAN.
                  2014</span>
              </li>
            </div>
          </div>
    
        </div>
      </section>
    </body>
    
    </html>
    `;
  }
}

customElements.define("resume-component", Resume);
