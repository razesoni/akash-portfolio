/**
 * ============================================================
 *  PORTFOLIO DATA — edit this file to update your content.
 *  Nothing in css/ or the rendering logic in main.js needs to
 *  change when you edit the values below.
 * ============================================================
 */

const portfolioData = {

  /* ---------------------------------------------------------
   *  PERSONAL
   * ------------------------------------------------------- */
  personal: {
    name: "[YOUR NAME]",
    role: "Data Scientist & Machine Learning Enthusiast",
    tagline: "I build data-driven applications, machine learning solutions, and intelligent systems that solve real-world problems.",
    location: "[YOUR LOCATION]",
    email: "[YOUR EMAIL]",
    profileImage: "assets/images/profile.jpg",
    resume: "assets/resume/resume.pdf",
    availability: "Open to Opportunities",
    aboutParagraphs: [
      "I'm a final-year B.Tech student who spends more time in Jupyter notebooks than I probably should, currently focused on data science, machine learning, and building software that actually gets used rather than just demoed.",
      "I like the part of a project where messy, real-world data slowly turns into something a model — or a person — can act on. Cleaning a dataset until it finally makes sense is oddly satisfying.",
      "Right now I'm strengthening my foundations in machine learning, data analysis, backend development, and applied AI, while shipping small end-to-end projects instead of only reading about them."
    ],
    quickFacts: [
      { label: "Education", value: "B.Tech" },
      { label: "Specialization", value: "Data Science / AI" },
      { label: "Location", value: "[YOUR LOCATION]" },
      { label: "Focus", value: "ML · Data Science · AI" },
      { label: "Hobbies", value: "Art & Illustration" },
      { label: "Availability", value: "Open to Opportunities" }
    ]
  },

  /* ---------------------------------------------------------
   *  SOCIAL / PROFILES
   *  Leave a value empty ("") to hide that link automatically.
   * ------------------------------------------------------- */
  social: {
    github: "[GITHUB URL]",
    linkedin: "[LINKEDIN URL]",
    email: "[YOUR EMAIL]",
    kaggle: "[KAGGLE URL]",
    leetcode: "",
    hackerrank: "",
    codechef: ""
  },

  /* ---------------------------------------------------------
   *  SKILLS
   * ------------------------------------------------------- */
  skills: {
    programming: ["Python", "JavaScript", "SQL", "C / C++"],
    dataScience: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
    machineLearning: ["Regression", "Classification", "Clustering", "Feature Engineering", "Model Evaluation", "Hyperparameter Tuning"],
    ai: ["LLMs", "RAG", "Embeddings", "Whisper", "Generative AI", "NLP"],
    webDevelopment: ["HTML", "CSS", "JavaScript", "Flask", "Django", "REST APIs"],
    tools: ["Git", "GitHub", "Jupyter", "VS Code", "Docker", "Postman"]
  },

  /* Icon key must match a name defined in ICONS inside js/main.js */
  skillCategoryMeta: {
    programming:     { title: "Programming",        icon: "code-2" },
    dataScience:      { title: "Data Science",        icon: "bar-chart-3" },
    machineLearning:  { title: "Machine Learning",     icon: "brain-circuit" },
    ai:               { title: "AI / NLP",             icon: "sparkles" },
    webDevelopment:    { title: "Web Development",      icon: "layout-grid" },
    tools:            { title: "Tools",                icon: "wrench" }
  },

  /* ---------------------------------------------------------
   *  PROJECTS
   *  filterTags values power the filter bar. Add/remove
   *  projects freely — the UI renders whatever is here.
   * ------------------------------------------------------- */
  projectFilters: ["All", "Data Science", "Machine Learning", "AI", "Web Development", "Analytics"],

  projects: [
    {
      title: "Housing Price Prediction",
      description: "[PROJECT DESCRIPTION] — a regression project that predicts housing prices from property-related features such as location, size, and amenities.",
      image: "assets/images/project-housing.jpg",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
      filterTags: ["Machine Learning", "Data Science"],
      keyFeatures: [
        "End-to-end pipeline from raw data to trained model",
        "Feature engineering and outlier handling",
        "Comparison of multiple regression algorithms"
      ],
      github: "[GITHUB REPO URL]",
      liveDemo: "",
      featured: true,
      details: {
        problem: "[PROBLEM STATEMENT]",
        approach: "[YOUR APPROACH]",
        dataset: "[DATASET SOURCE]",
        preprocessing: "[PREPROCESSING STEPS]",
        eda: "[KEY EDA FINDINGS]",
        model: "[MODEL / ARCHITECTURE USED]",
        results: "[RESULTS]",
        insights: "[KEY INSIGHTS]"
      }
    },
    {
      title: "RAG-Based AI Teaching Assistant",
      description: "[PROJECT DESCRIPTION] — an AI-powered application that converts lecture audio into text and uses retrieval-augmented generation to answer questions with context-aware responses.",
      image: "assets/images/project-rag.jpg",
      technologies: ["Python", "Whisper", "LLMs", "RAG", "Embeddings"],
      filterTags: ["AI", "Machine Learning"],
      keyFeatures: [
        "Audio-to-text transcription pipeline",
        "Vector search over lecture transcripts",
        "Context-aware question answering"
      ],
      github: "[GITHUB REPO URL]",
      liveDemo: "[LIVE DEMO URL]",
      featured: true,
      details: {
        problem: "[PROBLEM STATEMENT]",
        approach: "[YOUR APPROACH]",
        dataset: "[DATASET SOURCE]",
        preprocessing: "[PREPROCESSING STEPS]",
        eda: "[KEY EDA FINDINGS]",
        model: "[MODEL / ARCHITECTURE USED]",
        results: "[RESULTS]",
        insights: "[KEY INSIGHTS]"
      }
    },
    {
      title: "Game Analytics Dashboard",
      description: "[PROJECT DESCRIPTION] — an interactive dashboard analyzing player behavior, retention, monetization, and engagement metrics.",
      image: "assets/images/project-dashboard.jpg",
      technologies: ["Python", "Pandas", "Plotly", "Flask"],
      filterTags: ["Analytics", "Web Development"],
      keyFeatures: [
        "Interactive filters across time ranges and cohorts",
        "Retention and funnel visualizations",
        "Lightweight Flask backend serving processed metrics"
      ],
      github: "[GITHUB REPO URL]",
      liveDemo: "[LIVE DEMO URL]",
      featured: true,
      details: {
        problem: "[PROBLEM STATEMENT]",
        approach: "[YOUR APPROACH]",
        dataset: "[DATASET SOURCE]",
        preprocessing: "[PREPROCESSING STEPS]",
        eda: "[KEY EDA FINDINGS]",
        model: "[MODEL / ARCHITECTURE USED]",
        results: "[RESULTS]",
        insights: "[KEY INSIGHTS]"
      }
    }

    /* Add more project objects here. Set featured: true to pin
       a project to the top row. Anything beyond the first four
       is tucked behind "View All Projects". */
  ],

  /* ---------------------------------------------------------
   *  EXPERIENCE
   *  Leave the array empty to show the "currently building
   *  practical projects" fallback message instead.
   * ------------------------------------------------------- */
  experience: [
    /* Example — replace or remove:
    {
      role: "Machine Learning Intern",
      company: "[COMPANY NAME]",
      duration: "[Month Year] – [Month Year]",
      location: "[LOCATION]",
      description: "[ROLE DESCRIPTION]",
      technologies: ["Python", "Scikit-learn"],
      achievements: [
        "[ACHIEVEMENT]",
        "[ACHIEVEMENT]"
      ]
    }
    */
  ],

  /* ---------------------------------------------------------
   *  EDUCATION
   * ------------------------------------------------------- */
  education: [
    {
      degree: "B.Tech in [Specialization]",
      institution: "[COLLEGE NAME]",
      duration: "[Start Year] – [End Year]",
      score: "", // e.g. "CGPA: 0.00 / 10" — leave blank to hide
      coursework: [
        "Machine Learning",
        "Data Structures",
        "Database Management",
        "Statistics",
        "Artificial Intelligence",
        "Web Development"
      ]
    }
  ],

  /* ---------------------------------------------------------
   *  CERTIFICATIONS
   *  Leave the array empty to hide this section entirely.
   * ------------------------------------------------------- */
  certifications: [
    /* Example — replace or remove:
    {
      name: "[Certification Name]",
      organization: "[Issuing Organization]",
      date: "[Year]",
      credentialId: "",
      url: ""
    }
    */
  ],

  /* ---------------------------------------------------------
   *  ACHIEVEMENTS
   *  Leave empty to hide this section entirely.
   * ------------------------------------------------------- */
  achievements: [
    /* Example — replace or remove:
    { title: "[Achievement]", context: "[Hackathon / Competition / Kaggle / etc.]", date: "[Year]" }
    */
  ]
};
