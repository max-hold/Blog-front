# 🚀 Deployment Guide - Hanssen Portfolio

This guide covers deploying the Next.js portfolio application to various platforms.

---

## 🥇 Recommended: Vercel

Vercel is the company behind Next.js and provides the best integration and performance.

### Option A: Deploy via CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
# Follow prompts and accept defaults
```

### Option B: Deploy via GitHub
1. Push code to GitHub (already on `feat/restart-nextjs-tailwind-ssr-routing`)
2. Go to [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Click "New Project"
5. Import your repository
6. Vercel auto-detects Next.js settings
7. Click "Deploy"

### Vercel Features
- ✅ Automatic deployments on git push
- ✅ Preview deployments for pull requests
- ✅ Automatic HTTPS and SSL
- ✅ Global CDN
- ✅ Serverless functions
- ✅ Analytics included
- ✅ Custom domains

---

## 🏢 Alternative: Netlify

### Setup
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

### Configuration
Create `netlify.toml` in the root:
```toml
[build]
  command = "npm run build"
  functions = "netlify/functions"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## ☁️ AWS Deployment

### Option A: AWS Amplify (Easiest)
```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Configure
amplify configure

# Initialize
amplify init

# Deploy
amplify publish
```

### Option B: AWS EC2 (Full Control)
1. Launch EC2 instance (Node.js AMI)
2. SSH into instance
3. Clone repository
4. Install dependencies: `npm install`
5. Build: `npm run build`
6. Start: `npm start`
7. Use PM2 for process management:
   ```bash
   npm install -g pm2
   pm2 start "npm start" --name "portfolio"
   ```

### Option C: AWS Lambda + CloudFront
- Use AWS Lambda container support
- Deploy `.next` folder
- Configure CloudFront CDN
- (More complex, enterprise-grade)

---

## 🐳 Docker Deployment

### Dockerfile
```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

### Build and Run
```bash
# Build image
docker build -t hanssen-portfolio:latest .

# Run container
docker run -p 3000:3000 hanssen-portfolio:latest

# Push to registry
docker tag hanssen-portfolio:latest your-registry/hanssen-portfolio:latest
docker push your-registry/hanssen-portfolio:latest
```

---

## 🚀 Other Popular Platforms

### Railway
```bash
# Install Railway CLI
npm install -g railway

# Login and deploy
railway login
railway up
```

### Heroku
```bash
# Install Heroku CLI
npm install -g heroku

# Login
heroku login

# Create app
heroku create your-app-name

# Deploy
git push heroku main
```

### DigitalOcean App Platform
1. Connect GitHub repository
2. Create app from dashboard
3. Configure build command: `npm run build`
4. Configure start command: `npm start`
5. Deploy

---

## 📋 Pre-Deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] No TypeScript errors
- [ ] No console errors in browser
- [ ] Dark mode toggle works
- [ ] All routes accessible
- [ ] Images load correctly
- [ ] Responsive design on mobile
- [ ] Contact form works
- [ ] Links navigate correctly

---

## 🔧 Environment Variables

Create `.env.local` for local development (not committed):
```env
# Add any environment variables here
# Example:
# NEXT_PUBLIC_API_URL=https://api.example.com
```

For production on your platform:
1. Go to your deployment dashboard
2. Add environment variables in settings
3. Redeploy application

---

## 🎯 Performance Tips

### Before Deploying
1. **Images**: Replace placeholder images with real ones
   ```tsx
   // app/page.tsx
   // Replace: https://picsum.photos/...
   // With: your own images
   ```

2. **Metadata**: Update SEO metadata in `app/layout.tsx`
   ```tsx
   export const metadata: Metadata = {
     title: 'Your Portfolio Title',
     description: 'Your description here',
   };
   ```

3. **Fonts**: Currently using Google Fonts CDN
   - Consider self-hosting for better performance
   - Use `next/font` for optimization

4. **Analytics**: Add Vercel Analytics (Vercel only)
   ```tsx
   // app/layout.tsx
   import { Analytics } from '@vercel/analytics/react';
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <Analytics />
         </body>
       </html>
     );
   }
   ```

---

## 🔒 Security Best Practices

- ✅ Use HTTPS (automatic on all platforms)
- ✅ Add security headers in next.config.js:
  ```javascript
  const nextConfig = {
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'X-XSS-Protection',
              value: '1; mode=block',
            },
          ],
        },
      ];
    },
  };
  ```
- ✅ Keep dependencies updated: `npm update`
- ✅ Review `node_modules` size regularly
- ✅ Use environment variables for sensitive data

---

## 📊 Monitoring & Analytics

### Vercel Analytics
Available in Vercel dashboard - shows Core Web Vitals

### Google Analytics
Add to `app/layout.tsx`:
```tsx
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-ID"></script>
<script dangerouslySetInnerHTML={{__html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YOUR-ID');
`}} />
```

### Custom Monitoring
- Monitor error rates
- Check build times
- Review deployment logs
- Track response times

---

## 🆘 Troubleshooting

### Build Fails
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port Already in Use
```bash
# Find and kill process
lsof -i :3000
kill -9 <PID>

# Or use different port
PORT=3001 npm run dev
```

### TypeScript Errors
```bash
# Check types
npx tsc --noEmit

# Update TypeScript
npm install -D typescript@latest
```

### Styling Issues
- Clear browser cache
- Check if Tailwind CSS is generating correctly
- Verify PostCSS configuration

---

## 📈 Post-Deployment

### First Steps
1. Test all pages in production
2. Verify dark mode works
3. Check Core Web Vitals
4. Set up analytics
5. Configure monitoring

### Ongoing Maintenance
- Update dependencies monthly
- Monitor error logs
- Check analytics monthly
- Update content as needed
- Keep dependencies secure

---

## 🎓 Additional Resources

- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Web Performance Guide](https://web.dev/performance)
- [Security Headers](https://securityheaders.com)

---

**Ready to deploy!** Choose your platform and follow the guide above. If you have questions, refer to the platform's official documentation.
