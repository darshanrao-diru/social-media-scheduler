# Social Media Content Scheduler

Multi-platform social media scheduling app with calendar planning, post management, and engagement analytics using Next.js, TypeScript, and API integrations.

## Features

- 📅 **Content Calendar**: Visual calendar for scheduling posts
- 📱 **Multi-Platform Support**: Post to Twitter, LinkedIn, and Instagram
- 🎨 **Media Upload**: Support for images, videos, and carousels
- 📊 **Performance Analytics**: Track engagement, impressions, and clicks
- 🔄 **Queue Management**: Schedule multiple posts in advance
- ✏️ **Draft & Preview**: Write drafts and preview before publishing
- 👥 **Team Collaboration**: Share calendars with team members
- ⏰ **Smart Scheduling**: Optimal posting times based on audience data
- 📱 **Responsive Design**: Mobile-friendly interface

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js
- **Database**: Firebase
- **Social APIs**: Twitter API v2, LinkedIn API, Instagram Graph API
- **State Management**: Zustand
- **Calendar**: React Calendar

## Quick Start

### Prerequisites
- Node.js 18+
- Social media API credentials
- Firebase account

### Installation

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Setup Firebase:
   - Create a Firebase project
   - Configure authentication
   - Add credentials to .env.local

3. Setup Social Media APIs:
   - Register apps on Twitter Developer Portal
   - Register app on LinkedIn
   - Create Instagram Business Account
   - Add API credentials to .env.local

4. Start development server:
\`\`\`bash
npm run dev
\`\`\`

Visit http://localhost:3000

## Project Structure

```
├── pages/
│   ├── index.tsx              # Dashboard
│   ├── schedule.tsx           # Schedule page
│   ├── analytics.tsx          # Analytics page
│   ├── settings.tsx           # Settings page
│   └── api/
│       ├── auth/              # Auth endpoints
│       └── social/            # Social media endpoints
├── components/
│   ├── calendar/              # Calendar components
│   ├── post-composer/         # Post creation components
│   ├── analytics/             # Analytics components
│   └── layout/                # Layout components
├── lib/
│   ├── firebase.ts            # Firebase config
│   ├── social-api.ts          # Social API clients
│   └── auth.ts                # Auth utilities
└── styles/                    # Global styles
```

## API Integration

### Twitter API
- Post creation
- Thread support
- Scheduled posts
- Tweet analytics

### LinkedIn API
- Article publishing
- Text posts
- Document sharing
- Performance metrics

### Instagram Graph API
- Image/carousel posts
- Story creation
- Engagement metrics
- Follower insights

## Analytics Tracked

- Impressions
- Engagement rate
- Clicks
- Shares
- Comments
- Likes
- Reach
- Saves

## Scheduled Publishing

Use cron jobs to automatically publish scheduled content:
- Daily checks for scheduled posts
- Automatic publishing at set times
- Failed post retries
- Notification alerts

## Deployment

Deploy to Vercel:
\`\`\`bash
vercel deploy
\`\`\`

## License

MIT
