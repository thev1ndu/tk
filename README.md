# Next SAAS AI Support Platform

A comprehensive customer support platform built with AI-powered chat widgets and knowledge base management. Built as a Turbo monorepo with Next.js 15, Convex, and modern web technologies.

## 🌐 Live Demos

- **Web CMS Dashboard**: [next-saas-ai-support-platform-web.vercel.app](https://next-saas-ai-support-platform-web.vercel.app)
- **Widget Interface**: [next-saas-ai-support-platform-widge.vercel.app](https://next-saas-ai-support-platform-widge.vercel.app)

## 🚀 Overview

Next SAAS AI Support Platform is a complete SaaS solution for customer support that includes:

- **AI-Powered Chat Widgets**: Intelligent customer support with RAG (Retrieval-Augmented Generation)
- **Knowledge Base Management**: Document processing for API's Knowledge
- **Multi-Platform Integration**: Easy embedding for HTML, React, Next.js, and JavaScript
- **Real-time Dashboard**: Comprehensive CMS for managing support operations
- **Subscription Management**: Built-in billing and plan management

## 🏗️ Architecture

This project is built as a **Turbo monorepo** with the following structure:

```
├── apps/
│   ├── web/           # Main CMS Dashboard (Next.js)
│   ├── widget/        # Chat Widget Interface (Next.js)
│   └── embed/         # Embed Script (Vite)
├── packages/
│   ├── backend/       # Convex Backend (Database + API)
│   ├── ui/           # Shared UI Components
│   ├── eslint-config/ # Shared ESLint Configuration
│   ├── typescript-config/ # Shared TypeScript Configuration
│   └── math/         # Utility Package
└── docker/           # Docker configurations
```

## 📦 Modules

### 🖥️ Web CMS (`apps/web`)

The main Content Management System for managing customer support operations.

**Features:**

- 🔐 Authentication with Clerk
- 💬 Conversation management
- 📚 Knowledge base management
- 🎨 Widget customization
- 🔌 Platform integrations
- 💳 Plans & billing management

**Tech Stack:** Next.js 15, React 19, Clerk, Convex, Zustand

### 💬 Widget Interface (`apps/widget`)

The chat interface that gets embedded as an iframe in customer websites.

**Features:**

- Multi-screen interface (Loading, Selection, Auth, Inbox, Chat, Error)
- Real-time chat functionality
- Responsive design for iframe embedding

**Tech Stack:** Next.js 15, React 19, Convex, Zustand

### 🔗 Embed Script (`apps/embed`)

Lightweight script that creates floating chat widgets on customer websites.

**Features:**

- Floating action button
- Customizable positioning
- Iframe integration
- Organization-specific configuration

**Tech Stack:** Vite, TypeScript, Vanilla JavaScript

### 🗄️ Backend (`packages/backend`)

Convex-based backend providing real-time database and API functionality.

**Features:**

- Real-time database with Convex
- AI agent capabilities
- RAG (Retrieval-Augmented Generation)
- Authentication webhooks
- File processing and indexing

**Tech Stack:** Convex, OpenAI, AWS Secrets Manager

## 🛠️ Development

### Prerequisites

- Node.js 18+
- pnpm
- Docker (for local development)

### Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/thuykaka/next-saas-ai-support-platform
   cd next-saas-ai-support-platform
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   Create `.env.local` files in each module:

   **Backend (`packages/backend/.env.local`):**

   ```env
   # Convex Clould
   CONVEX_DEPLOYMENT=your_convex_deployment # get from dashboard -> settings e.g., dev:adamant-octopus-770
   CONVEX_URL=your_convex_url # get from dashboard -> settings

   # Clerk
   CLERK_JWT_ISSUER_DOMAIN=your_clerk_domain
   CLERK_SECRET_KEY=your_clerk_secret_key
   CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret

   # OpenAI
   OPENAI_API_KEY=your_openai_api_key

   # AWS
   AWS_ACCESS_KEY_ID=your_aws_secret_key
   AWS_SECRET_ACCESS_KEY=your_aws_access_key
   AWS_REGION=your_aws_region
   ```

   **Web CMS (`apps/web/.env.local`):**

   ```env
   # Clerk Configuration
   NEXT_PUBLIC_CLERK_FRONTEND_API_URL=your_clerk_api_url
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
   NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
   NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL="/"
   NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL="/"

   # Convex Configuration
   NEXT_PUBLIC_CONVEX_URL=your_convex_url

   # Sentry Configuration
   SENTRY_AUTH_TOKEN=your_sentry_auth_token
   ```

   **Widget (`apps/widget/.env.local`):**

   ```env
   # Convex Configuration
   NEXT_PUBLIC_CONVEX_URL=your_convex_url
   ```

4. **Start development servers**

   ```bash
   turbo dev
   ```

   This will start all applications:
   - **Web CMS**: http://localhost:3000
   - **Widget**: http://localhost:3001
   - **Embed Demo**: http://localhost:3002
   - **Backend**: http://localhost:3210

## 🐳 Docker Setup

For local development with Docker:

```bash
# Start PostgreSQL
cd docker/postgres
docker-compose up -d

# Start Convex (optional)
cd docker/convex
docker-compose up -d
```

## 📋 Available Scripts

### Root Level

```bash
# Install dependencies
pnpm install

# Start all development servers
turbo dev

# Build all packages
turbo build

# Lint all packages
turbo lint

# Type check all packages
turbo check-types
```

## 🏛️ Project Structure

```
├── apps/
│   ├── web/                    # Main CMS Dashboard
│   │   ├── app/               # Next.js App Router
│   │   ├── modules/           # Feature modules
│   │   ├── components/        # Shared components
│   │   └── lib/              # Utilities
│   ├── widget/                # Chat Widget Interface
│   │   ├── app/              # Next.js App Router
│   │   ├── modules/          # Widget modules
│   │   └── lib/              # Utilities
│   └── embed/                 # Embed Script
│       ├── src/              # Source code
│       ├── demo/             # Demo page
│       └── dist/             # Build output
├── packages/
│   ├── backend/              # Convex Backend
│   │   ├── convex/          # Convex functions
│   │   │   ├── public/      # Public API
│   │   │   ├── private/     # Private functions
│   │   │   └── system/      # System functions
│   │   └── lib/             # Utilities
│   ├── ui/                  # Shared UI Components
│   │   ├── src/            # Component source
│   │   └── components/     # Built components
│   ├── eslint-config/      # ESLint configuration
│   ├── typescript-config/  # TypeScript configuration
│   └── math/              # Utility package
├── docker/                 # Docker configurations
│   ├── postgres/          # PostgreSQL setup
│   └── convex/            # Convex setup
└── turbo.json             # Turbo configuration
```

## 🔧 Configuration

### Environment Variables

Each module requires specific environment variables. See the `.env.local` examples above for each module.

### Sentry Configuration

The Web CMS includes Sentry for error monitoring. Configure in `apps/web/next.config.mjs`:

```javascript
export default withSentryConfig(nextConfig, {
  org: 'your-sentry-org',
  project: 'your-sentry-project'
  // ... other options
});
```

## 🚀 Deployment

### Production Build

```bash
# Build all packages
turbo build

# Start production servers
cd apps/web && pnpm start
cd apps/widget && pnpm start
```

### Deployment Options

- **Vercel**: Deploy Next.js applications
- **Netlify**: Alternative for static hosting
- **AWS**: Full infrastructure deployment
- **Docker**: Containerized deployment

### Docker Deployment

#### Prerequisites

- Docker installed on your system
- Docker Compose (optional, for multi-container setup)

#### Build Docker Images

```bash
# Build both web and widget applications
./docker-build.sh

# Or build individually
docker build -f apps/web/Dockerfile . -t saas-ai-support-platform-web
docker build -f apps/widget/Dockerfile . -t saas-ai-support-platform-widget
```

#### Run with Docker Compose

```bash
# Navigate to docker/apps directory
cd docker/apps

# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## 📚 Documentation

- [Web CMS Documentation](./apps/web/README.md)
- [Widget Documentation](./apps/widget/README.md)
- [Embed Documentation](./apps/embed/README.md)
- [Backend Documentation](./packages/backend/README.md)

## 🖼️ Screenshots

### Web CMS Dashboard

#### Authentication

![Web CMS Authentication](./github/images/web-cms-auth.png)

#### Conversations Management

![Web CMS Conversations](./github/images/web-cms-conversations.png)

#### Knowledge Base Management

![Web CMS Knowledge Base](./github/images/web-cms-knowledge-base.png)

#### Widget Customization

![Web CMS Widget Customization](./github/images/web-cms-widget-customization.png)

#### Platform Integrations

![Web CMS Integrations](./github/images/web-cms-integration.png)

#### Plans & Billing Management

![Web CMS Plans & Billing](./github/images/web-cms-plan-and-billing.png)

### Widget Interface

#### Selection Screen

![Widget Selection](./github/images/widget-embed-1.png)

#### Authentication Interface

![Widget Auth](./github/images/widget-embed-3.png)

#### Chat Interface

![Widget Chat](./github/images/widget-embed-4.png)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 🆘 Support

For support and questions:

- Create an issue in the repository
- Check the documentation in each module
- Review the Convex dashboard for backend issues
