const StyleDictionary = require('style-dictionary');

// Register custom formats and transforms if needed
// Example:
// StyleDictionary.registerTransform({ ... });

// Build all platforms
StyleDictionary.extend('./config.json').buildAllPlatforms();

console.log('✅ Design tokens generated successfully'); 