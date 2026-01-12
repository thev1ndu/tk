# Echo Widget

A Next.js application that provides a customer support chat widget interface designed to be embedded as an iframe.

## Overview

This module serves as the chat interface that gets loaded inside the embed widget. It provides a complete customer support experience with multiple screens including authentication and chat.

## Features

- **Multi-screen Interface**: Loading, selection, auth, inbox, chat, and error screens
- **Real-time Chat**: Live chat functionality with message history
- **Authentication**: User authentication and session management
- **Responsive Design**: Optimized for iframe embedding
- **Theme Support**: Dark/light mode with next-themes
- **State Management**: Zustand stores for screen management and data persistence

## Screens

The widget includes the following screens:

- **Loading**: Initial loading state while fetching organization data
- **Selection**: Choose between different support options
- **Auth**: User authentication screen
- **Inbox**: Message inbox and conversation list
- **Chat**: Main chat interface for text-based support
- **Error**: Error handling and display

## Development

### Requirements

- Node.js 18+
- pnpm

### Install Dependencies

```bash
pnpm install
```

### Run Development Server

```bash
turbo dev
```

The widget will run at `http://localhost:3001`

### Build for Production

```bash
turbo build
```

## Usage

### URL Parameters

The widget accepts the following URL parameters:

- `orgId` (required): Organization ID for the support widget

Example URL:

```
http://localhost:3001?orgId=your-organization-id
```

### Iframe Integration

This widget is designed to be embedded in an iframe. The embed script (from the `embed` module) will create an iframe pointing to this application.

### Embed script (recommended)

Add the EchoWidget script to your site and initialize it:

```html
<script src="/apps/embed/dist/echo-widget.iife.js" defer></script>
<script>
  window.EchoWidget.init({
    orgId: 'your-organization-id', // required unless a default is configured
    position: 'bottom-right' // or 'bottom-left'
  });
</script>
```

The embed script injects an iframe with recommended permissions for the widget:

```html
<iframe
  src="http://localhost:3001?orgId=your-organization-id"
  allow="clipboard-write; autoplay"
  referrerpolicy="strict-origin-when-cross-origin"
  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
></iframe>
```

## Project Structure

```
app/
├── layout.tsx          # Root layout with providers
├── page.tsx           # Main page component
└── favicon.ico        # App favicon

modules/widget/
├── store/             # Zustand stores
│   ├── use-screen-store.ts
│   ├── use-conversation-store.ts
│   ├── use-contact-session-store.ts
│   └── use-widget-settings-store.ts
├── hooks/             # Custom hooks
├── types.ts           # TypeScript types and constants
└── ui/
    ├── components/    # Reusable UI components
    ├── screens/       # Screen components
    │   ├── widget-loading-screen.tsx
    │   ├── widget-selection-screen.tsx
    │   ├── widget-auth-screen.tsx
    │   ├── widget-inbox-screen.tsx
    │   ├── widget-chat-screen.tsx
    │   └── widget-error-screen.tsx
    └── views/         # View components
        └── widget-view.tsx

components/
└── providers.tsx      # React providers (Convex, etc.)

lib/
└── convex.ts          # Convex client configuration
```

## Dependencies

### Core Dependencies

- **Next.js 15**: React framework
- **React 19**: UI library
- **Convex**: Backend and real-time data
- **Zustand**: State management
- **Lucide React**: Icons
- **Sonner**: Toast notifications

### UI Dependencies

- **@workspace/ui**: Shared UI components
- **next-themes**: Theme management
- **Tailwind CSS**: Styling

## Configuration

### Environment Variables

The widget uses environment variables for configuration. Make sure to set up the following:

- Convex configuration (handled by `@workspace/backend`)
- Organization-specific settings

### Convex Integration

The widget integrates with Convex for:

- Real-time messaging
- User authentication
- Conversation management
- Organization settings

## Styling

The widget uses:

- **Tailwind CSS** for styling
- **next-themes** for dark/light mode
- **Geist** and **Geist Mono** fonts
- Responsive design optimized for iframe embedding

## State Management

The widget uses Zustand stores for state management:

- **Screen Store**: Manages current screen and navigation
- **Conversation Store**: Handles chat messages and conversations
- **Contact Session Store**: Manages contact form sessions
- **Widget Settings Store**: Organization-specific settings

## Notes

- The widget is designed to run in a full-screen iframe
- All screens are responsive and optimized for mobile devices
- The application uses `overflow-hidden` to prevent scrolling issues in iframe
- Z-index and positioning are handled by the parent embed script
