#!/usr/bin/env node

/**
 * Script to create good first issues for FeedMind repository
 * Usage: node scripts/create-good-first-issues.js
 * 
 * Requires:
 * - GitHub CLI (gh) installed and authenticated
 * - OR GitHub token in GITHUB_TOKEN environment variable
 */

const { execSync } = require('child_process');

const issues = [
  {
    title: "[Good First Issue] Create Project Structure and Boilerplate",
    body: `## 📝 Description
Set up the basic project folder structure for FeedMind with initial boilerplate code.

## 🎯 Goal
Establish the foundation structure for frontend, backend, and AI engine components.

## 📋 Tasks
- [ ] Create backend/ folder with basic Express.js setup
- [ ] Create frontend/ folder with React/Next.js boilerplate  
- [ ] Create ai-engine/ folder with Python Flask/FastAPI setup
- [ ] Add .gitignore files for each component
- [ ] Create package.json files with basic dependencies

## 🧭 Guidance for New Contributors
- Use create-next-app for frontend setup
- Use express-generator or create basic Express setup  
- Include common Node.js and Python ignore patterns
- Follow the project structure outlined in README.md

## 💡 Acceptance Criteria
- All three main folders exist with basic setup
- Each component has appropriate .gitignore
- Package files include necessary dependencies
- Basic Hello World functionality works in each component

## 🔗 Related Files/Directories
- backend/, frontend/, ai-engine/
- Root level configuration files`,
    labels: ["good first issue", "setup", "help wanted"]
  },
  
  {
    title: "[Good First Issue] Add Code of Conduct",
    body: `## 📝 Description
Add a comprehensive Code of Conduct to establish community guidelines and create a welcoming environment for all contributors.

## 🎯 Goal
Create a safe and inclusive environment for all contributors.

## 📋 Tasks
- [ ] Create CODE_OF_CONDUCT.md file
- [ ] Use Contributor Covenant as base template
- [ ] Customize for FeedMind project values
- [ ] Add contact information for reporting issues
- [ ] Link from main README.md

## 🧭 Guidance for New Contributors
- Visit contributor-covenant.org for the standard template
- Include our project's specific values around AI ethics and news integrity
- Add clear reporting mechanisms and contact information
- Ensure the language is welcoming and inclusive

## 💡 Acceptance Criteria
- File follows standard Contributor Covenant format
- Includes clear reporting guidelines and contact info
- Is properly linked from README.md
- Reflects FeedMind's values around responsible AI

## 🔗 Related Files/Directories
- CODE_OF_CONDUCT.md (new file)
- README.md (update to add link)`,
    labels: ["good first issue", "documentation", "help wanted"]
  },

  {
    title: "[Good First Issue] Create Basic Navigation Component",
    body: `## 📝 Description
Build a responsive navigation header component for the FeedMind application.

## 🎯 Goal
Create a user-friendly navigation component that works across all devices.

## 📋 Tasks
- [ ] Create components/Navigation.jsx component
- [ ] Include logo/brand name FeedMind
- [ ] Add navigation links (Home, Categories, Search, About)
- [ ] Make responsive for mobile devices with hamburger menu
- [ ] Add dark/light mode toggle button (UI only for now)

## 🧭 Guidance for New Contributors
- Use React functional components with hooks
- Style with TailwindCSS classes (or CSS modules if preferred)
- Include hamburger menu for mobile breakpoints
- Follow accessibility best practices (ARIA labels, keyboard navigation)
- Refer to design systems like Material-UI or Ant Design for inspiration

## 💡 Acceptance Criteria
- Component renders without errors in different screen sizes
- Responsive design works on mobile (< 768px)
- Follows project coding standards and ESLint rules
- Includes basic accessibility features (ARIA, semantic HTML)
- Navigation is keyboard accessible

## 🔗 Related Files/Directories
- frontend/src/components/Navigation.jsx
- frontend/src/styles/ (for any custom CSS)`,
    labels: ["good first issue", "frontend", "react", "help wanted"]
  },

  {
    title: "[Good First Issue] Create Basic Express Server Setup",
    body: `## 📝 Description
Set up a basic Express.js server with essential middleware and routing structure for the FeedMind backend API.

## 🎯 Goal
Establish a robust, secure, and well-structured Express.js backend foundation.

## 📋 Tasks
- [ ] Initialize Express.js application in backend/ folder
- [ ] Add essential middleware (CORS, helmet, compression, body-parser)
- [ ] Create basic route structure (/api/v1/)
- [ ] Add health check endpoint (GET /api/health)
- [ ] Set up environment configuration with dotenv
- [ ] Add basic error handling middleware

## 🧭 Guidance for New Contributors
- Follow Express.js best practices and security guidelines
- Use middleware for security (helmet) and performance (compression)
- Create modular route files in routes/ folder
- Include proper error handling with status codes
- Use environment variables for configuration

## 💡 Acceptance Criteria
- Server starts without errors on configured port
- Health check endpoint returns 200 with system info
- Environment variables are configurable via .env
- Basic security middleware is properly configured
- API follows REST conventions with /api/v1 prefix

## 🔗 Related Files/Directories
- backend/server.js
- backend/routes/index.js
- backend/.env.example
- backend/middleware/`,
    labels: ["good first issue", "backend", "nodejs", "help wanted"]
  },

  {
    title: "[Good First Issue] Create Basic Sentiment Analysis Script",
    body: `## 📝 Description
Create a Python script that performs basic sentiment analysis on news article text using NLP libraries.

## 🎯 Goal
Build the foundation for AI-powered sentiment analysis of news articles.

## 📋 Tasks
- [ ] Install required NLP libraries (TextBlob, NLTK, or Transformers)
- [ ] Create sentiment_analyzer.py with main analysis function
- [ ] Handle different input formats (title, content, summary)
- [ ] Return structured sentiment scores (positive/negative/neutral + confidence)
- [ ] Add basic text preprocessing (cleaning, normalization)
- [ ] Create simple test cases

## 🧭 Guidance for New Contributors
- Start with TextBlob for simplicity, or use Hugging Face transformers
- Include confidence scores in output (0.0 to 1.0 range)
- Handle edge cases (empty text, very short text, non-English)
- Consider using pre-trained models like VADER or RoBERTa
- Follow Python PEP 8 style guidelines

## 💡 Acceptance Criteria
- Function returns sentiment classification (positive/negative/neutral)
- Includes confidence/probability scores
- Handles various text inputs gracefully
- Has basic unit tests demonstrating functionality
- Code is well-documented with docstrings

## 🔗 Related Files/Directories
- ai-engine/sentiment_analyzer.py
- ai-engine/requirements.txt
- ai-engine/tests/test_sentiment.py`,
    labels: ["good first issue", "ai/ml", "python", "nlp", "help wanted"]
  },

  {
    title: "[Good First Issue] Set Up Testing Framework",
    body: `## 📝 Description
Set up comprehensive testing frameworks for frontend (Jest), backend (Mocha/Jest), and AI components (pytest).

## 🎯 Goal
Establish robust testing infrastructure to ensure code quality and reliability.

## 📋 Tasks
- [ ] Configure Jest for React/frontend testing
- [ ] Set up Mocha or Jest for Node.js/backend testing
- [ ] Configure pytest for Python/AI engine testing
- [ ] Add test scripts to package.json files
- [ ] Create sample test files for each component
- [ ] Add test coverage reporting

## 🧭 Guidance for New Contributors
- Use popular, well-documented testing libraries
- Include both unit and integration test examples
- Add test coverage reporting (nyc, jest --coverage)
- Create npm/yarn scripts for easy test running
- Follow testing best practices (AAA pattern, descriptive names)

## 💡 Acceptance Criteria
- All three components have working test frameworks
- Sample tests pass successfully
- Test coverage reporting is configured
- Clear npm/yarn scripts exist for running tests
- CI-ready configuration (can run in automated environments)

## 🔗 Related Files/Directories
- frontend/src/tests/App.test.js
- backend/tests/server.test.js
- ai-engine/tests/test_basic.py
- Configuration files (jest.config.js, pytest.ini)`,
    labels: ["good first issue", "testing", "setup", "help wanted"]
  },

  {
    title: "[Good First Issue] Add Environment Setup Guide",
    body: `## 📝 Description
Create detailed environment setup documentation for different operating systems to help new contributors get started quickly.

## 🎯 Goal
Make it easy for new contributors to set up their development environment.

## 📋 Tasks
- [ ] Create docs/ folder
- [ ] Write docs/SETUP.md with OS-specific instructions
- [ ] Include Node.js, Python, and database setup
- [ ] Add troubleshooting section for common issues
- [ ] Include IDE/editor recommendations and configurations
- [ ] Add screenshots or GIFs where helpful

## 🧭 Guidance for New Contributors
- Cover Windows, macOS, and Linux installation steps
- Include version requirements for all dependencies
- Add troubleshooting for common setup issues
- Test instructions on different systems if possible
- Make instructions copy-paste friendly

## 💡 Acceptance Criteria
- Setup guide covers all major operating systems
- Includes all required dependencies with version info
- Has troubleshooting section for common issues
- Instructions are tested and verified to work
- Includes helpful screenshots or visual aids

## 🔗 Related Files/Directories
- docs/SETUP.md
- docs/TROUBLESHOOTING.md (optional)
- docs/IDE_SETUP.md (optional)`,
    labels: ["good first issue", "documentation", "help wanted"]
  },

  {
    title: "[Good First Issue] Design Loading Skeleton Components",
    body: `## 📝 Description
Create loading skeleton components for news articles and feeds to improve perceived performance and user experience.

## 🎯 Goal
Provide smooth loading states that match the final content layout.

## 📋 Tasks
- [ ] Create ArticleSkeleton.jsx component
- [ ] Create FeedSkeleton.jsx component for multiple articles
- [ ] Add smooth shimmer/pulse loading animations
- [ ] Make components reusable with props (count, variant)
- [ ] Ensure responsive design across screen sizes
- [ ] Add Storybook stories (optional but recommended)

## 🧭 Guidance for New Contributors
- Use CSS animations or libraries like react-loading-skeleton
- Match the layout and dimensions of actual components
- Include shimmer/pulse animations for better UX
- Make components configurable (number of items, sizes, etc.)
- Consider using CSS-in-JS or TailwindCSS for styling

## 💡 Acceptance Criteria
- Skeletons match the layout of real article components
- Smooth animations provide good visual feedback
- Components are reusable and configurable
- Work well across different screen sizes
- Load quickly without affecting performance

## 🔗 Related Files/Directories
- frontend/src/components/skeletons/ArticleSkeleton.jsx
- frontend/src/components/skeletons/FeedSkeleton.jsx
- frontend/src/stories/ (if using Storybook)`,
    labels: ["good first issue", "frontend", "ui/ux", "help wanted"]
  }
];

