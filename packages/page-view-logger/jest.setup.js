// Mock window.location
const originalLocation = window.location;
delete window.location;
window.location = {
  ...originalLocation,
  pathname: "/",
  search: "",
};

// Mock document
const originalDocument = document;
Object.defineProperty(document, "title", {
  writable: true,
  value: "Test Page",
});
Object.defineProperty(document, "referrer", {
  writable: true,
  value: "",
});

// Mock window.screen
Object.defineProperty(window, "screen", {
  writable: true,
  value: {
    width: 1920,
    height: 1080,
  },
});

// Mock navigator
Object.defineProperty(window, "navigator", {
  writable: true,
  value: {
    userAgent: "Test User Agent",
  },
});
