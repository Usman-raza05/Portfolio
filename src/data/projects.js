// Central project data. Image paths follow IMAGE-GUIDE.md: save a file at that path and it appears automatically.
// A null URL hides its button. published: false hides a record until you fill it in.
const GH = 'https://github.com/Usman-raza05'
const img = (slug, n = 2) => ({
  coverImage: `/images/projects/${slug}/cover.webp`,
  screenshots: Array.from({ length: n }, (_, i) => `/images/projects/${slug}/screenshot-${String(i + 1).padStart(2, '0')}.webp`),
})

export const projects = [
  // ---------- Featured ----------
  {
    id: 'visionlab', title: 'VisionLab', category: 'AI / Computer Vision / Web Application', projectType: 'web', featured: true,
    shortDescription: 'An AI-powered image analysis app that turns an uploaded image into a structured description.',
    highlights: [
      'Image upload with AI-generated descriptions',
      'Identified objects, colour palette, mood tags and notable details',
      'Analysis gallery saved in the browser',
      'Serverless AI handler with multi-provider fallback and retries',
    ],
    insight: 'Exploring multi-provider AI integration, response handling, and reliable image-analysis workflows.',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Gemini API', 'Vercel'],
    status: 'Live', teamOrIndividualContribution: 'Individual project',
    imageAlt: 'VisionLab AI image analyzer interface',
    liveUrl: 'https://analyzeimage.vercel.app/', repositoryUrl: `${GH}/VisionLab`, ...img('visionlab'),
  },
  {
    id: 'chai-ai', title: 'Chai AI', category: 'AI / Mobile Application', projectType: 'mobile', device: 'phone', featured: true,
    shortDescription: 'An Android AI assistant built with React Native, with a warm, dark “chai” theme.',
    highlights: [
      'Multiple chats with saved history through a Node.js, Express and PostgreSQL backend',
      'Groq-powered answers for brainstorming, recipes and everyday questions',
      'Markdown replies, code blocks, copy actions and typing indicators',
    ],
    technologies: ['React Native', 'Node.js', 'Express', 'PostgreSQL', 'Groq API'],
    status: 'Android APK · v1.0.1', teamOrIndividualContribution: 'Individual project (app and backend)',
    imageAlt: 'Chai AI mobile app screens',
    downloadUrl: `${GH}/Chai-AI/releases/download/v1.0.1/Chai-AI-v1.0.1.apk`, repositoryUrl: `${GH}/Chai-AI`,
    links: [{ label: 'Backend Source Code', href: `${GH}/Chai-AI-Backend` }],
    downloadNote: 'Android APK from GitHub Releases. Not on Google Play, so installing it requires allowing installs from unknown sources.',
    ...img('chai-ai'),
  },
  {
    id: 'fellowshift', title: 'FellowShift', category: 'GovTech / EdTech / AI-Assisted Document Verification', projectType: 'web', featured: true,
    shortDescription: 'A scholarship and fellowship management platform designed around Scheduled Tribe applicants and administrators.',
    highlights: [
      'Student portal: scheme discovery, recommendations, applications, documents and notifications',
      'Admin portal: applications, verification, screening, deficiencies, rules and analytics',
      'Supabase authentication, Prisma database layer and document storage',
      'AI document-extraction prototype (FastAPI with Gemini and Mistral), benchmarked in development',
    ],
    insight: 'AI assists document verification; human review remains central to administrative decisions.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Supabase', 'FastAPI', 'Gemini API', 'Mistral API'],
    status: 'Live deployment · AI verification is a development prototype',
    teamOrIndividualContribution: 'Collaborative team project. My work: Supabase authentication, Prisma database setup, sign-up and login, document storage, application drafts and the AI verification backend.',
    imageAlt: 'FellowShift student and admin portal interface',
    liveUrl: 'https://fellowshift.vercel.app/', repositoryUrl: 'https://github.com/hennyanandwani/MOTA-SCHOLARSHIP',
    links: [{ label: 'Backend Source Code', href: `${GH}/FellowShift-Backend` }], ...img('fellowshift'),
  },
  {
    id: 'farmway', title: 'FARMWAY', category: 'AgriTech / Smart India Hackathon 2026', projectType: 'web', featured: true,
    tagline: 'AI-Powered Route to a Fair Farm Price', meta: 'Team Runtime Rebels · Problem Statement SIH26132',
    shortDescription: 'A market-linkage prototype that helps farmers compare buyers by expected net realisation, meaning what actually reaches their pocket.',
    highlights: [
      'Nearby price discovery and transparent buyer offers',
      'Lot matching, logistics and settlement-tracking workflow',
      'Supabase authentication, with a local demo mode when credentials are absent',
      'AI guidance is simulated in this prototype',
    ],
    technologies: ['React', 'Vite', 'Supabase', 'Three.js'],
    status: 'Hackathon prototype', teamOrIndividualContribution: 'Team project (Runtime Rebels)',
    imageAlt: 'FARMWAY market-linkage platform interface',
    liveUrl: 'https://farmway.vercel.app/', repositoryUrl: `${GH}/Farmar-Project`, ...img('farmway'),
  },
  {
    id: 'study-assistant', title: 'Study Assistant', category: 'AI / Education / Document Processing', projectType: 'web', featured: true,
    shortDescription: 'An AI-powered PDF study tool that summarises documents, generates quizzes and answers questions about their content.',
    highlights: [
      'PDF summaries',
      'Multiple-choice quizzes with answers and short explanations',
      'Chat with your document',
      'Scanned and image-based PDFs handled by rendering pages for a vision-capable model',
    ],
    technologies: ['Python', 'Flask', 'PyMuPDF', 'Groq API'],
    status: 'Live', teamOrIndividualContribution: 'Collaborative project',
    imageAlt: 'Study Assistant PDF study tool interface',
    liveUrl: 'https://study-assistent-m336.onrender.com/', repositoryUrl: `${GH}/STUDY-Assistent`, ...img('study-assistant'),
  },
  {
    id: 'toolverse', title: 'Tool-Verse', category: 'Web Utilities / Productivity', projectType: 'web', featured: false,
    shortDescription: 'A suite of browser-based utility tools for everyday image and web tasks.',
    highlights: ['Image to PDF', 'Background remover', 'HTML to image', 'Additional small utilities'],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'jsPDF', 'html2canvas', 'remove.bg API'],
    status: 'Live', teamOrIndividualContribution: 'Independent project',
    imageAlt: 'Tool-Verse utility tools home page',
    liveUrl: 'https://toolverse.rf.gd/', repositoryUrl: `${GH}/Tool-Verse`, ...img('toolverse'),
  },

  // ---------- More projects ----------
  {
    id: 'get-me-a-chai', title: 'Get-Me-A-Chai', category: 'Full-Stack · Crowdfunding Platform', projectType: 'web', featured: false,
    shortDescription: 'A crowdfunding platform built with Next.js and MongoDB, with Razorpay payment integration.',
    technologies: ['Next.js', 'MongoDB', 'Razorpay'], period: 'Feb 2026 – Present',
    liveUrl: null, repositoryUrl: null, ...img('get-me-a-chai', 1),
  },
  {
    id: 'passop', title: 'PassOP', category: 'Full-Stack · Password Manager', projectType: 'web', featured: false,
    shortDescription: 'A MERN-stack password manager focused on password management and state handling.',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js'], period: 'Feb – Mar 2026',
    liveUrl: null, repositoryUrl: null, ...img('passop', 1),
  },
  {
    id: 'food-management', title: 'Food Management System', category: 'ASP.NET Web Application', projectType: 'web', device: 'desktop', featured: false,
    shortDescription: 'A web application for managing food categories, menu items and orders, with a dashboard overview.',
    technologies: ['ASP.NET Web Forms', 'SQL Database'],
    liveUrl: 'https://food-management.runasp.net/', repositoryUrl: null, ...img('food-management', 1),
  },
  {
    id: 'grocery-management', title: 'Grocery Store Management System', category: 'Desktop Application', projectType: 'desktop', device: 'desktop', featured: false,
    shortDescription: 'A grocery store management system built with C# and .NET.',
    technologies: ['C#', '.NET'], period: 'Started Oct 2025',
    liveUrl: null, repositoryUrl: null, ...img('grocery-management', 1),
  },
  {
    // Reusable slot for the second C#/ASP.NET desktop project. Fill it in, then set published: true.
    id: 'desktop-aspnet', title: 'Desktop C#/ASP.NET Project', category: 'Desktop Application', projectType: 'desktop', device: 'desktop', featured: false, published: false,
    shortDescription: '', technologies: [], liveUrl: null, repositoryUrl: null, ...img('desktop-aspnet', 1),
  },
  {
    id: 'spotify-clone', title: 'Spotify Clone', category: 'Frontend Project', projectType: 'web', featured: false,
    shortDescription: 'A frontend clone of the Spotify web player interface.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'], period: 'Feb – Mar 2025', status: 'Role: Frontend Developer',
    liveUrl: null, repositoryUrl: null, ...img('spotify-clone', 1),
  },
  {
    id: 'arduino-motion', title: 'AI-Based Motion Recognition', category: 'Arduino & AI Workshop Project', projectType: 'workshop', featured: false,
    shortDescription: 'Workshop project: collecting motion data for circular, up-and-down and idle movements, then training and testing an AI model.',
    technologies: ['Arduino Uno', 'IoT', 'Machine Learning basics'], period: 'Oct 2026', status: 'Workshop project',
    liveUrl: null, repositoryUrl: null, ...img('arduino-motion', 1),
  },
  // {
  //   id: 'mychat', title: 'MyChat', category: 'Mobile Application', projectType: 'mobile', device: 'phone', featured: true,
  //   shortDescription: 'A realtime one-to-one Android chat app built with React Native CLI and Supabase, with push notifications through Firebase Cloud Messaging.',
  //   technologies: ['React Native', 'Supabase', 'Firebase Cloud Messaging'],
  //   downloadUrl: 'https://github.com/Usman-raza05/MyChat/releases/download/v1.0.1/MyChat.apk', repositoryUrl: `${GH}/MyChat`, ...img('mychat', 1),
  // },
  
