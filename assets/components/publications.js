class Publications extends HTMLElement {
  constructor() {
    super();
    this.items = [
      {
        id: "paper1",
        category: "Journal",
        title:
          "Quantiﬁcation of Feto-Maternal Heart Rate from Abdominal ECG Signal Using Empirical Mode Decomposition for Heart Rate Variability Analysis",
        abstract:
          "In this paper, a robust method of feto-maternal heart rate extraction from the non-invasive composite abdominal Electrocardiogram (aECG) signal is presented. The proposed method is based on the Complete Ensemble Empirical Mode Decomposition with Adaptive Noise (CEEMDAN) method, in which a composite aECG signal is decomposed into its constituent frequency components called Intrinsic Mode Functions (IMFs) or simply “modes”, with better spectral separation. Decomposed IMFs are then selected manually according to probable maternal and fetal heart rate information and are processed further for quantification of maternal and fetal heart rate and variability analysis. The proposed method was applied to aECG recordings collected from three different sources: (i) the PhysioNet (adfecgdb) database; (ii) the PhysioNet (nifecgdb) database; and (iii) synthetic aECG signal generated from mathematical modeling in the LabVIEW software environment. An overall sensitivity of 98.83%, positive diagnostic value of 97.97%, accuracy of 96.93% and performance index of 96.75% were obtained in the case of Maternal Heart Rate (MHR) quantification, and an overall sensitivity of 98.13%, positive diagnostic value of 97.62%, accuracy of 95.91% and performance index of 95.69% were obtained in case of Fetal Heart Rate (FHR) quantification. The obtained results confirm that CEEMDAN is a very robust and accurate method for extraction of feto-maternal heart rate components from aECG signals. We also conclude that non-invasive aECG is an effective and reliable method for long-term FHR and MHR monitoring during pregnancy and labor. The requirement of manual intervention while selecting the probable maternal and fetal components from “n” number of decomposed modes limits the real-time application of the proposed methodology. This is due to the fact that the number of modes “n” produced by the CEEMDAN decomposition is unpredictable. However, the proposed methodology is well suited for applications where a small time-delay or offset in feto-maternal monitoring can be acceptable. In future, application-specific modification of the CEEMDAN algorithm can be implemented to eliminate manual intervention completely and will be suitable for long-term feto-maternal monitoring.",
        year: "2017",
        path: "https://www.mdpi.com/2227-7080/5/4/68",
        image: "paper-1",
      },
      {
        id: "paper2",
        category: "Journal",
        title:
          "LabVIEW-based Virtual Instrument for Simulation of Doppler Blood Flow Velocimetry of Umbilical Artery",
        abstract:
          "Doppler blood flow velocimetry has become a routine practice for fetal surveillance in highrisk pregnancies. Doppler assessment of various fetal vascular beds helps in determining the relationship between fetal circulation and associated fetal conditions like hypoxia, brainsparing effect and growth restriction. The umbilical artery, uterine artery and middle cerebral artery are three most studied vascular beds for fetal surveillance. In our research we are focused only on the umbilical artery since, abnormal umbilical artery velocimetric findings is a direct indication of an elevated value of resistance to the blood flow in the placenta. To better understand this relationship we have constructed a mathematical model of fetoplacental circulation. A LabVIEW-based virtual instrument is also designed to simulate the model. The simulated waveform is similar to Doppler blood flow velocimetry of umbilical artery. Doppler indices (resistive index, systolic-to-diastolic ratio, pulsatility index) derived from simulated waveform revealed consistent relationship with advancing gestation as shown by real-time Doppler blood flow velocimetry of umbilical artery. Abnormal values of Doppler indices indicate complicated fetal conditions like intra-uterine growth restriction (IUGR).",
        year: "2016",
        path: "https://www.stmjournals.com/index.php?journal=JoITI&page=article&op=view&path%5B%5D=6823",
        image: "paper-2",
      },
      {
        id: "paper3",
        category: "Journal",
        title:
          "Simulation and Analysis of Umbilical Blood Flow using Markov-based Mathematical Model",
        abstract:
          "The intra-uterine development of the fetus depends on various factors, one such critical factor is umbilical blood flow because the quantity of oxygen delivered to the placenta and to the fetus is directly limited by umbilical blood flow rate. Since the measurement of the hemodynamic quantities such as blood pressure and blood flow rate is not possible in utero hence the use of patient-specific mathematical modeling is beneficial for the assessment of feto-maternal wellbeing. A Markov model based mathematical model of fetal circulation is developed by taking three node concept. The fetus, the umbilical cord, and the placenta represent the 3 nodes of Markov model. A LabVIEW-based virtual instrument is designed to simulate the mathematical model which results in waveform similar to Doppler blood flow velocimetry of umbilical artery. The model is simulated at various degree of conductivity of the umbilical cord to the oxygenated blood. Simulation results show that the umbilical artery blood flow velocity waveform depends on gestation age, fetal heart rate, uterine contraction and placental insufficiency. The Doppler indices calculated from simulation helps in predicting both fetal and maternal abnormalities at various degrees of the conductivity to the blood flow passage. Therefore, integrating patient-specific models along with established medical equipments will be helpful in identifying true intra-uterine growth restricted fetuses from normal fetuses and helps clinicians to take timely interventions.",
        year: "2017",
        path: "https://www.mecs-press.org/ijisa/ijisa-v9-n3/v9n3-6.html",
        image: "paper-3",
      },
      {
        id: "paper4",
        category: "Journal",
        title:
          "Non-Invasive Feto-Maternal Well-Being Monitoring: A Review of Methods",
        abstract:
          "Monitoring of fetal and maternal well-being is extremely critical during pregnancy and during labor to reduce the occurrence of fetal and maternal distress in high risk pregnancies. There are many approaches to identify and quantify the real-time feto-maternal well-being by measuring physiological parameters viz. fetal movement, fetal temperature, fetal respiration rate, fetal kick count, fetal heart rate, maternal ECG acquired from both chest and abdomen region, uterine contraction, blood SpO2 concentration, amniotic fluid pH etc. In this paper, different techniques to acquire and measure these physiological parameters non-invasively are evaluated and compared for the purpose of monitoring fetomaternal well-being.",
        year: "2017",
        path: "http://www.jestr.org/downloads/Volume10Issue1/fulltext251012017.pdf",
        image: "paper-4",
      },
      {
        id: "paper5",
        category: "Journal",
        title:
          "Doppler Ultrasound Based Non-Invasive Heart Rate Telemonitoring System for Wellbeing Assessment",
        abstract:
          "Telemonitoring in the field of healthcare has vastly improved the quality of clinical diagnosis and disease prevention by providing timely medical consultation to people living in rural and remote areas. To monitor the health state of a patient certain vital physiological parameter like electrocardiogram (ECG), respiration rate, blood pressure, oxygen saturation, etc. are acquired and analyzed. Listening to the heart sounds (auscultation) is also a quick method to monitor the health state of the patient’s heart. In this paper, we propose the use of a portable Doppler ultrasound sensor for measuring the heart sounds reliably and to transmit the data for further clinical telemonitoring. We have developed an ultrasound-based hardware prototype which is non-invasive in nature and easy to operate. Its portability, high accuracy, low cost, and wireless nature make this device suitable for home-based self-diagnostic applications. The developed prototype was successfully able to capture both fundamental heart sounds S1 and S2 reliably and transfer the signal wirelessly to the LabVIEW-based monitoring and data logging unit. This unit extracts clinically useful health information like heart rate (HR), RR interval and heart rate variability (HRV) using signal processing algorithms. Health information is then transmitted via the Internet to a distant hospital for further improved clinical diagnosis and consultancy. The prototype was validated on 40 healthy males in the age group of 25-35 years, and the results show an overall accuracy of 96.74% in HR detection when compared with an ECG sensor, a photoplethysmograph (PPG) sensor, a pulse oximeter device and",
        year: "2018",
        path: "https://www.mecs-press.net/ijisa/ijisa-v10-n12/v10n12-7.html",
        image: "paper-5",
      },
      {
        id: "paper6",
        category: "Conference",
        title:
          "An IoT Based Multi-Parameter Data Acquisition System for Efficient Bio-Telemonitoring of Pregnant Women at Home",
        abstract:
          "This paper presents a non-invasive, multi-parameter and real-time data acquisition system for reliable bio-telemonitoring of pregnant women for the assessment of feto-maternal wellbeing during pregnancy and labor. The working hardware prototype named Feto Maternal Care Unit (FMCU) is developed which consists of several biomedical sensors attached to the mother's body which collects bio-physiological signals like maternal respiration rate, maternal body temperature, abdominal ECG, fetal movement, photoplethysmogram (PPG) and phonocardiogram (PCG). National Instruments (NI) myRIO is employed for data acquisition and transmission of the acquired physiological signals wirelessly to a PC running NI LabViewsoftware for real-time signal visualization, processing and data logging. Various advanced signal processing algorithms like Empirical Mode Decomposition (EMD), Variational Mode Decomposition(VMD), Empirical Wavelet Transform (EWT), Fast Independent Component Analysis (FastICA), etc. are utilized for preprocessing, decomposition and feature extraction process. To assist patients in efficient bio-telemonitoring of the vital information, we have also developed an Android-based smartphone application that syncs the data directly to the cloud which can be accessed by an authorized doctor for further medical supervision and diagnosis. This proposed noninvasive and realtime system is well suited for home-based health monitoring of pregnant women's living in remote and underprivileged parts of India.",
        year: "2018",
        path: "https://ieeexplore.ieee.org/abstract/document/8442686",
        image: "paper-6",
      },
      {
        id: "paper7",
        category: "Conference",
        title:
          "An Experimental Validation of Bio-Impedance Technique for Medical & Non-Medical Application",
        abstract:
          "Presently, the main goals of medical research are to ameliorate the analytical instruments and tools, such as to evolve for long-term or real-time monitoring and non-invasive method. At present, numerous approaches have in the medical field, which is used noninvasively. But for long-time monitoring of patient, not suitable existing techniques. This limitation is overcome by presents a non-invasive bio-impedance based method, which is based electrical impedance tomography (EIT) and impedance plethysmography (IPG). It is a recently established technique by which impedance of an object is measured in form of outer potentials of the object and defined the internal impedance based image according to a numerically simulated reconstruction of the phantom. The bio-impedance based experiment presented here used a papaya as a phantom. When different current pulse applied across the papaya, different potential voltage is measured over all the electrode with the different current pulse on all the electrodes. In the end, an image reconstruction algorithm using FEM and Tikhonov method is presented. The objective of the algorithm was to produce an image from electrical impedance data and finally in the last phase 2-Dimensional image is obtained. EIT is a novel imaging technique, which is non-invasive, economic, and easy to use and understand for health care and also can be used for health worker and local community.",
        year: "2018",
        path: "https://ieeexplore.ieee.org/abstract/document/8442494",
        image: "paper-7",
      },
      {
        id: "paper8",
        category: "Book",
        title:
          "Electrical Impedance Tomography: A Real-Time Medical Imaging Technique",
        abstract:
          "Presently, non-invasive techniques are in vogue and preferred standard clinical approach because of its limitless advantages in monitoring real time phenomenon occurring within our human body without much interference. Many techniques such as ultrasound, magnetocardiography, CT scan, MRI etc., are used for real time monitoring but are generally not recommended for continuous monitoring. The limitations created by above used techniques are overcome by a proposed technique called non-invasive bio-impedance technique such as Electrical Impedance Technique (EIT). EIT imaging technique is based on internal electrical conductivity distribution of the body. The reconstruction of cross sectional image of resistivity required sufficient data collection by finite element method using MATLAB software. The EIT technique offers some benefits over other imaging modalities. It is economical, non-invasive, user friendly and emits no radiation thus appears to be one of the best fit technology for mass health care to be used by the basic health worker at a community level.",
        year: "2018",
        path: "https://www.igi-global.com/chapter/electrical-impedance-tomography/186276",
        image: "paper-8",
      },

      {
        id: "paper9",
        category: "Journal",
        title:
          "A Novel Method of Stress Detection using Physiological Measurements of Automobile Drivers",
        abstract:
          "Stress while driving is an important factor in many number of fatal road accidents worldwide. There has been much work done in driver stress detection. In this research, we present a method based on a correlation analysis and developed a mathematical function for the estimation of automobile driver stress level. The proposed methodology monitors driver’s stress level using features extracted from selected physiological parameters. The results obtained indicate a strong correlation between the stress level of driver and the stress function formed. Threshold approach is used to perform a classification of affective states as “Low Stress”,“Moderate Stress” and “High Stress” based on different traffic conditions. The stress function acts as a direct indicator of stress level of the automobile diver whose physiological parameters are monitored continuously under variable traffic conditions.",
        year: "2013",
        path: "https://csjournals.com/IJEE/PDF5-2/3.pdf",
        image: "paper-9",
      },

      {
        id: "paper10",
        category: "Journal",
        title:
          "Correlation between Physiological Parameters of Automobile Drivers and Traffic Conditions",
        abstract:
          "Driving a car is a complex cognitive process in which even a small lack of attention can have disastrous consequences. Various studies have been conducted in the past focusing mainly on the driver’s internal state (physical and emotional) like drowsiness, fatigue and mental stress as these are the major cause behind large number of fatal road accidents worldwide. The studies show that in most of the automobile driver’s Galvanic Skin Response (GSR) and Heart Rate (HR) parameters are more closely related to drivers stress level. The authors accessed raw physiological signals available at PHYSIONET website and then extract useful statistical features from these. The most relevant features were then selected using open source software. Removal of irrelevant features makes the stress detection model much faster and helps to gain a deeper insight into the underlying processes of stress detection and classification. Correlation analysis on the selected features showed that Mean HR and Mean Hand GSR are the two statistical features that have a very strong correlation with changing traffic conditions.",
        year: "2013",
        path: "https://csjournals.com/IJEE/PDF5-2/2.pdf",
        image: "paper-10",
      },

      {
        id: "paper11",
        category: "Journal",
        title:
          "Stress Detection in Automobile Drivers using Physiological Parameters: A Review",
        abstract:
          "In past few decades there is a steep increase in road accidents and loss of life was experienced mainly due to the increase in driver drowsiness, fatigue and mental stress. In order to minimize human error while driving, we can monitor stress and fatigue by measuring physiological parameters like ElectroCardioGram (ECG), ElectroMyoGram (EMG), Skin Conductance (SC) also called as Galvanic Skin Response (GSR) and Respiration Rate (RR) continuously over a period of time. The studies show that in most drivers’ skin conductivity and heart rate parameters are more closely related to drivers stress level. Autonomic Nervous System (ANS) primarily depends on emotional responses of the human body to the dynamic surrounding. Further it also controls the smooth muscles, heart muscle and secretion of the glands in human body. As a result of this fact, bio-signal recordings reflecting the operating condition of the physiological systems including the circulatory, respiratory, muscular and endocrine systems can provide useful information representing the dynamics of the internal states in human body. Therefore, it would be expected that the dynamic stress level of an automobile driver can be derived from those recordings.",
        year: "2013",
        path: "https://csjournals.com/IJEE/PDF5-2/1.pdf",
        image: "paper-11",
      },
    ];
  }

  connectedCallback() {
    this.render();
    this.addEventListener("click", this.handleItemClick.bind(this));
  }

  render() {
    this.innerHTML = `
      <section class="publications-section bg-primary bg-opacity-10">
      <title-component title="Publications"></title-component>       
        <div class="container py-5">          
            ${this.items
              .map((item, index) => this.generateAccordion(item, index))
              .join("")}          
        </div>
      </section>
    `;
  }

  generateAccordion({ category, title, abstract, year, path, image }) {
    return `
      <div class="card border border-primary shadow mb-4 rounded-2">
      <div class="accordion-item-header p-3 d-flex align-items-center" style="cursor: pointer; font-size: 1.2rem">
      <img
        src="assets/images/publications/${image}.jpg"
        alt="${title}"
        class="card-img-top border border-secondary shadow rounded-2 me-3"
        style="max-width: 100px; max-height: 200px;"
      />
      <span>
      <small class="badge bg-success rounded-pill mb-2">${category}</small>
        <h5 class="fw-bold mb-0">${title}</h5>   
        <small>${year}</small>             
      </span>
      <i class="fas fa-chevron-down ms-auto ps-3"></i>
    </div>
        <div class="accordion-item-content p-3 bg-primary bg-opacity-10" style="display: none;">
          <p>${abstract}</p>
          <a href="${path}" target="_blank" class="btn btn-primary">Read More</a>
        </div>
      </div>
    `;
  }

  handleItemClick(event) {
    const header = event.target.closest('.accordion-item-header');
    if (!header) return;
  
    const content = header.nextElementSibling;
  
    header.parentElement.classList.toggle('active');
    content.style.display = (content.style.display === 'block') ? 'none' : 'block';
  
    const icon = header.querySelector('i');
    icon.classList.toggle('fa-chevron-down');
    icon.classList.toggle('fa-chevron-up');
  }
}

customElements.define("publications-page", Publications);
