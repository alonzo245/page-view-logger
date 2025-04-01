# Page View Logger

A lightweight, zero-dependency page view logger for browser-based tracking. Built with TypeScript and designed for easy integration with any web application.

## Features

- Zero dependencies
- Automatic page view tracking
- UTM parameter tracking
- Screen size information
- User agent tracking
- Referrer tracking
- Timestamp tracking
- TypeScript support

## Installation

```bash
# Using npm
npm install page-view-logger

# Using yarn
yarn add page-view-logger
```

## Usage

### Basic Usage

```typescript
import { logPageView } from "page-view-logger";

// Log a page view
logPageView();
```

### Automatic Logging

The logger will automatically track page views when imported:

```typescript
import "page-view-logger";
```

### Data Structure

The logger collects the following data:

```typescript
interface PageViewData {
  path: string; // Current page path
  referrer: string; // Previous page URL
  title: string; // Page title
  timestamp: string; // ISO timestamp
  userAgent: string; // Browser user agent
  screenSize: {
    // Screen dimensions
    width: number;
    height: number;
  };
  utmParams?: {
    // Optional UTM parameters
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_term?: string;
    utm_content?: string;
  };
}
```

## Development

This project uses a monorepo structure with Yarn workspaces.

### Setup

```bash
# Install dependencies
yarn install

# Build packages
yarn build

# Run development server
yarn dev
```

### Project Structure

```
packages/
  ├── page-view-logger/  # Main package
  └── demo/             # Demo application
```

### Available Scripts

- `yarn build` - Build all packages
- `yarn dev` - Run demo application
- `yarn test` - Run tests
- `yarn lint` - Run linter

## License

MIT