{
  id: 'mychat',
  title: 'MyChat',
  category: 'Mobile Application',
  projectType: 'mobile',
  device: 'phone',
  featured: true,
  shortDescription: 'A realtime one-to-one Android chat app built with React Native CLI and Supabase, with push notifications through Firebase Cloud Messaging.',
  highlights: [
    'Realtime one-to-one messaging',
    'Supabase authentication and backend',
    'Push notifications with Firebase Cloud Messaging',
    'Android APK download'
  ],
  technologies: ['React Native', 'Supabase', 'Firebase Cloud Messaging'],
  status: 'Live',
  teamOrIndividualContribution: 'Independent project',
  imageAlt: 'MyChat mobile chat application interface',
  downloadUrl: 'https://github.com/Usman-raza05/MyChat/releases/download/v1.0.1/MyChat.apk',
  // liveUrl: 'https://github.com/Usman-raza05/MyChat/releases/download/v1.0.1/MyChat.apk',
  repositoryUrl: `${GH}/MyChat`,
  ...img('mychat', 1),
},
  {
    id: 'learn-supabase', title: 'Supabase Learning App', category: 'Learning Project', projectType: 'web', featured: false,
    shortDescription: 'A learning project covering Supabase authentication, Google OAuth, PostgreSQL CRUD and Row Level Security.',
    technologies: ['React', 'Vite', 'Supabase'], status: 'Learning project',
    liveUrl: 'https://learnsupabase.vercel.app/', repositoryUrl: `${GH}/learn-supabase`, ...img('learn-supabase', 1),
  },
]

const visible = projects.filter((p) => p.published !== false)
export const featured = visible.filter((p) => p.featured)
export const additional = visible.filter((p) => !p.featured)