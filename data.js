/* ==========================================================
   ALL YOUR CONTENT LIVES HERE.
   Edit this file to change text, projects and links.
   You should not need to touch index.html for content.
   ========================================================== */

window.SITE = {
  name: "Mohammed Isa Dikko",
  location: "Nigeria",                       // EDIT: your city, e.g. "Port Harcourt, Nigeria"
  email: "hello@example.com",                // EDIT: your real email
  socials: [                                 // EDIT: add, remove or change links
    { label: "LinkedIn",  url: "https://www.linkedin.com/in/your-handle" },
    { label: "Instagram", url: "https://www.instagram.com/your-handle" },
    { label: "X",         url: "https://x.com/your-handle" },
    { label: "GitHub",    url: "https://github.com/your-handle" }
  ],
  about: [
    "I’m Mohammed Isa Dikko. I work across creative design, data analytics and software development, and I know how to get the finished work seen through digital marketing and social media.",
    "That mix means I can take an idea from a first sketch to a live product, and then measure whether it works. Replace this paragraph with your own story in your own words.",
    "I like clean, simple work that does one job well."
  ],
  stats: [                                   // EDIT: use your real numbers
    { value: "6",  label: "case studies on this page" },
    { value: "4",  label: "disciplines" },
    { value: "3+", label: "years of experience" },
    { value: "10+", label: "happy clients" }
  ],
  services: [
    { title: "Creative design",
      text: "Brand identities, social media graphics, posters and clean interface designs that look the same everywhere." },
    { title: "Data analytics",
      text: "Cleaning messy data, building dashboards and turning numbers into clear decisions." },
    { title: "Software development",
      text: "Websites and web apps that load fast, work on a phone and are easy to maintain." },
    { title: "Digital marketing and social media",
      text: "Content plans, campaigns and day-to-day social media management that grow an audience." }
  ],
  toolbox: [                                 // EDIT: keep only the tools you really use
    { group: "Design",    items: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Canva", "CorelDRAW"] },
    { group: "Data",      items: ["Excel", "SQL", "Power BI", "Python", "Google Sheets"] },
    { group: "Software",  items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Git"] },
    { group: "Marketing", items: ["Meta Business Suite", "Google Analytics", "Buffer", "Mailchimp", "CapCut"] }
  ],
  marquee: "Let’s talk"
};

/* ----------------------------------------------------------
   PROJECTS / CASE STUDIES
   categories: any of "design", "data", "software", "marketing"
   tone:       cover colour used until you add a real image
   cover:      optional image path, e.g. "assets/projects/brand-cover.jpg"
   gallery:    optional list of image paths shown at the bottom
   Copy a block, change the slug (must be unique, lowercase, no spaces)
   and it will appear on the page automatically.
   ---------------------------------------------------------- */
window.PROJECTS = [
  {
    slug: "brand-identity-sample",
    title: "Brand Identity for a Local Business",
    categories: ["design"],
    year: "2026",
    client: "Client name",
    role: "Brand designer",
    duration: "3 weeks",
    tools: ["Figma", "Illustrator"],
    tone: "#2f4bff",
    cover: "",
    summary: "A logo, colour palette and social media kit for a growing local business.",
    overview: "Replace this with two or three sentences on who the client is and what they asked you to do.",
    challenge: "What was the problem? For example: the business looked different on every platform and customers could not recognise it.",
    process: [
      { title: "Research", text: "Describe how you studied the client, their customers and their competitors." },
      { title: "Concepts", text: "Describe the ideas you sketched and how you chose one." },
      { title: "Delivery", text: "Describe the final files, guidelines and handover." }
    ],
    results: [
      { value: "+40%", label: "profile visits (example)" },
      { value: "1", label: "complete brand kit" }
    ],
    link: "",
    gallery: []
  },
  {
    slug: "social-media-campaign",
    title: "Social Media Campaign",
    categories: ["marketing", "design"],
    year: "2026",
    client: "Client name",
    role: "Social media manager and designer",
    duration: "8 weeks",
    tools: ["Canva", "Meta Business Suite", "CapCut"],
    tone: "#e2552d",
    cover: "",
    summary: "A content plan and campaign that grew followers and enquiries in eight weeks.",
    overview: "Replace with a short summary of the brand, the platforms and the goal of the campaign.",
    challenge: "Describe the starting point: follower count, engagement rate, or lack of a content plan.",
    process: [
      { title: "Strategy", text: "Explain the audience, the content pillars and the posting schedule." },
      { title: "Creation", text: "Explain the posts, reels and stories you designed and produced." },
      { title: "Reporting", text: "Explain how you tracked results and adjusted each week." }
    ],
    results: [
      { value: "+2,500", label: "new followers (example)" },
      { value: "3x", label: "engagement rate (example)" },
      { value: "60", label: "enquiries (example)" }
    ],
    link: "",
    gallery: []
  },
  {
    slug: "sales-dashboard",
    title: "Sales Performance Dashboard",
    categories: ["data"],
    year: "2026",
    client: "Client name",
    role: "Data analyst",
    duration: "2 weeks",
    tools: ["Excel", "SQL", "Power BI"],
    tone: "#0f8a6d",
    cover: "",
    summary: "A dashboard that turned a year of scattered sales records into one clear view.",
    overview: "Replace with what data you worked with and who needed the answers.",
    challenge: "Describe the mess: duplicate rows, missing values, five spreadsheets that did not agree.",
    process: [
      { title: "Clean", text: "Explain how you cleaned and combined the data." },
      { title: "Analyse", text: "Explain the questions you asked and the patterns you found." },
      { title: "Present", text: "Explain the dashboard and what the team can now see at a glance." }
    ],
    results: [
      { value: "5 → 1", label: "spreadsheets replaced (example)" },
      { value: "-6 hrs", label: "weekly reporting time (example)" }
    ],
    link: "",
    gallery: []
  },
  {
    slug: "customer-survey-analysis",
    title: "Customer Survey Analysis",
    categories: ["data"],
    year: "2025",
    client: "Client name",
    role: "Data analyst",
    duration: "10 days",
    tools: ["Python", "Google Sheets"],
    tone: "#7a3fd1",
    cover: "",
    summary: "Findings from 500 survey responses, turned into three clear recommendations.",
    overview: "Replace with the purpose of the survey and how many people answered.",
    challenge: "Describe what the client wanted to learn and what made the data hard to read.",
    process: [
      { title: "Prepare", text: "Explain how you cleaned the responses." },
      { title: "Find patterns", text: "Explain the groups and trends you found." },
      { title: "Recommend", text: "Explain the actions you suggested." }
    ],
    results: [
      { value: "500", label: "responses analysed (example)" },
      { value: "3", label: "actions recommended (example)" }
    ],
    link: "",
    gallery: []
  },
  {
    slug: "business-website",
    title: "Business Website",
    categories: ["software", "design"],
    year: "2026",
    client: "Client name",
    role: "Designer and developer",
    duration: "4 weeks",
    tools: ["Figma", "HTML", "CSS", "JavaScript", "Vercel"],
    tone: "#14171a",
    cover: "",
    summary: "A fast, mobile-friendly website designed in Figma and built from scratch.",
    overview: "Replace with who the website is for and what visitors need to do on it.",
    challenge: "Describe the problem: slow old site, hard to use on a phone, no clear way to contact the business.",
    process: [
      { title: "Design", text: "Explain the layout and how you planned it in Figma." },
      { title: "Build", text: "Explain the code and how you kept it light and fast." },
      { title: "Launch", text: "Explain deployment, testing and handover." }
    ],
    results: [
      { value: "95+", label: "Lighthouse score (example)" },
      { value: "1.2s", label: "load time (example)" }
    ],
    link: "https://example.com",
    gallery: []
  },
  {
    slug: "web-app-project",
    title: "Web App Project",
    categories: ["software"],
    year: "2026",
    client: "Personal project",
    role: "Full-stack developer",
    duration: "6 weeks",
    tools: ["Next.js", "TypeScript", "Supabase"],
    tone: "#c4871a",
    cover: "",
    summary: "An installable web app with accounts, a database and a simple interface.",
    overview: "Replace with what the app does and who it is for.",
    challenge: "Describe the problem the app solves.",
    process: [
      { title: "Plan", text: "Explain the features and data you needed." },
      { title: "Build", text: "Explain the stack and the hardest part to build." },
      { title: "Ship", text: "Explain how you deployed and tested it." }
    ],
    results: [
      { value: "Live", label: "deployed on Vercel" }
    ],
    link: "",
    gallery: []
  }
];
