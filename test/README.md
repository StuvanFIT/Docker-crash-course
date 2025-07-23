# 🐳 Docker Crash Course - Interactive Learning Platform

A comprehensive interactive web application designed to teach Docker fundamentals through hands-on learning. This project serves as both a personal learning journey and an educational resource for peers interested in containerisation and DevOps tools.

## 🎯 Project Goals

**Knowledge Sharing**: Create a comprehensive educational resource to help future peers understand Docker and containerisation concepts.

**Learning by Building**: When learning something new, I believe in building something practical and meaningful related to it.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Docker (for containerisation examples)
- Docker Compose (for multi-container applications)

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd DOCKER-CRASH-COURSE
   ```

2. **Navigate to the app directory**
   ```bash
   cd learning-docker-app
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🛠 Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Containerisation**: Docker & Docker Compose
- **Icons**: Lucide React

## 📚 Course Content

This interactive course covers the following Docker concepts:

- **Introduction to Docker** - What is containerisation and why it matters
- **Installation Guide** - How to set up Docker on different platforms
- **Images & Containers** - Understanding the core Docker concepts
- **Docker Registries** - Working with Docker Hub and private registries
- **Dockerfile** - Creating custom images with best practices
- **Docker Compose** - Managing multi-container applications
- **Docker Limitations** - Understanding when and when not to use Docker
- **Docker in Development Cycle** - Integrating Docker into your workflow

## 📁 Project Structure

```
learning-docker-app/
├── compose/                    # Docker Compose configurations
├── learning-docker-app/        # Main React application
│   ├── dist/                  # Build output directory
│   ├── node_modules/          # Project dependencies
│   ├── public/                # Static assets
│   └── src/                   # Source code
│       ├── assets/            # Images, fonts, etc.
│       ├── components/        # Reusable React components
│       │   └── sections/      # Course section components
│       ├── layouts/           # Layout components
│       ├── utils/             # Utility functions
│       ├── App.tsx            # Main App component
│       ├── DockerCourse.tsx   # Main course component
│       ├── NotFound.tsx       # 404 page component
│       ├── index.css          # Global styles
│       ├── main.tsx           # React entry point
│       └── vite-env.d.ts      # Vite type definitions
│   ├── .gitignore            # Git ignore rules
│   ├── Dockerfile            # Docker configuration for the app
│   ├── eslint.config.js       # ESLint configuration
│   ├── index.html            # HTML template
│   ├── package-lock.json     # Dependency lock file
│   ├── package.json          # Project dependencies and scripts
│   ├── README.md             # Project documentation
│   ├── tsconfig.app.json     # TypeScript config for app
│   ├── tsconfig.json         # Main TypeScript configuration
│   ├── tsconfig.node.json    # TypeScript config for Node.js
│   └── vite.config.ts        # Vite configuration
```


## 🚀 Deployment

The application can be deployed using:

1. **Docker Container**:
   ```bash
   docker build -t docker-course-app .
   docker run -p 3000:80 docker-course-app
   ```

2. **Docker Compose**:
   ```bash
   docker-compose up -d
   ```

## 📚 Additional Resources

- [Official Docker Documentation](https://docs.docker.com/)
- [Docker Hub](https://hub.docker.com/)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)

---

**Note**: This project is part of my personal DevOps learning journey. As I continue to learn and grow, this resource will be updated with new insights and improved content.

*"The best way to learn is by doing, and the best way to solidify learning is by teaching others."*