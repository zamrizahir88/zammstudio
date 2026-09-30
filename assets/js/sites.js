/* Zamm Studio — site catalogue.
   To add a website, copy one entry and edit it. `repo` (optional) lets the
   page fetch the "last updated" date from GitHub; `updated` is the fallback. */
window.ZAMM_SITES = [
  {
    id: "aiworkshop2026",
    name: "AI-Assisted Web System Development 2026",
    short: "AI Workshop 2026",
    icon: "🤖",
    category: "Events",
    tagline: "Hands-on workshop: build a working room-booking system in one morning, with Gemini writing the code.",
    description: "Workshop website for FKTEN, UniMAP (1 October 2026, VIBE Room). Participants build the FKTEN eBooking Room System with Google Apps Script and Google Sheets, directing an AI assistant to write the code.",
    features: [
      "Full presentation deck with speaker notes and fullscreen mode",
      "12-step hands-on guide with copy-ready prompts",
      "Help page with common errors, a fix-it prompt and a glossary"
    ],
    audience: "Workshop participants, FKTEN staff",
    tech: ["HTML", "CSS", "JavaScript", "Apps Script", "Gemini"],
    url: "https://zamrizahir88.github.io/aiworkshop2026/",
    repo: "aiworkshop2026",
    shot: "assets/img/shots/aiworkshop2026.jpg",
    updated: "2026-09-30"
  },
  {
    id: "nmk42003",
    name: "NMK42003 Instrumentation",
    short: "NMK42003",
    icon: "📟",
    category: "Teaching",
    tagline: "Course website for Instrumentation, Semester 1 2026/2027.",
    description: "The home of NMK42003 Instrumentation for the Bachelor of Electronic Engineering Technology (Electronic Systems). Covers transducers and sensors through to networked and wireless instrumentation.",
    features: [
      "Interactive semester timeline showing assessment progress week by week",
      "Chapters, schedule and assessment breakdown in one place",
      "Lab sheets, references and teaching team contacts"
    ],
    audience: "NMK42003 students",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://zamrizahir88.github.io/nmk42003/",
    repo: "nmk42003",
    shot: "assets/img/shots/nmk42003.jpg",
    updated: "2026-09-30"
  },
  {
    id: "myrps",
    name: "myRPS: Care. Guide. Shine.",
    short: "myRPS",
    icon: "🎓",
    category: "Systems",
    tagline: "Companion system for UniMAP academic advisors (RPS) to follow their advisees' progress.",
    description: "A personal initiative (not an official UniMAP system) that lets a Rakan Pendamping Siswa follow each advisee's academic progress, 7 Pillars participation and psychometric profile in one place.",
    features: [
      "140-credit progress tracker, GPA/CGPA and target-grade planner",
      "Multiple Intelligences psychometric test with radar chart",
      "Early-warning flags for advisors, meeting logbook and CSV export",
      "Approval queue, leaderboard and chatroom that never expose grades"
    ],
    audience: "UniMAP students and academic advisors",
    tech: ["TypeScript", "Vite", "Tailwind", "Supabase"],
    url: "https://zamrizahir88.github.io/myRPS/",
    repo: "myRPS",
    shot: "assets/img/shots/myrps.jpg",
    updated: "2026-09-17"
  },
  {
    id: "fuzzy",
    name: "FuzzyLogic Visualizer v2.5",
    short: "FuzzyLogic Visualizer",
    icon: "🧠",
    category: "Tools",
    tagline: "Browser-based IDE for designing, simulating and exporting Mamdani fuzzy inference systems.",
    description: "Build membership functions and rules visually, watch the inference run live, then export the whole system as working code. Includes an embedded AI tutor to help students design fuzzy systems.",
    features: [
      "Visual editor for triangular, trapezoidal, Gaussian, bell and sigmoid functions",
      "Real-time simulation with step-by-step inference trace",
      "One-click export to Python (skfuzzy), MATLAB (.m / .fis) and C++ for ESP32",
      "Cloud saves with Google sign-in, plus built-in examples"
    ],
    audience: "Students and researchers in fuzzy logic and control",
    tech: ["HTML", "JavaScript", "Firebase", "Cloudflare Workers"],
    url: "https://zamrizahir88.github.io/FuzzyLogicVisualizer/main.html",
    repo: "FuzzyLogicVisualizer",
    shot: "assets/img/shots/fuzzy.jpg",
    updated: "2026-06-18"
  },
  {
    id: "judging",
    name: "Exhibition Judging System 2026",
    short: "Exhibition Judging",
    icon: "🏆",
    category: "Events",
    tagline: "Digital scoring for industry panelists judging student project exhibitions.",
    description: "Judges log in with a unique PIN, mark each group against a weighted rubric and submit scores. The admin dashboard gives live monitoring, ranking and export.",
    features: [
      "PIN-based jury login",
      "Five-criterion weighted rubric, scored out of 100",
      "Live admin dashboard with rankings and export",
      "Judging schedule view"
    ],
    audience: "Industry panel judges, event organisers",
    tech: ["HTML", "JavaScript", "Firebase"],
    url: "https://zamrizahir88.github.io/designproject2026/",
    repo: "designproject2026",
    shot: "assets/img/shots/judging.jpg",
    updated: "2026-05-21"
  },
  {
    id: "solar",
    name: "Thursinar Solar Monitoring",
    short: "Solar Monitoring",
    icon: "☀️",
    category: "Systems",
    tagline: "Centralised dashboard for monitoring and validating a rooftop solar plant.",
    description: "Monitoring dashboard built for Thursinar Energy's 24.8 kWp installation at SDZ Halal Mart, Rawang. Shows site details, live power yield and hardware sensors, with a telemetry replay for validating the system.",
    features: [
      "Site overview with hardware specs and location",
      "Real-time DC vs AC power yield chart",
      "Telemetry feed replay at 1×, 5× or 20× speed, with manual fault injection",
      "Energy, savings and CO₂-avoided summaries"
    ],
    audience: "Plant owner and EPCC contractor (demo login on the page)",
    tech: ["HTML", "JavaScript", "Chart.js"],
    url: "https://zamrizahir88.github.io/ThursinarSolarMonitoring/main.html",
    repo: "ThursinarSolarMonitoring",
    shot: "assets/img/shots/solar.jpg",
    updated: "2026-08-17"
  },
  {
    id: "miniproject",
    name: "NMK20603 Mini Project Registration",
    short: "Mini Project CA",
    icon: "🖥️",
    category: "Teaching",
    tagline: "Group registration for the Computer Architecture mini project: design a 16-bit CPU.",
    description: "Students register their team and claim a unique project title on a first-come, first-served basis. The page also sets out the project theme, team rules, report structure and deadlines.",
    features: [
      "First-come, first-served title selection",
      "Group registration with a dashboard of taken titles",
      "Admin view for the lecturers",
      "Report structure and deadlines at a glance"
    ],
    audience: "NMK20603 Computer Architecture students",
    tech: ["HTML", "JavaScript", "Firebase"],
    url: "https://zamrizahir88.github.io/miniprojectca/main.html",
    repo: "miniprojectca",
    shot: "assets/img/shots/miniproject.jpg",
    updated: "2026-05-20"
  },
  {
    id: "dpfkten",
    name: "NMK31704 Design Project",
    short: "Design Project",
    icon: "🛠️",
    category: "Teaching",
    tagline: "Central hub for the FKTEN final-year Design Project course.",
    description: "Google Site for NMK31704 Design Project (Bachelor of Electronic Engineering Technology). Collects course information, project listings, announcements and system links for students.",
    features: [
      "Notice board and weekly progress tracker",
      "Project listings and event gallery",
      "Links to course systems, SULAM and IDSSC 2026"
    ],
    audience: "Design Project students, FKTEN staff",
    tech: ["Google Sites"],
    url: "https://sites.google.com/unimap.edu.my/dpfkten/",
    external: true,
    shot: "assets/img/shots/dpfkten.jpg",
    updated: "2026"
  },
  {
    id: "cv",
    name: "Curriculum Vitae",
    short: "My CV",
    icon: "👤",
    category: "Profile",
    tagline: "Online CV: education, experience, research, awards and contact.",
    description: "Full academic profile covering education, teaching and professional experience, expertise, research grants, copyrights and awards, with a downloadable PDF CV.",
    features: [
      "Education and career timeline",
      "Research, copyrights and awards",
      "Downloadable PDF CV",
      "Light and dark mode"
    ],
    audience: "Colleagues, collaborators, students",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://zamrizahir88.github.io/cv/main.html",
    repo: "cv",
    shot: "assets/img/shots/cv.jpg",
    updated: "2026-07-07"
  }
];
