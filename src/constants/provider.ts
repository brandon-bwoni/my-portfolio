export interface Logo {
  id: number;
  name: string;
  logo: string;
}

export interface Project {
  id: string;
  name: string;
  category: string;
  image: string;
  banner: string;
  description: string;
  fullDescription: string;
  technologies: Record<string, string>;
  features: string[];
  demo: string;
  screenshots: any[];
}

export const logos: Logo[] = [
  {
    id: 1,
    name: 'javascript',
    logo: '/images/logos/javascript.png'
  },
  {
    id: 2,
    name: 'python',
    logo: '/images/logos/python.png'
  },
  {
    id: 4,
    name: 'bash',
    logo: '/images/logos/bash.png'
  },
  {
    id: 5,
    name: 'linux',
    logo: '/images/logos/linux.png'
  },
  {
    id: 6,
    name: 'html',
    logo: '/images/logos/html.png'
  },
  {
    id: 7,
    name: 'css',
    logo: '/images/logos/css.png'
  },
  {
    id: 8,
    name: 'tailwindcss',
    logo: '/images/logos/tailwindcss.png'
  },
  {
    id: 9,
    name: 'React',
    logo: '/images/logos/react.png'
  },
  {
    id: 10,
    name: 'React-Native',
    logo: '/images/logos/react-native.png'
  },
  {
    id: 11,
    name: 'Nextjs',
    logo: '/images/logos/nextjs.png'
  },
  {
    id: 12,
    name: 'Flutter',
    logo: '/images/logos/flutter.png'
  },
  {
    id: 13,
    name: 'Nodejs',
    logo: '/images/logos/nodejs.png'
  },
  {
    id: 14,
    name: 'Express',
    logo: '/images/logos/express.png'
  },
  {
    id: 15,
    name: 'Flask',
    logo: '/images/logos/flask.png'
  },
  {
    id: 16,
    name: 'Django',
    logo: '/images/logos/django.png'
  },
  {
    id: 17,
    name: 'Laravel',
    logo: '/images/logos/laravel.png'
  },
  {
    id: 18,
    name: 'MySQL',
    logo: '/images/logos/mysql.png'
  },
  {
    id: 19,
    name: 'MongoDB',
    logo: '/images/logos/mongodb.png'
  },
  {
    id: 20,
    name: 'Postgres',
    logo: '/images/logos/postgre.png'
  },
  {
    id: 21,
    name: 'Redis',
    logo: '/images/logos/redis.png'
  },
  {
    id: 22,
    name: 'Prisma',
    logo: '/images/logos/prisma.png'
  },
  {
    id: 23,
    name: 'Git',
    logo: '/images/logos/git.png'
  },
  {
    id: 25,
    name: 'AWS',
    logo: '/images/logos/aws.png'
  },
  {
    id: 26,
    name: 'Docker',
    logo: '/images/logos/docker.png'
  },
  {
    id: 27,
    name: 'Postman',
    logo: '/images/logos/postman.png'
  },
  {
    id: 28,
    name: 'Figma',
    logo: '/images/logos/figma.png'
  },
  {
    id: 29,
    name: 'NextAuth',
    logo: '/images/logos/nextauth.png'
  }
];

