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
  github: string;
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
    name: 'Postgre',
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
    id: 24,
    name: 'Ansible',
    logo: '/images/logos/ansible.png'
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
    name: 'CRM Admin Dashboard',
    category: 'Web dev & Data Analytics',
    image: '/images/projects/analytics.png',
    banner: '/images/banners/dashboard.png',
    description: "A Dashboard designed to manage and analyze various aspects of an online store. It provides tools for managing users, products, and transactions",
    fullDescription: "The E-commerce Dashboard is a fullstack application designed to manage and analyze various aspects of an online store. It provides comprehensive tools for managing users, products, and transactions. Additionally, the dashboard offers revenue analysis, report generation, and team management features, along with settings, help, and logout functionality.",
    technologies: {
      "JavaScript": "Programming language",
      "Next.js": "Frontend development framework.",
      "Mongoose": "For database schema modeling and MongoDB interaction.",
      "React-Charts": "For visualizing data and generating interactive charts.",
      "NextAuth": "For secure user authentication and authorization.",
      "Axios": "For making HTTP requests.",
    },
    features: ["User Management", "Product Management", "Transaction Management", "Analytics", "Team Management", "Additional Features"],
    github: 'https://github.com/brandon-bwoni/admin-dashboard',
    demo: '',
    screenshots: []
  },
  {
    id: 'fulo-foodapp',
    name: 'Fulo',
    category: 'Mobile App Development',
    image: '/images/projects/fulo.png',
    banner: '/images/banners/fulo.png',
    description: "A mobile app to streamline food ordering and delivery in Zimbabwe. Providing an intuitive and interactive user interface to browse menus, place orders, and track deliveries.",
    fullDescription: "Fulo is a full-featured food application that allows users to list, search, and inquire about food items available at various restaurants. It also includes functionality for placing orders directly through the app. The application is developed using Flutter for the frontend, GetX for state management, and Supabase as the backend database solution. The app is designed to be user-friendly, responsive, and visually appealing.",
    technologies: {
      "Flutter": "Framework for building the app's UI and interactions.",
      "GetX": "For state management, routing, and dependency injection",
      "Supabase": "Used for database management, authentication, and real-time updates."
    },
    features: ["Food Listing", "Search and Filter", "Inquiries", "Food Ordering", "User Authentication", "Restaurant Management Panel", "Notifications"],
    github: 'https://github.com/brandon-bwoni/fulo',
    demo: '',
    screenshots: []
  },
  {
    id: 'nectar-sentinel',
    name: 'Nectar Sentinel',
    category: 'Cybersecurity',
    image: '/images/projects/nectar.png',
    banner: '/images/banners/nectar.png',
    description: "This Python-based honeypot application is designed to emulate a vulnerable system to attract and monitor potential attackers.",
    fullDescription: "This Python-based honeypot application is designed to emulate a vulnerable system to attract and monitor potential attackers. It features an SSH server and a web server, both configured to capture suspicious activities. By simulating weak security, the app gathers valuable insights into malicious behavior and attack patterns, enhancing understanding of cybersecurity threats.",
    technologies: {
      "Python": "Programming Language",
      "SSH Server": "Built using paramiko for SSH protocol implementation.",
      "Web Server": "Powered by Flask for simulating web vulnerabilities",
      "HTML": "Markup language for web pages"
    },
    features: ["SSH Honeypot", "Web Server Honeypot", "Data Logging and Monitoring"],
    github: 'https://github.com/brandon-bwoni/nectar-sentinel',
    demo: '',
    screenshots: []
  },
  {
    id: 'psl-app',
    name: 'Zimbabwe PSL App',
    category: 'Mobile App Development',
    image: '/images/projects/psl.png',
    banner: '/images/banners/psl-app.png',
    description: "This mobile application provides fans of the Zimbabwe Premier Soccer League (ZPSL) with comprehensive access to league information.",
    fullDescription: "This mobile application provides fans of the Zimbabwe Premier Soccer League (ZPSL) with comprehensive access to league information. Users can view live match updates, track fixtures, standings, and player statistics, and engage with their favorite teams. Built with Flutter, the app ensures a sleek and responsive UI, while Firebase serves as the backend for authentication, real-time updates, and data management. The GetX state management framework ensures seamless navigation and state handling.",
    technologies: {
      "Flutter": "For cross-platform mobile development.",
      "Authentication": "User login and sign-up.",
      "Firestore": "Database for storing data.",
      "Cloud Functions": "Server-side logic for processing data.",
      "Realtime Database": "Real-time match updates.",
      "Cloud Messaging": "Push notifications.",
      "Firebase Storage": "Media storage (e.g., team logos, player photos)."
    },
    features: ["User Authentication", "League Fixtures and Results", "Live Updates", "Team and Player Profiles", "Standings and Stats", "Fan Engagement", "Admin Features"],
    github: 'https://github.com/brandon-bwoni/psl_app',
    demo: '',
    screenshots: []
  },
  {
    id: 'social-api',
    name: 'Fast Social API',
    category: 'Backend Development',
    image: '/images/projects/fast.png',
    banner: '/images/banners/fast-social.png',
    description: "This API, built using FastAPI, provides a backend solution for social applications with full CRUD (Create, Read, Update, Delete) functionality.",
    fullDescription: "This API, built using FastAPI, provides a backend solution for social applications with full CRUD (Create, Read, Update, Delete) functionality. It is designed to handle user accounts, posts, comments, likes, and other common features found in social media platforms. The API is fully tested, adheres to modern development practices, and is designed with scalability and maintainability in mind. It is ready for deployment on platforms like Heroku, Docker, and can integrate with CI/CD pipelines using Git.",
    technologies: {
      "Python": "Language for development",
      "FastAPI": "Framework for building APIs.",
      "SQLAlchemy": "ORM for database interactions.",
      "PostgreSQL ": "Database for storing data",
      "Docker": "For containerization.",
      "Heroku": "For hosting the API",
      "Git Pipelines": "For setting up CI/CD pipelines."
    },
    features: ["User Management", "Post Management", "Comments"],
    github: 'https://github.com/brandon-bwoni/fastapi-social',
    demo: '',
    screenshots: []
  },
  {
    id: 'sheepskin-apparel',
    name: 'Sheepskin Apparel',
    category: 'Mobile App Development',
    image: '/images/projects/sheep.png',
    banner: '/images/banners/sheepskin.png',
    description: "The Sheepskin Mobile App is a cross-platform e-commerce application for an street wear apparel brand.",
    fullDescription: "The Sheepskin Mobile App is a cross-platform e-commerce application for an apparel brand. It provides customers with a seamless shopping experience, including browsing products, managing a cart, and completing purchases. The app is built using Flutter for the frontend and Firebase for backend services, offering features such as user authentication, product management, real-time updates, and secure payment processing.",
    technologies: {
      "Flutter": "For cross-platform mobile development.",
      "Authentication": "User login and sign-up.",
      "Firestore": "Database for storing data.",
      "Cloud Functions": "Server-side logic for processing data.",
      "Cloud Messaging": "Push notifications.",
      "Firebase Storage": "Media storage "
    },
    features: ["User Authentication", "Product Management", "Cart and Checkout", "Order Management", "Notifications", "Account Management", "Responsive Design"],
    github: 'https://github.com/brandon-bwoni/sheepskin-apparel',
    demo: '',
    screenshots: []
  },
  {
    id: 'yipee-social',
    name: 'Yipee Social',
    category: 'Mobile App Development',
    image: '/images/projects/yippe.png',
    banner: '/images/banners/yipee.png',
    description: "Yipee is a feature-rich social media for users to share photos, follow each other, interact with posts through likes and comments, and explore trending content.",
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
    github: 'https://github.com/brandon-bwoni/yipee-chat',
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