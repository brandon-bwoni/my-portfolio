// Icons
import ansible from './logos/ansible.png';
import amazon from './logos/aws.png';
import bash from './logos/bash.png';
import css from './logos/css.png';
import django from './logos/django.png';
import docker from './logos/docker.png';
import express from './logos/express.png';
import figma from './logos/figma.png';
import flutter from './logos/flutter.png';
import git from './logos/git.png';
import gitlab from './logos/gitlab.png';
import html from './logos/html.png';
import laravel from './logos/laravel.png';
import linux from './logos/linux.png';
import mongodb from './logos/mongodb.png';
import mysql from './logos/mysql.png';
import nextjs from './logos/nextjs.png';
import nodejs from './logos/nodejs.png';
import php from './logos/php.png';
import postgre from './logos/postgre.png';
import postman from './logos/postman.png';
import prisma from './logos/prisma.png';
import python from './logos/python.png';
import react from './logos/react.png';
import react_native from './logos/react-native.png';
import redis from './logos/redis.png';
import tailwindcss from './logos/tailwindcss.png';
import javascript from './logos/javascript.png';
import flask from './logos/flask.png';
import sunset from './sunset.png';
import nextauth from './logos/nextauth.png';


// Project images
import analytics from './project-images/analytics.png';
import blogging from './project-images/blogging.jpg';
import fulo from "./project-images/fulo.png";
import psl from './project-images/psl.png';
import sheepskin from './project-images/sheep.png';
import nectar from './project-images/nectar.png';
import fast from './project-images/fast.png';
import yipee from './project-images/yippe.png';

// Project banners
import blogBanner from "./banners/blog.png";
import dashboardBanner from "./banners/dashboard.png";
import nectarBanner from "./banners/nectar.png";
import pslBanner from "./banners/psl-app.png";
import sheepskinBanner from "./banners/sheepskin.png";
import yipeeBanner from "./banners/yipee.png";
import fastBanner from "./banners/fast-social.png";
import fuloBanner from "./banners/fulo.png";



const logos = [

  {
    'id': 1,
    'name': 'javascript',
    'logo': javascript
  },
  {
    'id': 2,
    'name': 'python',
    'logo': python
  },
  // {
  //   'id': 3,
  //   'name': 'php',
  //   'logo': php
  // },
  {
    'id': 4,
    'name': 'bash',
    'logo': bash
  },
  {
    'id': 5,
    'name': 'linux',
    'logo': linux
  },
  {
    'id': 6,
    'name': 'html',
    'logo': html
  },
  {
    'id': 7,
    'name': 'css',
    'logo': css
  },
  {
    'id': 8,
    'name': 'tailwindcss',
    'logo': tailwindcss
  },
  {
    'id': 9,
    'name': 'React',
    'logo': react
  },
  {
    'id': 10,
    'name': 'React-Native',
    'logo': react_native
  },
  {
    'id': 11,
    'name': 'Nextjs',
    'logo': nextjs
  },
  {
    'id': 12,
    'name': 'Flutter',
    'logo': flutter
  },
  {
    'id': 13,
    'name': 'Nodejs',
    'logo': nodejs
  },
  {
    'id': 14,
    'name': 'Express',
    'logo': express
  },
  {
    'id': 15,
    'name': 'Flask',
    'logo': flask
  },
  {
    'id': 16,
    'name': 'Django',
    'logo': django
  },
  {
    'id': 17,
    'name': 'Laravel',
    'logo': laravel
  },
  {
    'id': 18,
    'name': 'MySQL',
    'logo': mysql
  },
  {
    'id': 19,
    'name': 'MongoDB',
    'logo': mongodb
  },
  {
    'id': 20,
    'name': 'Postgre',
    'logo': postgre
  },
  {
    'id': 20,
    'name': 'Redis',
    'logo': redis
  },
  {
    'id': 21,
    'name': 'Prisma',
    'logo': prisma
  },
  {
    'id': 22,
    'name': 'Git',
    'logo': git
  },
  // {
  //   'id': 23,
  //   'name': 'Gitlab',
  //   'logo': gitlab
  // },
  {
    'id': 24,
    'name': 'Ansible',
    'logo': ansible
  },
  {
    'id': 25,
    'name': 'AWS',
    'logo': amazon
  },
  {
    'id': 26,
    'name': 'Docker',
    'logo': docker
  },
  {
    'id': 27,
    'name': 'Postmna',
    'logo': postman
  },
  {
    'id': 28,
    'name': 'Figma',
    'logo': figma
  },


];

// A Dashboard designed to manage and analyze various aspects of an online store. It provides comprehensive tools for managing users, products, and transactions.

