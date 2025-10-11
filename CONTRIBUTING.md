# 🤝 Contributing to FeedMind

Thank you for considering contributing to FeedMind! We're excited to have you join our mission to build an AI-powered news aggregator that helps people consume news more intelligently.

## 🌟 Good First Issues

If you're new to the project, look for issues labeled `good first issue`. These are specifically designed for newcomers and include:
- Documentation improvements
- Basic UI components
- Simple backend endpoints
- Configuration setup
- Testing

## 🚀 Getting Started

1. **Fork the Repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/FeedMind.git
   cd FeedMind
   ```

2. **Set Up Development Environment**
   - Ensure you have Node.js (v16+) installed
   - Install Python (v3.8+) for AI components
   - Follow the setup instructions in README.md

3. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📋 Development Workflow

1. **Pick an Issue**: Comment on an issue you'd like to work on
2. **Discuss First**: For major changes, discuss in issues before coding
3. **Code**: Follow our coding standards (see below)
4. **Test**: Ensure your changes work and don't break existing functionality
5. **Commit**: Use conventional commits (see format below)
6. **Pull Request**: Submit a PR with clear description

## 💻 Development Setup

### Backend (Node.js)
```bash
cd backend
npm install
npm run dev
```

### Frontend (React/Next.js)
```bash
cd frontend
npm install
npm run dev
```

### AI Engine (Python)
```bash
cd ai-engine
pip install -r requirements.txt
python app.py
```

## 📝 Coding Standards

### JavaScript/TypeScript
- Use ESLint and Prettier (configs provided)
- Follow functional programming patterns where possible
- Write meaningful variable and function names
- Add JSDoc comments for functions

### Python
- Follow PEP 8 style guide
- Use type hints where applicable
- Write docstrings for functions and classes
- Keep functions small and focused

## 🔤 Commit Message Format

Use conventional commits:
```
type(scope): description

Examples:
feat(backend): add news aggregation API endpoint
fix(frontend): resolve mobile responsive layout issue
docs(readme): update installation instructions
test(ai): add unit tests for sentiment analysis
```

### Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `test`: Adding tests
- `refactor`: Code refactoring
- `style`: Formatting changes
- `chore`: Maintenance tasks

## 🧪 Testing

- Write tests for new features
- Ensure all existing tests pass
- Include both unit and integration tests
- Test edge cases and error conditions

## 📚 Documentation

- Update README.md if adding new features
- Add inline code comments
- Update API documentation
- Include examples in your code

## 🐛 Reporting Issues

When reporting bugs:
1. Use the bug report template
2. Include steps to reproduce
3. Provide system information
4. Add screenshots if helpful

## 💡 Suggesting Features

For feature requests:
1. Use the feature request template
2. Explain the problem you're solving
3. Describe your proposed solution
4. Consider alternative approaches

## 🏷️ Pull Request Guidelines

### Before Submitting
- [ ] Code follows project conventions
- [ ] All tests pass
- [ ] Documentation is updated
- [ ] No merge conflicts with main branch
- [ ] PR description clearly explains changes

### PR Template
```markdown
## 📝 Description
Brief description of changes

## 🎯 Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Refactoring

## 🧪 Testing
- [ ] Added/updated tests
- [ ] All tests pass
- [ ] Manual testing completed

## 📋 Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
```

## 🤔 Need Help?

- **Documentation**: Check README.md and code comments
- **Questions**: Open a discussion or comment on relevant issues
- **Chat**: Join our community discussions in issues
- **Bugs**: Open an issue with the bug report template

## 🎯 Project Structure

```
FeedMind/
├── backend/          # Node.js/Express API
├── frontend/         # React/Next.js UI
├── ai-engine/        # Python NLP/ML
├── docs/             # Documentation
└── tests/            # Test suites
```

## 🌟 Recognition

Contributors will be:
- Added to the README contributors list
- Recognized in release notes
- Invited to join the core team (for significant contributions)

## 📄 Code of Conduct

Be respectful, inclusive, and collaborative. We follow the [Contributor Covenant](https://www.contributor-covenant.org/) code of conduct.

---

Thank you for contributing to FeedMind! Together, we're building the future of intelligent news consumption. 🧠✨