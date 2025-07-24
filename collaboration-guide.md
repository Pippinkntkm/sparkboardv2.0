# Collaboration Guide - SparkBoard V2.0

## 🍴 Forking the Repository

### Step 1: Fork on GitHub
1. Go to: https://github.com/Pippinkntkm/sparkboardv2.0
2. Click the **"Fork"** button in the top right
3. Choose your GitHub account as the destination
4. Your fork will be created at: `https://github.com/YOUR_USERNAME/sparkboardv2.0`

### Step 2: Clone Your Fork
```bash
# Clone your fork (replace YOUR_USERNAME)
git clone https://github.com/YOUR_USERNAME/sparkboardv2.0.git
cd sparkboardv2.0

# Add the original repository as "upstream"
git remote add upstream https://github.com/Pippinkntkm/sparkboardv2.0.git
```

### Step 3: Set Up Development Environment
```bash
# Install dependencies
npm install

# Start development server
npm start
```

## 🔄 Making Changes & Collaborating

### For Person A (Original Owner):
```bash
# Work on feature branch
git checkout -b feature/new-feature
# Make changes...
git add .
git commit -m "Add new feature"
git push origin feature/new-feature
```

### For Person B (Fork Owner):
```bash
# Create feature branch
git checkout -b feature/another-feature
# Make changes...
git add .
git commit -m "Add another feature"
git push origin feature/another-feature
```

## 📤 Creating Pull Requests

### From Fork to Original Repository:
1. Go to your fork on GitHub
2. Click **"Compare & pull request"** for your branch
3. Write a description of your changes
4. Submit the pull request
5. Original owner reviews and merges

### From Feature Branch to Main:
1. Go to the original repository
2. Create pull request from feature branch to main
3. Review and merge changes

## 🔄 Keeping Your Fork Updated

```bash
# Fetch latest changes from original repo
git fetch upstream

# Switch to main branch
git checkout main

# Merge upstream changes
git merge upstream/main

# Push to your fork
git push origin main
```

## 🎯 Best Practices

### Branch Naming:
- `feature/feature-name` - New features
- `bugfix/bug-description` - Bug fixes
- `hotfix/urgent-fix` - Critical fixes
- `docs/documentation` - Documentation updates

### Commit Messages:
- Use clear, descriptive messages
- Start with a verb (Add, Fix, Update, etc.)
- Keep under 50 characters for the first line

### Before Pushing:
- Run `npm test` to ensure tests pass
- Run `npm run build` to check for build errors
- Test your changes locally

## 🚀 Quick Start Commands

```bash
# Clone and set up fork
git clone https://github.com/YOUR_USERNAME/sparkboardv2.0.git
cd sparkboardv2.0
git remote add upstream https://github.com/Pippinkntkm/sparkboardv2.0.git
npm install
npm start

# Create feature branch
git checkout -b feature/my-feature
# Make changes...
git add .
git commit -m "Add my feature"
git push origin feature/my-feature
```

## 🔗 Useful Links

- **Original Repository**: https://github.com/Pippinkntkm/sparkboardv2.0
- **Your Fork**: https://github.com/YOUR_USERNAME/sparkboardv2.0
- **GitHub Pull Request Guide**: https://docs.github.com/en/pull-requests

## 💡 Tips for Smooth Collaboration

1. **Communicate** - Let each other know what you're working on
2. **Use branches** - Never work directly on main
3. **Test thoroughly** - Ensure your changes don't break existing functionality
4. **Review carefully** - Take time to review pull requests
5. **Keep updated** - Regularly sync with the upstream repository

Happy collaborating! 🎉 