function createIssueWithGH(issue) {
  try {
    const labelsStr = issue.labels.map(l => `"${l}"`).join(',');
    const escapedBody = issue.body.replace(/"/g, '\\"').replace(/`/g, '\\`');
    const command = `gh issue create --title "${issue.title}" --body "${escapedBody}" --label ${labelsStr}`;
    
    console.log(`Creating issue: ${issue.title}`);
    execSync(command, { stdio: 'inherit' });
    console.log('✅ Issue created successfully\n');
  } catch (error) {
    console.error(`❌ Failed to create issue: ${issue.title}`);
    console.error(error.message);
    console.log('Skipping to next issue...\n');
  }
}

function checkGHCLI() {
  try {
    execSync('gh --version', { stdio: 'pipe' });
    return true;
  } catch (error) {
    return false;
  }
}

function main() {
  console.log('🌟 Creating Good First Issues for FeedMind\n');
  
  if (!checkGHCLI()) {
    console.error('❌ GitHub CLI (gh) is not installed or not authenticated.');
    console.error('Please install GitHub CLI and authenticate with:');
    console.error('  gh auth login');
    console.error('\nAlternatively, you can manually create these issues using the content in GOOD_FIRST_ISSUES.md');
    process.exit(1);
  }

  console.log('✅ GitHub CLI detected and ready\n');
  console.log(`📝 Creating ${issues.length} good first issues...\n`);

  issues.forEach((issue, index) => {
    console.log(`[${index + 1}/${issues.length}] ${issue.title.substring(0, 50)}...`);
    createIssueWithGH(issue);
    
    // Add small delay to avoid rate limiting
    if (index < issues.length - 1) {
      console.log('⏳ Waiting 2 seconds before next issue...');
      execSync('sleep 2');
    }
  });

  console.log('🎉 All good first issues created successfully!');
  console.log('\n📋 Next steps:');
  console.log('1. Review the created issues on GitHub');
  console.log('2. Pin important issues to the repository');
  console.log('3. Share the repository with potential contributors');
  console.log('4. Monitor and help contributors with their first PRs');
  console.log('\n🌟 Happy contributing!');
}

if (require.main === module) {
  main();
}

module.exports = { issues, createIssueWithGH };