# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, showcasing my skills, services, and projects with beautiful animations and dark/light theme support.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Dark/Light Theme**: Toggle between themes with persistent state
- **Responsive**: Fully responsive design that works on all devices
- **Animations**: Smooth page transitions and component animations using Framer Motion
- **Contact Form**: Working contact form with EmailJS integration
- **Project Showcase**: Dynamic project galleries with detailed views
- **Services Display**: Comprehensive services section with interactive cards
- **Type Animations**: Dynamic typewriter effects for engaging text display

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Theme Management**: next-themes
- **Form Handling**: EmailJS
- **Notifications**: React Toastify
- **Type Effects**: Typewriter Effect

## 📁 Project Structure

```
src/
├── animations/          # Animation components and variants
├── app/                # Next.js app router pages
├── assets/             # Static images and resources
├── components/         # Reusable UI components
│   ├── layout/         # Layout components (Header, Footer, etc.)
│   ├── theme/          # Theme switching components
│   └── UI/             # General UI components
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/brandon-bwoni/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add your EmailJS credentials:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 📱 Pages

- **Home**: Hero section with introduction and skills overview
- **About**: Detailed information about background and experience
- **Services**: Comprehensive list of offered services
- **Projects**: Portfolio of completed projects with detailed views
- **Contact**: Contact form and social media links
- **Resume**: Downloadable resume section

## 🎨 Key Components

- **Services Component**: Refactored to use array mapping for better maintainability
- **Project Cards**: Dynamic project display with hover effects
- **Contact Form**: Validated form with email integration
- **Theme Switcher**: Smooth theme transitions
- **Navigation**: Responsive navigation with mobile support

## 🚀 Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Add your environment variables
4. Deploy!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

For any questions or collaborations, feel free to reach out through the contact form on the website or connect with me on social media.
