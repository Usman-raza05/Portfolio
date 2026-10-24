// live/repo: null hides the button. image: null shows a branded placeholder.
// To add a screenshot, drop a file in /public/projects/ and set image: '/projects/visionlab.png'.
export const featured = [
  {
    id: 'visionlab', name: 'VisionLab', category: 'AI / Computer Vision / Web Application',
    description: 'An AI-powered image analysis application that generates natural-language descriptions of uploaded images.',
    highlights: ['Image upload and analysis', 'AI-generated image descriptions', 'Integration with AI model providers'], // add history/gallery/fallback after checking the app
    insight: 'Exploring multi-provider AI integration, response handling, and reliable image-analysis workflows.',
    tags: ['AI', 'Computer Vision'], // TODO: add real stack tags from the repo
    live: 'https://analyzeimage.vercel.app/', repo: 'https://github.com/Usman-raza05/VisionLab', image: null,
  },
  {
    id: 'chai-ai', name: 'Chai AI', category: 'AI / Mobile Application',
    description: 'An AI chat application built with React Native, designed to deliver a conversational AI experience on mobile devices.',
    highlights: ['Mobile interface development', 'Conversational user experience', 'React Native architecture'],
    tags: ['React Native', 'AI Chat', 'Mobile'],
    live: null, repo: 'https://github.com/Usman-raza05/Chai-AI', image: null,
  },
  {
    id: 'tool-verse', name: 'Tool-Verse', category: 'Developer Tools / Productivity',
    description: 'A collection of browser-based utilities designed to simplify everyday image and web-related tasks.',
    highlights: ['Image to PDF', 'Background removal', 'HTML to image'],
    tags: ['Browser-based', 'Productivity'],
    live: null /* set when confirmed */, repo: null, image: null,
  },
  {
    id: 'farmway', name: 'FARMWAY', category: 'AgriTech / Smart India Hackathon 2026',
    tagline: 'AI-Powered Route to a Fair Farm Price',
    meta: 'Team Runtime Rebels · Problem Statement SIH26132',
    description: 'An agricultural technology solution designed around helping farmers access fairer market-price information and make more informed decisions.',
    highlights: [], // add the farmer problem, workflows and your contributions once confirmed
    tags: [],       // add the real stack
    live: 'https://farmarproject.vercel.app/', repo: null, image: null,
  },
  {
    id: 'fellowshift', name: 'FellowShift', category: 'GovTech / EdTech / AI-Assisted Document Verification',
    description: 'An AI-enabled scholarship and fellowship management platform intended to streamline applications, document verification, and tracking for Scheduled Tribe scholarship and fellowship schemes.',
    highlights: ['Discover schemes → Check eligibility → Apply → Verify documents → Track progress'],
    insight: 'AI supports document verification; human review remains central to administrative decisions.',
    tags: ['Next.js', 'Prisma', 'Supabase', 'FastAPI', 'Gemini', 'Mistral'], // confirm which are active
    live: 'https://fellowshift.vercel.app/', repo: 'https://github.com/hennyanandwani/MOTA-SCHOLARSHIP', image: null,
  },
  {
    id: 'study-assistant', name: 'Study Assistant', category: 'AI / Education / Document Processing',
    description: 'An AI-powered study application designed to work with learning materials and provide an AI-assisted study experience.',
    highlights: ['PDF processing', 'AI-assisted study workflow'],
    tags: ['Python', 'Flask', 'PyMuPDF', 'Groq API'],
    live: null, repo: null, image: null,
  },
  {
    id: 'food-management', name: 'Food Management System', category: 'Full-Stack Development / Database Applications',
    description: 'A full-stack food management web application developed with ASP.NET Framework 4.7.2 and integrated with a remote SQL database.',
    highlights: [], // add real features after checking the code
    tags: ['ASP.NET 4.7.2', 'SQL'],
    live: null, repo: null, image: null,
  },
  {
    id: 'learn-ai', name: 'Learn AI', category: 'AI Education / Digital Content',
    tagline: 'Practical AI Tutorials • AI Tools • Automation',
    description: 'An educational brand focused on helping people explore AI tools, prompting techniques, and productivity workflows.',
    highlights: [], tags: ['Content', 'Education'],
    live: 'https://learnai.wuaze.com/', repo: null, image: null,
    links: [{ label: 'Instagram', href: 'https://www.instagram.com/learnaitrend/' }],
  },
]

export const additional = [
  { name: 'Get-me-a-chai', category: 'Web Application', description: 'Details coming soon.', tags: [], live: null, repo: null },
  { name: 'MERN Stack Password Manager', category: 'Full-Stack Application', description: 'A password manager built on the MERN stack.', tags: ['MongoDB', 'Express', 'React', 'Node.js'], live: null, repo: null },
  { name: 'Grocery Store Management System', category: 'Desktop/Web Application', description: 'A grocery store management system built with C# Web Forms.', tags: ['C#', 'Web Forms'], live: null, repo: null },
]