export const projects: Project[] = [
  {
    id: 'fullstack-dashboard',
    name: 'Advert Hub263',
    category: 'Web dev & Data Analytics',
    image: '/images/projects/digital-marketing.jpg',
    banner: '/images/banners/dashboard.png',
    description: "Unleash the power of digital marketing with the all-in-one AI-Powered Marketing dashboard to expand your reach and grow your revenue." ,
    fullDescription: "Unleash the power of digital marketing with the all-in-one AI-Powered Marketing dashboard to expand your reach and grow your revenue. AdHub236 is your ultimate solution for managing and optimizing your online advertising campaigns and advertisement insights and business analytics",
    technologies: {
      "Languages": "TypeScript, Python",
      "Next.js": "Frontend development framework.",
      "FastAPI": "Backend server application",
      "Langgraph & LangChain": "AI Agent Ochestration framework",
      "Postgres": "For data storage",
      "MCP Servers": "Providing AI with context from external resources.",
      "Pinecone": "Retrieval Augmented Generation (RAG) database",
      "OpenAI": "For AI models and capabilities.",
      "Google-Gemini": "For media generation",
      "Slack": "User notification",
      "Google Calender": "Scheduling system",
      "Vercel": "For hosting the frontend application.",
      "Render": "For hosting the backend application.",
      "Supabase": "For user authentication and database management.",
      "React-Charts": "For visualizing data and generating interactive charts.",
      "NextAuth": "For secure user authentication and authorization.",
      "Axios": "For making HTTP requests.",
    },
    features: [
        "AI Creative Generation - Generate compelling ad creatives using advanced AI", 
        "Multi-Platform Campaign Management - Manage campaigns across Google, Facebook, LinkedIn, and more",
        "Real-Time Analytics - Track performance with comprehensive metrics and reporting",
        "Platform Integrations - Seamless connection to major advertising platforms",
        "Smart Insights - AI-powered recommendations and optimization suggestions",
        "Intelligent Notifications - Stay informed with business-relevant alerts",
        "Modern UI/UX - Clean, responsive design with smooth animations"
    ],
    demo: 'https://adhub263.vercel.app/',
    screenshots: []
  },
  {
    id: 'assistant-keven',
    name: 'Keven',
    category: 'AI Engineering',
    image: '/images/projects/keven.jpg',
    banner: '/images/banners/fulo.png',
    description: "An intelligent conversational AI assistant that provides multi-modal responses through WhatsApp, Chainlit, and other messaging platforms",
    fullDescription: "Keven is my personal intelligent conversational AI assistant built with LangGraph that provides multi-modal responses through WhatsApp, Chainlit, and other messaging platforms. The assistant features memory persistence, contextual awareness, and supports text, image, and audio interactions",
    technologies: {
      "LangGraph": "State-based conversation flow management",
      "Multiple LLM Providers": "Groq, OpenAI, Together AI support",
      "Vector Database": "Qdrant for semantic memory storage",
      "Image Processing": "FLUX.1 for image generation, GPT-4o-mini for image analysis",
      "Speech Processing": "Whisper for STT, ElevenLabs for TTS"
    },
    features: [
    "Multi-Modal Communication: Text, image generation, and voice synthesis",
   "Persistent Memory: Long-term memory with vector storage using Qdrant",
   "Context Awareness: Schedule-based activity injection for personalized responses",
   "Multiple Interfaces: WhatsApp webhook, Chainlit UI, and Messenger support",
   "Conversation Management: Automatic summarization for long conversations",
   "Image Analysis: Upload and analyze images with AI-powered descriptions",
   "Voice Interaction: Speech-to-text and text-to-speech capabilities"
    ],
    demo: '',
    screenshots: []
  },
  {
    id: 'green-lens',
    name: 'GreenLens',
    category: 'Web Development',
    image: '/images/projects/greenlens.jpeg',
    banner: '/images/banners/nectar.png',
    description: "An ESG performance monitoring dashboard providing insights into sustainability metrics, carbon emissions tracking, and organizational rankings.",
    fullDescription: "GreenLens transforms complex ESG (Environmental, Social, and Governance) data into actionable insights through an intuitive dashboard interface, powered by Artificial Intelligence. Monitor environmental impact, track sustainability initiatives, and benchmark organizational performance against industry standards.",
    technologies: {
     "Framework": "Next.js 14+, FastAPI",
     "Language": "TypeScript, Python",
     "AI Workflow Ochestration": "LangGraph",
     "Styling": "Tailwind CSS",
     "UI Components": "Shadcn/UI, Radix UI",
     "Animations": "Framer Motion",
     "Database": "PostgreSQL, Redis, Pinecone, Prisma ORM",
     "Authentication": "NextAuth.js",
     "Deployment": "Vercel (frontend), Render (backend)",
     "AI Integration": "OpenAI API for advanced features",
    },
    features: [
      "ESG Performance Analytics: Real-time monitoring of environmental, social, and governance metrics with interactive expandable cards",
      "Organization Rankings: Comparative analysis and benchmarking tools",
      "Carbon Emissions Tracking: Interactive charts and emission trend analysis",
      "Comprehensive Settings: User profile, notifications, billing, API keys, security, and appearance management",
      "Modern UI/UX: Built with Tailwind CSS, Shadcn/UI components, and custom accent color theming",
      "Authentication System: Secure login and signup functionality",
      "Responsive Design: Optimized for all device sizes",
      "Smooth Animations: Page transitions and stagger animations for enhanced user experience",
      "Consistent Design System: Unified accent color implementation across all components"
    ],
    demo: 'https://greenlens.vercel.app/',
    screenshots: []
  },
  {
    id: 'scriben',
    name: 'Scriben',
    category: 'Wev App Development',
    image: '/images/projects/scriben.jpg',
    banner: '/images/banners/psl-app.png',
    description: "An AI-Powered content creation assistant embedded in a comprehensive Content Management Platform",
    fullDescription: "Scriben is a personal comprehensive AI-powered content management platform that streamlines the entire content creation workflow. From drafting posts to analyzing performance, this application provides content creators, marketers, and professionals with intelligent tools to enhance their social media presence.",
    technologies: {
  "Development Frameworks": "Nextjs, FastAPI, Langgraph",
  "Programming": "Typescript, Python",
  "Database": "Postgres, SQLAlchemy ORM",
  "Authentication": "NextAuth.js",
  "AI Services": "OpenAI GPT-4o, Claude 3, Cohere, Google Gemini",
  "Vector Database": "Pinecone for RAG capabilities",
  "Styling": "Tailwind CSS, Shadcn/UI, Radix UI",
  "Animations": "Framer Motion",
  "Notification": "Slack",
  "MCP Servers": "Slack server, Postgres server",
  "Calender": "Google Calender",
  "Deployment": "Vercel (frontend), Render (backend)",
    },
    features: [
  "User Authentication: Complete login/signup flow with simplified form design",
  "Real-time Metrics: Live stats cards showing posts created, engagement, followers, and scheduled content",
  "Achievement System: Gamified progress tracking with unlocked achievements and goals",
  "Draft System: Create, edit, and organize LinkedIn post drafts with rich text editing",
  "AI Content Generation: Transform drafts into multiple engaging variations using AI",
  "Image Integration: Upload images or generate AI-powered visuals for posts",
  "Tag Management: Organize content with customizable tags and categories",
  "Smart Post Generation: 4-step AI workflow that creates optimized LinkedIn posts",
  "Multiple Variations: Generate different tones and styles (Professional, Engaging, Value-focused)",
  "AI Critique System: Get intelligent feedback on content quality and engagement potential",
  "Auto-Enhancement: Automatic content optimization based on AI recommendations",
  "Content Calendar: Visual calendar interface for scheduling posts",
  "Smart Scheduling: AI-suggested optimal posting times",
  "Batch Operations: Schedule multiple posts efficiently",
  "Publishing Status: Track draft, scheduled, and published content",
  "Performance Tracking: Comprehensive analytics for likes, comments, shares, and views",
  "Engagement Metrics: Real-time engagement rate calculations and trends",
  "Visual Charts: Interactive charts showing performance over time",
  "Post Comparison: Compare performance across different posts and content types"
],
    demo: '',
    screenshots: []
  },
  {
    id: 'healtheaze',
    name: 'HealthEaze',
    category: 'Web Development',
    image: '/images/projects/healtheaze.png',
    banner: '/images/banners/fast-social.png',
    description: "HealthEaze, a comprehensive medical tourism platform connecting patients with world-class healthcare providers across Africa.",
    fullDescription: "HealthEaze is a comprehensive medical tourism platform that connects patients with world-class healthcare providers, offering medical consultation and comprehensive travel assistance services.",
    technologies: {
      "Framework": "Next.js with App Router",
      "Programming": "TypeScript",
      "Axios": "For HTTP requests",
      "MongoDB": "Database for storing data",
      "Mongoose": "ODM for MongoDB",
      "Tailwind CSS": "For styling",
      "Animations": "Framer Motion",
    },
    features: [
      "Medical Tourism- Access to international healthcare facilities", 
      "Comprehensive Support - Visa processing, travel arrangements, accommodation",
      "Partnership Network - Partnered with leading hospitals across India",
      "Multilingual Support - Available in multiple African languages"
    ],
    demo: 'https://healtheaze.vercel.app/',
    screenshots: []
  },
  // {
  //   id: 'sheepskin-apparel',
  //   name: 'Sheepskin Apparel',
  //   category: 'Mobile App Development',
  //   image: '/images/projects/sheep.png',
  //   banner: '/images/banners/sheepskin.png',
  //   description: "The Sheepskin Mobile App is a cross-platform e-commerce application for an street wear apparel brand.",
  //   fullDescription: "The Sheepskin Mobile App is a cross-platform e-commerce application for an apparel brand. It provides customers with a seamless shopping experience, including browsing products, managing a cart, and completing purchases. The app is built using Flutter for the frontend and Firebase for backend services, offering features such as user authentication, product management, real-time updates, and secure payment processing.",
  //   technologies: {
  //     "Flutter": "For cross-platform mobile development.",
  //     "Authentication": "User login and sign-up.",
  //     "Firestore": "Database for storing data.",
  //     "Cloud Functions": "Server-side logic for processing data.",
  //     "Cloud Messaging": "Push notifications.",
  //     "Firebase Storage": "Media storage "
  //   },
  //   features: ["User Authentication", "Product Management", "Cart and Checkout", "Order Management", "Notifications", "Account Management", "Responsive Design"],
  //   demo: '',
  //   screenshots: []
  // },
  {
    id: 'yipee-social',
    name: 'Yipee Social',
    category: 'Mobile App Development',
    image: '/images/projects/yippe.png',
    banner: '/images/banners/yipee.png',
    description: "Yipee is a feature-rich social media platform to share photos, follow each other, interact with posts via likes and comments, and explore content.",
    fullDescription: "Yipee is a feature-rich social media app inspired by Instagram, built using React Native for the frontend and Supabase for the backend. The app enables users to share photos, follow other users, interact with posts through likes and comments, and explore trending content. It prioritizes seamless performance, a clean user interface, and robust backend integration.",
    technologies: {
      "TypeScript": "For type-safe and scalable JavaScript development.",
      "React Native": "Framework for building the mobile app.",
      "Expo": "For fast development and testing.",
      "React Navigation": "For app navigation",
      "Redux Toolkit": "For state management.",
      "Supabase": "Backend-as-a-Service for authentication, database, and storage.",
      "PostgreSQL:": "Database used by Supabase.",
      "Cloudinary": "For image optimization and delivery.",
      "Firebase Cloud Messaging": "For push notifications."
    },
    features: ["User Authentication", "User Profiles", "Posts", "Interactions", "Search and Explore", "Notifications", "Settings"],
    demo: '',
    screenshots: []
  }
];

// Additional assets for other components
export const assets = {
  sunset: '/images/sunset.png',
  notFound: '/images/not-found.gif',
  myImage: '/images/my-image.png',
  intro: '/images/intro.png',
  logo: '/images/logo.png',
  fullstack: '/images/fullstack.png',
  service: '/images/service.png',
  work: '/images/work.png'
};