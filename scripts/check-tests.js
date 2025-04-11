const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Get the list of staged files
const stagedFiles = execSync('git diff --cached --name-only', { encoding: 'utf-8' })
  .split('\n')
  .filter(f => f.endsWith('.js') && !f.startsWith('__tests__/') && !f.includes('scripts/check-tests.js')); // Exclude the check-tests.js file

let missingTests = [];

// Check for missing test files
stagedFiles.forEach(file => {
  const base = path.basename(file, '.js');
  const testPath = path.join('__tests__', `${base}.test.js`);

  if (!fs.existsSync(testPath)) {
    missingTests.push(file);
  }
});

// If there are missing tests, print an error and block the commit
if (missingTests.length > 0) {
  console.error('❌ Commit blocked. Missing tests for:');
  missingTests.forEach(file => console.error(`- ${file}`));
  process.exit(1); // Block commit if there are missing tests
}
