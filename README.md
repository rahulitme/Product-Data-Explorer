# Product Data Explorer

Full-stack product exploration platform with on-demand web scraping.

## 🚀 Quick Deploy to Vercel

### Frontend Deployment (Next.js)

1. **Import Repository to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import `rahulitme/Product-Data-Explorer`

2. **Configure Project Settings:**
   - **Root Directory:** `frontend`
   - **Framework Preset:** Next.js
   - **Build Command:** (auto-detected)
   - **Output Directory:** (auto-detected)

3. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete
   - Your app will be live at `https://your-project.vercel.app`

### Backend Deployment (NestJS)

Deploy the backend separately to:
- **Render** (recommended)
- **Railway**
- **Heroku**
- **AWS/DigitalOcean**

Set root directory to `backend` and start command: `npm run start:prod`

## 📁 Project Structure

```
.
├── frontend/          # Next.js App Router frontend
│   ├── src/app/       # Pages and routes
│   └── package.json
├── backend/           # NestJS backend API
│   ├── src/           # Source code
│   └── package.json
└── README.md
```

## 🛠️ Local Development

### Frontend
```bash
cd frontend
npm install
npm run dev
# Runs on http://localhost:3000
```

### Backend
```bash
cd backend
npm install
npm run start:dev
# Runs on http://localhost:4000
```

## 📝 Technologies

- **Frontend:** Next.js 15, React, TypeScript, Tailwind CSS
- **Backend:** NestJS, TypeScript, PostgreSQL/MongoDB
- **Scraping:** Crawlee + Playwright

## 🔗 Links

- **GitHub:** https://github.com/rahulitme/Product-Data-Explorer
- **Frontend:** (Your Vercel URL)
- **Backend:** (Your backend deployment URL)