const projects = [
  {
    'id': 'fullstack-dashboard',
    'name': 'CRM Admin Dashboard',
    'category': 'Web dev & Data Analytics',
    'image': analytics,
    'banner': dashboardBanner,
    'description': "A Dashboard designed to manage and analyze various aspects of an online store. It provides tools for managing users, products, and transactions",
    'fullDescription': "The E-commerce Dashboard is a fullstack application designed to manage and analyze various aspects of an online store. It provides comprehensive tools for managing users, products, and transactions. Additionally, the dashboard offers revenue analysis, report generation, and team management features, along with settings, help, and logout functionality.",
    "technologies": {
      "JavaScript": "Programming language",
      "Next.js": "Frontend development framework.",
      "Mongoose": "For database schema modeling and MongoDB interaction.",
      "React-Charts": "For visualizing data and generating interactive charts.",
      "NextAuth": "For secure user authentication and authorization.",
      "Axios": "For making HTTP requests.",
    },
    'features': ["User Management", "Product Management", "Transaction Management", "Analytics", "Team Management", "Additional Features"],
    'github': 'https://github.com/brandon-bwoni/admin-dashboard',
    'demo': '',
    "screenshots": []
  },
  // {
  //   'id': 'fullstack-blog',
  //   'name': 'Byteshot Blog',
  //   'category': 'Web Development',
  //   'image': blogging,
  //   'banner': blogBanner,
  //   'description': "A dynamic and modern platform designed for publishing and sharing technology-related articles. Featuring a client-side for viewing articles and backend for posting articles",
  //   'fullDescription': "The Blog is a dynamic and modern platform designed for publishing and sharing technology-related articles. It offers a seamless user experience with a client-side interface for browsing and reading blogs. On the backend, an admin panel allows efficient management of blog posts and subscription emails, enabling the author to focus on content creation and audience engagement. This project combines functionality, simplicity, and a polished design to serve tech enthusiasts and readers.",
  //   "technologies": {
  //     "TypeScript": "For type-safe and scalable JavaScript development.",
  //     "Next.js": "For server-side rendering and frontend development.",
  //     "Mongoose": "For database schema modeling and MongoDB interaction.",
  //     "React-Toastify": "For displaying notifications",
  //     "Axios": "For making HTTP requests.",
  //     "Validator": "For validating email  fields."
  //   },
  //   'features': ["Client-Side", "Admin Panel", "Transaction Management", "Notifications",],
  //   'github': 'https//:github.com',
  //   'demo': 'https//:demo.com',
  //   "screenshots": []
  // },
  {
    'id': 'fulo-foodapp',
    'name': 'Fulo',
    'category': 'Mobile App Development',
    'image': fulo,
    'banner': fuloBanner,
    'description': "A mobile app to streamline food ordering and delivery in Zimbabwe. Providing an intuitive and interactive user interface to browse menus, place orders, and track deliveries.",
    'fullDescription': "Fulo is a full-featured food application that allows users to list, search, and inquire about food items available at various restaurants. It also includes functionality for placing orders directly through the app. The application is developed using Flutter for the frontend, GetX for state management, and Supabase as the backend database solution. The app is designed to be user-friendly, responsive, and visually appealing.",
    "technologies": {
      "Flutter": "Framework for building the app’s UI and interactions.",
      "GetX": "For state management, routing, and dependency injection",
      "Supabase": "Used for database management, authentication, and real-time updates."
    },
    'features': ["Food Listing", "Search and Filter", "Inquiries", "Food Ordering", "User Authentication", "Restaurant Management Panel", "Notifications"],
    'github': 'https://github.com/brandon-bwoni/fulo',
    'demo': '',
    "screenshots": []
  },
  // {
  //   'id': 'image-editor',
  //   'name': 'Image Editor',
  //   'category': 'Web Development',
  //   'image': fulo,
  //   'banner': '',
  //   'description': "A modern web application with functionalities similar to Google Photos. It enables users to upload, edit, and manage their images efficiently.",
  //   'fullDescription': "The Image Editor is a modern web application with functionalities similar to Google Photos. It enables users to upload, edit, and manage their images efficiently. Key features include basic photo adjustments, cropping, filtering, and cloud storage integration for seamless image management.",
  //   "technologies": {
  //     "TypeScript": "For type-safe and scalable JavaScript development.",
  //     "Next.js": "For server-side rendering and frontend development.",
  //     "Next-Cloudinary": "For handling image uploads, transformations, and cloud storage.",
  //     "TailwindCSS": "For building responsive and aesthetically pleasing user interfaces."
  //   },
  //   'features': ["Image Management", "Photo Editing", "Cloud Integration", "User Interface",],
  //   'github': 'https//:github.com',
  //   'demo': 'https//:demo.com',
  //   "screenshots": []
  // },
  {
    'id': 'nectar-sentinel',
    'name': 'Nectar Sentinel',
    'category': 'Cybersecurity',
    'image': nectar,
    'banner': nectarBanner,
    'description': "This Python-based honeypot application is designed to emulate a vulnerable system to attract and monitor potential attackers.",
    'fullDescription': "This Python-based honeypot application is designed to emulate a vulnerable system to attract and monitor potential attackers. It features an SSH server and a web server, both configured to capture suspicious activities. By simulating weak security, the app gathers valuable insights into malicious behavior and attack patterns, enhancing understanding of cybersecurity threats.",
    "technologies": {
      "Python": "Programming Language",
      "SSH Server": "Built using paramiko for SSH protocol implementation.",
      "Web Server": "Powered by Flask for simulating web vulnerabilities",
      "HTML": "Markup language for web pages"
    },
    'features': ["SSH Honeypot", "Web Server Honeypot", "Data Logging and Monitoring",],
    'github': 'https://github.com/brandon-bwoni/nectar-sentinel',
    'demo': '',
    "screenshots": []
  },
  {
    'id': 'psl-app',
    'name': 'Zimbabwe PSL App',
    'category': 'Mobile App Development',
    'image': psl,
    'banner': pslBanner,
    'description': "This mobile application provides fans of the Zimbabwe Premier Soccer League (ZPSL) with comprehensive access to league information.",
    'fullDescription': "This mobile application provides fans of the Zimbabwe Premier Soccer League (ZPSL) with comprehensive access to league information. Users can view live match updates, track fixtures, standings, and player statistics, and engage with their favorite teams. Built with Flutter, the app ensures a sleek and responsive UI, while Firebase serves as the backend for authentication, real-time updates, and data management. The GetX state management framework ensures seamless navigation and state handling.",
    "technologies": {
      "Flutter": "For cross-platform mobile development.",
      "Authentication": "User login and sign-up.",
      "Firestore": "Database for storing data.",
      "Cloud Functions": "Server-side logic for processing data.",
      "Realtime Database": "Real-time match updates.",
      "Cloud Messaging": "Push notifications.",
      "Firebase Storage": "Media storage (e.g., team logos, player photos)."
    },
    'features': ["User Authentication", "League Fixtures and Results", "Live Updates", "Team and Player Profiles", "Standings and Stats", "Fan Engagement", "Admin Features"],
    'github': 'hhttps://github.com/brandon-bwoni/psl_app',
    'demo': '',
    "screenshots": []
  },
  {
    'id': 'social-api',
    'name': 'Fast Social API',
    'category': 'Mobile App Development',
    'image': fast,
    'banner': fastBanner,
    'description': "This API, built using FastAPI, provides a backend solution for social applications with full CRUD (Create, Read, Update, Delete) functionality.",
    'fullDescription': "This API, built using FastAPI, provides a backend solution for social applications with full CRUD (Create, Read, Update, Delete) functionality. It is designed to handle user accounts, posts, comments, likes, and other common features found in social media platforms. The API is fully tested, adheres to modern development practices, and is designed with scalability and maintainability in mind. It is ready for deployment on platforms like Heroku, Docker, and can integrate with CI/CD pipelines using Git.",
    "technologies": {
      "Python": "Language for development",
      "FastAPI": "Framework for building APIs.",
      "SQLAlchemy": "ORM for database interactions.",
      "PostgreSQL ": "Database for storing data",
      "Docker": "For containerization.",
      "Heroku": "For hosting the API",
      "Git Pipelines": "For setting up CI/CD pipelines."
    },
    'features': ["User Management", "Post Management", "Comments",],
    'github': 'https://github.com/brandon-bwoni/fastapi-social',
    'demo': '',
    "screenshots": []
  },
  {
    'id': 'sheepskin-apparel',
    'name': 'Sheepskin Apparel',
    'category': 'Mobile App Development',
    'image': sheepskin,
    'banner': sheepskinBanner,
    'description': "The Sheepskin Mobile App is a cross-platform e-commerce application for an street wear apparel brand.",
    'fullDescription': "The Sheepskin Mobile App is a cross-platform e-commerce application for an apparel brand. It provides customers with a seamless shopping experience, including browsing products, managing a cart, and completing purchases. The app is built using Flutter for the frontend and Firebase for backend services, offering features such as user authentication, product management, real-time updates, and secure payment processing.",
    "technologies": {
      "Flutter": "For cross-platform mobile development.",
      "Authentication": "User login and sign-up.",
      "Firestore": "Database for storing data.",
      "Cloud Functions": "Server-side logic for processing data.",
      "Cloud Messaging": "Push notifications.",
      "Firebase Storage": "Media storage "
    },
    'features': ["User Authentication", "Product Management", "Cart and Checkout", "Order Management", "Notifications", "Account Management", "Responsive Design"],
    'github': 'https://github.com/brandon-bwoni/sheepskin-apparel',
    'demo': '',
    "screenshots": []
  },
  {
    'id': 'yipee-social',
    'name': 'Yipee Social',
    'category': 'Mobile App Development',
    'image': yipee,
    'banner': yipeeBanner,
    'description': "Yipee is a feature-rich social media for users to share photos, follow each other, interact with posts through likes and comments, and explore trending content.",
    'fullDescription': "Yipee is a feature-rich social media app inspired by Instagram, built using React Native for the frontend and Supabase for the backend. The app enables users to share photos, follow other users, interact with posts through likes and comments, and explore trending content. It prioritizes seamless performance, a clean user interface, and robust backend integration.",
    "technologies": {
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
    'features': ["User Authentication", "User Profiles", "Posts", "Interactions", "Search and Explore", "Notifications", "Settings"],
    'github': 'https://github.com/brandon-bwoni/yipee-chat',
    'demo': '',
    "screenshots": []
  },

];

export { logos, projects };