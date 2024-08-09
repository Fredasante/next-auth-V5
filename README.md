# Next.js Authentication Application

This project is a Next.js application that includes authentication using NextAuth v5. The application supports:

- Sign-in with credentials, Google, and GitHub
- Email verification
- Forgot password functionality

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Getting Started](#getting-started)
   - [1. Clone the Repository](#1-clone-the-repository)
   - [2. Install Dependencies](#2-install-dependencies)
   - [3. Set Up Environment Variables](#3-set-up-environment-variables)
   - [4. Set Up Prisma](#4-set-up-prisma)
   - [5. Run the Application](#5-run-the-application)
3. [Conclusion](#conclusion)

## Prerequisites

Make sure you have the following installed:

- Node.js (version 14.x or later)
- npm or yarn
- [Prisma](https://www.prisma.io/docs/getting-started) for ORM
- [Neon](https://neon.tech) for PostgreSQL database

## Getting Started

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/Fredasante/next-auth-V5.git
cd next-auth-v5

```

### 2. Install Dependencies

Navigate to the project directory and install the required dependencies:

```bash
npm install
# or
yarn install

```

### 3. Set Up Environment Variables

Create a `.env` file in the root of your project to store your environment variables:

```bash
touch .env

```

```plaintext
# The base URL of your frontend application
FRONTEND_URL="http://localhost:3000"

# The main database connection string (pooled)
DATABASE_URL="postgresql://next-auth_owner:your_password@your-neon-database-url/next-auth?sslmode=require"

# The unpooled database connection string (for specific needs)
DATABASE_URL_UNPOOLED="postgresql://next-auth_owner:your_password@your-neon-database-url/next-auth?sslmode=require"

# A secret key used by NextAuth to encrypt and sign cookies and tokens
AUTH_SECRET="your_auth_secret_key"

# GitHub OAuth credentials
GITHUB_CLIENT_ID="your_github_client_id"
GITHUB_CLIENT_SECRET="your_github_client_secret"

# Google OAuth credentials
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"

# Resend API key for email functionality
RESEND_API_KEY="your_resend_api_key"

```

### 4. Set Up Prisma

Run the following commands to generate the Prisma client and apply the database schema:

```bash
npx prisma generate

```

### 5. Run the Application

Start the development server with the following command:

```bash
npm run dev
# or
yarn dev

```

Visit [http://localhost:3000](http://localhost:3000) in your browser to access the application.

## Conclusion

Your Next.js application is now set up with authentication, including credentials, Google, GitHub sign-in, email verification, and password reset functionalities. Ensure that your Prisma and Neon configurations are correct before deploying the application to production.
