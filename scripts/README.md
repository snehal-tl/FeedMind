# 🔧 Scripts Directory

This directory contains utility scripts for managing the FeedMind project.

## 📋 Available Scripts

### 🌟 create-good-first-issues.js
Automatically creates good first issues for new contributors.

**Usage:**
```bash
# Make sure you have GitHub CLI installed and authenticated
gh auth login

# Run the script to create all good first issues
node scripts/create-good-first-issues.js
```

**What it does:**
- Creates 8+ beginner-friendly issues across all project components
- Adds appropriate labels (`good first issue`, `help wanted`, etc.)
- Includes detailed descriptions and guidance for new contributors
- Covers frontend, backend, AI/ML, documentation, and testing tasks

**Requirements:**
- GitHub CLI (`gh`) installed and authenticated
- Write access to the repository
- Internet connection

**Alternative:**
If you don't have GitHub CLI, you can manually create issues using the templates in `GOOD_FIRST_ISSUES.md`.

## 🚀 Future Scripts

Additional scripts that could be added:
- `setup-dev-environment.sh` - Automated development setup
- `run-tests.sh` - Cross-platform test runner
- `deploy.sh` - Deployment automation
- `generate-docs.js` - API documentation generator
- `check-dependencies.js` - Dependency vulnerability scanner

## 📝 Contributing

When adding new scripts:
1. Make them cross-platform compatible when possible
2. Include proper error handling and user feedback
3. Add documentation in this README
4. Use descriptive file names
5. Include usage examples

## 🛠️ Script Guidelines

- Use Node.js for JavaScript automation
- Use bash/shell for system operations
- Include help/usage information
- Add error handling and validation
- Test on different platforms when possible