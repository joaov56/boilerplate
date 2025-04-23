# Full Stack Boilerplate

A modern full-stack boilerplate with Next.js frontend and Fastify backend.

## Tech Stack

### Frontend

- Next.js 14
- TypeScript
- Tailwind CSS
- Shadcn UI
- NextAuth.js
- React Query

### Backend

- Fastify
- MongoDB
- Swagger/OpenAPI
- Jest
- TypeScript

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (running locally or connection string)
- pnpm (v8.15.1 or higher)

## Setup

### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

The frontend will be available at http://localhost:3000

### Backend Setup

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

The backend will be available at http://localhost:3001
API documentation will be available at http://localhost:3001/documentation

## Testing

### Frontend Tests

```bash
cd frontend
pnpm test
```

### Backend Tests

```bash
cd backend
pnpm test
```

## Project Structure

```
.
├── frontend/           # Next.js frontend application
│   ├── src/
│   │   ├── app/       # Next.js app directory
│   │   ├── components/# React components
│   │   └── lib/       # Utility functions and configurations
│   └── public/        # Static assets
│
└── backend/           # Fastify backend application
    ├── src/
    │   ├── routes/    # API routes
    │   ├── models/    # MongoDB models
    │   ├── services/  # Business logic
    │   └── tests/     # Test files
    └── dist/          # Compiled JavaScript files
```

## Environment Variables

### Frontend

Create a `.env.local` file in the frontend directory:

```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
```

### Backend

Create a `.env` file in the backend directory:

```
MONGODB_URI=mongodb://localhost:27017/boilerplate
PORT=3001
```
