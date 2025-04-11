# Codewars
This repository contains my solutions to challenges on Codewars. Each challenge is implemented and tested using Jest, and Husky hooks are used to ensure proper test creation and successful passing.

# Branches
- Main: Initially empty, to serve as the starting point for each kyu challenge.
- 8kyu: Contains all the solutions and tests for the 8kyu challenges I'm currently working on.

# Dependencies
- Jest: For testing the solutions.
- Husky: For Git hooks, ensuring tests are created and pass before commits are made.
- ESLint: For maintaining a consistent code structure and syntax.

# Setup
To run this project follow these instructions:
1. Clone it
```bash
git clone https://github.com/yosmelchiang/codewars
cd codewars
```
2. Install dependencies
```bash
npm install
```

3. Checkout the branch corresponding to the Codewars level:
```bash
git checkout [branch name]
```
Replace [branch-name] with the relevant branch for the level (e.g., 8kyu for 8kyu challenges).

4. To run the husky hooks
```bash
npm run prepare
```

5. To run tests use:
```bash
npm test
```

6. To check for any missing tests use:
```bash
npm run check
```
# Linting
ESLint is used in the project to check code quality and maintain consistency. It will run automatically on every commit due to Husky hooks.