# Vercel Deployment Guide

## Issue Fixed
The deployment error was caused by missing Tailwind CSS dependencies in the `portfolio/package.json` file. The dependencies were incorrectly placed in the root `package.json` instead of the portfolio subdirectory where the actual Vite project resides.

## Changes Made

### 1. Updated `portfolio/package.json`
Added the following devDependencies:
- `tailwindcss: ^3.4.19`
- `autoprefixer: ^10.4.24`
- `postcss: ^8.5.6`

### 2. Created `vercel.json`
Configured Vercel to:
- Set `rootDirectory` to `portfolio` (where the Vite project is located)
- Use the correct build and install commands
- Output to `portfolio/dist`

## Deployment Steps

### Option 1: Automatic Deployment (Recommended)
1. Commit all changes to your repository:
   ```bash
   git add .
   git commit -m "Fix: Add Tailwind dependencies and Vercel config"
   git push origin main
   ```

2. Vercel will automatically detect the changes and trigger a new deployment
3. The build should now succeed!

### Option 2: Manual Deployment via Vercel Dashboard
1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → General
4. Under "Root Directory", ensure it's set to `portfolio`
5. Trigger a new deployment from the Deployments tab

### Option 3: Deploy via Vercel CLI
```bash
# Install Vercel CLI if you haven't
npm i -g vercel

# Deploy from the root directory
vercel --prod
```

## Verification
After deployment, verify:
- ✅ Build completes without errors
- ✅ Tailwind CSS styles are applied correctly
- ✅ All pages load properly
- ✅ Dark/light theme toggle works

## Project Structure
```
root/
├── vercel.json          # Vercel configuration
├── package.json         # Root dependencies (optional)
└── portfolio/           # Main Vite + React project
    ├── package.json     # Project dependencies (includes Tailwind)
    ├── postcss.config.js
    ├── tailwind.config.js
    ├── vite.config.js
    └── src/
```

## Troubleshooting

### If build still fails:
1. Check Vercel build logs for specific errors
2. Ensure Node.js version is compatible (18.x or higher recommended)
3. Clear Vercel cache: Settings → General → Clear Cache
4. Verify all files are committed and pushed to the repository

### If styles are missing:
1. Check that `index.css` imports Tailwind directives
2. Verify `tailwind.config.js` content paths are correct
3. Check browser console for CSS loading errors

## Support
If you encounter any issues, check:
- Vercel deployment logs
- Browser console for runtime errors
- Network tab for failed resource loads
