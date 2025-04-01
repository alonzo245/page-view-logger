# Page View Logger

A lightweight, zero-dependency page view logger for browser-based tracking. This script can be deployed via CDN and automatically logs page views with metadata including path, referrer, title, timestamp, user agent, and screen size.

## Features

- Zero dependencies
- Automatic page view logging
- UTM parameter tracking
- Screen size information
- TypeScript support
- CDN-deployable

## Installation

### CDN Usage

Add the following script tag to your HTML:

```html
<script src="https://your-cdn.com/pageview-logger.v1.0.0.js"></script>
```

The script will automatically log page views when loaded.

### NPM Installation

```bash
npm install page-view-logger
```

## Usage

### Automatic Logging

The script automatically logs page views when loaded. Each log includes:

- Current page path
- Referrer
- Page title
- Timestamp
- User agent
- Screen dimensions
- UTM parameters (if present)

### Manual Logging

You can also manually trigger page view logging:

```typescript
import { logPageView } from "page-view-logger";

// Log a page view
logPageView();
```

## Development

### Setup

```bash
npm install
```

### Build

```bash
# Production build
npm run build

# Development build (no minification)
npm run build:dev
```

### Testing

```bash
npm test
```

### Linting

```bash
npm run lint
```

## License

MIT
