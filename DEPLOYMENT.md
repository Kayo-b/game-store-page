# Deployment Guide

## Untracking node_modules and build files

### Initial Setup

1. **Update .gitignore** to include:
```
node_modules/
build/
backend/node_modules/
```

2. **Remove tracked files from Git**:
```bash
# Remove from Git tracking (keeps files on disk)
git rm -r --cached node_modules build

# Commit the changes
git commit -m "Stop tracking node_modules and build directories"

# Push to remote
git push origin main
```

3. **Discard any unstaged changes** in these directories:
```bash
git restore build/ node_modules/
```

## Cleaning Up

### Clear node_modules and Cache
```bash
# Remove node_modules and cache
rm -rf node_modules
rm -rf node_modules/.cache

# Remove build folder
rm -rf build

# Clean npm cache (optional)
npm cache clean --force

# Reinstall dependencies
npm install
```

### Clear Backend node_modules (if applicable)
```bash
cd backend
rm -rf node_modules
npm install
cd ..
```

## Deploy to GitHub Pages

### Quick Deploy Script
```bash
# Build the project
npm run build

# Add all changes
git add .

# Commit with timestamp
git commit -m "Build and deploy: $(date '+%Y-%m-%d %H:%M:%S')"

# Push to GitHub
git push origin main

echo "✅ Build, commit, and push complete!"
```

### Manual Deploy Steps

1. **Build the production version**:
```bash
npm run build
```

2. **Stage and commit the build**:
```bash
git add .
git commit -m "Production build for deployment"
```

3. **Push to GitHub**:
```bash
git push origin main
```

4. **Verify GitHub Pages Settings**:
   - Go to repository Settings → Pages
   - Source: Deploy from branch `main`
   - Folder: `/ (root)` or `/docs` depending on setup

### Your Site URL
Based on your configuration, the site should be available at:
```
https://kayo-b.github.io/game-store-page/
```

## Common Issues

### Issue: Changes to node_modules/build still showing
**Solution**: The files were previously tracked. Run:
```bash
git rm -r --cached node_modules build
git commit -m "Remove tracked build artifacts"
```

### Issue: Build files not updating on GitHub Pages
**Solution**: 
- Wait 1-2 minutes for GitHub to process the deployment
- Check GitHub Actions tab for deployment status
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)

### Issue: 404 Error on GitHub Pages
**Solution**: Check `package.json` has correct homepage:
```json
"homepage": "https://kayo-b.github.io/game-store-page"
```

## Best Practices

1. **Never commit node_modules or build/** - They should be in `.gitignore`
2. **Build before deploying** - Always run `npm run build` before pushing
3. **Test locally first** - Use `npm start` to verify changes work
4. **Keep dependencies updated** - Regularly run `npm update`
5. **Clear cache if issues** - Sometimes clearing npm cache helps resolve build problems
