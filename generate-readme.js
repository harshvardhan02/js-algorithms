// generate-readme.js
// const fs = require('fs');
// const path = require('path');

import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

const categories = [
  'sorting',
  'searching',
  'dsa-patterns',
  'dynamic-programming',
  'string-algorithms',
  'common-problems',
  // ... add more
];

let markdown = `# JavaScript Algorithms Repository\n\n`;

categories.forEach(category => {
  const dirPath = path.join(__dirname, 'algorithms', category);
  const files = fs.readdirSync(dirPath);

  markdown += `## ${category.toUpperCase()}\n`;
  files.forEach(file => {
    const algoName = path.basename(file, '.js').replace(/-/g, ' ');
    markdown += `- [${algoName.toUpperCase()}](./algorithms/${category}/${file})\n`;
  });
  markdown += '\n';
});

fs.writeFileSync('README.md', markdown);