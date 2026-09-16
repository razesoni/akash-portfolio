const portfolioData = {
  personal: {
    name: "Akash Kumar Singh",
    role: "Data Scientist & Machine Learning Engineer",
    tagline: "I turn complex data into useful products—from retrieval systems and video intelligence to predictive models and product analytics.",
    location: "Jamshedpur, India",
    email: "akash27590@gmail.com",
    resume: "assets/resume/akash_resume.pdf",
    availability: "Open to internships and entry-level roles",
    about: "Final-year Computer Science student focused on applied machine learning, data products, and AI systems. I enjoy working across the full project lifecycle: shaping a problem, cleaning data, evaluating models, building APIs, and presenting results clearly."
  },
  social: {
    github: "https://github.com/razesoni",
    linkedin: "https://www.linkedin.com/in/akash-kumar-277750337",
    kaggle: "https://www.kaggle.com/razesoni"
  },
  capabilities: [
    { title: "Applied AI", skills: ["RAG", "LLMs", "Whisper", "Embeddings", "Semantic Search"] },
    { title: "Machine Learning", skills: ["Scikit-learn", "Feature Engineering", "Model Evaluation", "NLP", "Computer Vision"] },
    { title: "Data & Analytics", skills: ["Python", "Pandas", "NumPy", "SQL", "Product Analytics"] },
    { title: "Product Engineering", skills: ["FastAPI", "Flask", "REST APIs", "JavaScript", "Git", "Docker"] }
  ],
  training: [
    {
      role: "Vocational Trainee - AI Powered Data Analytics with Python & Advanced Excel",
      organization: "RAYS IT & Design World Pvt. Ltd.",
      location: "Raipur, Chhattisgarh",
      period: "June 2026 - July 2026",
      summary: "Applied Python, Pandas, NumPy, Advanced Excel, Power Query, and Power Pivot to data cleaning, exploratory analysis, and automated business reporting.",
      highlight: "Built the Freemium Gaming Monetization & Player Retention capstone with interactive dashboards and player behavior metrics."
    },
    {
      role: "Vocational Trainee - Web Development with Python & Django",
      organization: "RAYS IT & Design World Pvt. Ltd.",
      location: "Raipur, Chhattisgarh",
      period: "June 2025 - July 2025",
      summary: "Developed full-stack applications with Python, Django, relational databases, ORM patterns, and RESTful APIs.",
      highlight: "Structured backend models, views, and templates using standard software development lifecycle practices."
    }
  ],
  education: [
    { qualification: "B.Tech in Computer Science and Engineering", institution: "Bhilai Institute of Technology", location: "Raipur, Chhattisgarh", period: "2023 - 2027 (Expected)", result: "CGPA: 6.8" },
    { qualification: "Senior Secondary Examination (Class XII)", institution: "Vig English School", location: "Jamshedpur, Jharkhand", period: "2023", result: "88.0%" },
    { qualification: "Secondary School Examination (Class X)", institution: "Vig English School", location: "Jamshedpur, Jharkhand", period: "2021", result: "70.0%" }
  ],
  certifications: [
    { name: "The Ultimate Job Ready Data Science Course", issuer: "CodeWithHarry" },
    { name: "Complete 2025 Python Bootcamp", issuer: "CodeWithHarry" }
  ],
  projects: [
    {
      title: "AniSense AI", type: "AI Video Intelligence",
      description: "Transforms long videos into searchable knowledge with transcription, hybrid retrieval, reranking, timestamped insights, and multi-stage AI summaries.",
      impact: "Built a complete ingestion-to-search pipeline with production-minded validation and a FastAPI web experience.",
      technologies: ["FastAPI", "Groq", "Gemini", "ChromaDB", "BM25", "Sentence Transformers"],
      github: "https://github.com/razesoni/Anisense-AI-Video-Intelligence", featured: true
    },
    {
      title: "Course Context Engine", type: "Local RAG System",
      description: "An offline teaching assistant that transcribes Hindi and Hinglish lectures, retrieves relevant segments, and answers questions with source timestamps.",
      impact: "Combines Whisper, BGE-M3 embeddings, cosine retrieval, Llama 3.2, quizzes, and a FastAPI interface while keeping course data local.",
      technologies: ["Python", "Whisper", "Ollama", "BGE-M3", "Llama 3.2", "FastAPI"],
      github: "https://github.com/razesoni/Generative-AI-Course-Context-Engine", featured: true
    },
    {
      title: "Freemium Gaming Analytics", type: "Product Analytics",
      description: "Analyzes monetization drivers and retention risks across roughly 3,000 players using purchase telemetry, engagement signals, and cohorts.",
      impact: "Turns ARPU, ARPPU, revenue concentration, and conversion latency into prioritized experiments for offers, bundles, and retention.",
      technologies: ["Python", "Pandas", "Flask", "Cohort Analysis", "pytest"],
      github: "https://github.com/razesoni/Freemium-Gaming-Monetization-Player-Retention",
      live: "https://freemium-gaming-monetization-player.onrender.com/", featured: true
    },
    {
      title: "Student Mental Health Prediction", type: "End-to-end ML Application",
      description: "Predicts a student mental health score from social media behavior, academic context, sleep, activity, and stress indicators.",
      impact: "Packages a tuned Random Forest pipeline behind a validated FastAPI endpoint with an interactive browser interface.",
      technologies: ["Random Forest", "FastAPI", "Pydantic", "Pandas", "JavaScript"],
      github: "https://github.com/razesoni/Student-Mental-Health-Score-Prediction"
    },
    {
      title: "Resume Category Classification", type: "Responsible NLP",
      description: "Classifies resumes into topic categories with TF-IDF and Random Forest using an evaluation flow designed to prevent train-test leakage.",
      impact: "Documents model limits clearly and keeps oversampling inside the training split for more credible evaluation.",
      technologies: ["NLP", "TF-IDF", "Random Forest", "Jupyter", "Scikit-learn"],
      github: "https://github.com/razesoni/Resume-Screening-App"
    },
    {
      title: "Sports Person Classifier", type: "Computer Vision",
      description: "Detects faces and classifies sports personalities using image preprocessing, wavelet features, and model comparison.",
      impact: "Compares SVM, Random Forest, and Logistic Regression with grid search and reusable model artifacts.",
      technologies: ["OpenCV", "PyWavelets", "SVM", "Grid Search", "Python"],
      github: "https://github.com/razesoni/Sports-Person-Image-Classification"
    }
  ]
};
