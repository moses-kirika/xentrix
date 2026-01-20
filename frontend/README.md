# Xentrix - Business Automation Platform

A modern, premium company portal built with Next.js, featuring a comprehensive admin dashboard for managing jobs, applicants, users, and team members.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8)
![License](https://img.shields.io/badge/license-MIT-green)

## 🌟 Features

### Marketing Site
- **Modern Landing Page** - Premium Xentrix-branded homepage with animations
- **About Page** - Company mission, values, and team information
- **Features Page** - Detailed product feature showcase
- **Pricing Page** - 3-tier pricing (Starter, Pro, Enterprise)
- **Careers Page** - Public job board with application forms
- **Contact Page** - Company information and contact form
- **Responsive Design** - Mobile-first approach with hamburger menu

### Admin Dashboard
A comprehensive management portal with 8 distinct pages:

1. **Dashboard** (`/admin`) - Overview with job statistics and recent postings
2. **Careers** (`/admin/careers`) - Job management with filtering and search
3. **Applicants** (`/admin/applicants`) - Application tracking with document downloads
4. **Users** (`/admin/users`) - User account management with role control
5. **Team** (`/admin/team`) - Team member directory
6. **Analytics** (`/admin/analytics`) - Performance metrics and insights
7. **Notifications** (`/admin/notifications`) - Activity feed with filtering
8. **Settings** (`/admin/settings`) - Admin configuration panel

### Key Capabilities
- ✅ Document download functionality (CV, cover letter, portfolio)
- ✅ Status management (Active, Suspended, Inactive, etc.)
- ✅ Role-based access control (User/Admin)
- ✅ Search and filtering across all entities
- ✅ Split-view interfaces for detailed management
- ✅ Color-coded status indicators
- ✅ Activity tracking and analytics

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/xentrix-portal.git
   cd xentrix-portal/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your actual credentials
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔐 Security

✅ **Security Improvements Implemented:**
- Credentials moved to environment variables (`.env.local`)
- Hardcoded credentials removed from source code
- Comprehensive `.gitignore` to prevent sensitive data leaks
- Security documentation and implementation guide

⚠️ **IMPORTANT**: Before deploying to production, please review:
- [SECURITY.md](./SECURITY.md) - Complete security checklist
- [SECURITY_IMPLEMENTATION.md](./SECURITY_IMPLEMENTATION.md) - Implementation guide

### Demo Credentials
- **Admin Login**: Configured in `.env.local`
- **Default**: `admin@company.com` / `admin123`
- ⚠️ **These are demo credentials and MUST be changed in production**

### Security Checklist
- [x] Replace hardcoded credentials with environment variables ✅
- [x] Create `.env.local` for local development ✅
- [ ] **PRODUCTION**: Change default credentials
- [ ] **PRODUCTION**: Implement password hashing (bcrypt)
- [ ] **PRODUCTION**: Set up NextAuth.js or similar authentication
- [ ] **PRODUCTION**: Enable HTTPS/SSL
- [ ] **PRODUCTION**: Configure CORS properly
- [ ] **PRODUCTION**: Add rate limiting

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── (marketing)/        # Marketing site pages
│   │   │   ├── about/
│   │   │   ├── careers/
│   │   │   ├── company/
│   │   │   ├── feature/
│   │   │   ├── login/
│   │   │   ├── pricing/
│   │   │   ├── services/
│   │   │   ├── signup/
│   │   │   └── page.tsx        # Homepage
│   │   ├── admin/              # Admin dashboard
│   │   │   ├── analytics/
│   │   │   ├── applicants/
│   │   │   ├── careers/
│   │   │   ├── login/
│   │   │   ├── notifications/
│   │   │   ├── settings/
│   │   │   ├── team/
│   │   │   ├── users/
│   │   │   └── page.tsx        # Dashboard home
│   │   ├── globals.css
│   │   └── layout.tsx          # Root layout
│   └── components/
│       ├── ui/                 # Reusable UI components
│       │   ├── Button.tsx
│       │   └── Card.tsx
│       ├── AdminLayout.tsx     # Admin dashboard layout
│       ├── AnnouncementBar.tsx
│       ├── Footer.tsx
│       └── Header.tsx
├── public/                     # Static assets
├── .env.example               # Environment variables template
├── SECURITY.md                # Security documentation
└── package.json
```

## 🎨 Design System

### Colors
- **Primary**: Forest Green `#1F7A5A`
- **Neutrals**: `#111111`, `#444444`, `#F5F6F7`
- **Accents**: Blue, Purple, Orange for status indicators

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 400 (Regular), 500 (Medium), 700 (Bold)

### Components
- Consistent button styles (Primary, Outline, Ghost)
- Card components with hover effects
- Animated transitions with Framer Motion
- Responsive layouts with Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter)

## 📦 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🌍 Localization

The application is localized for **Kenya**:
- Headquarters: Nairobi, Kenya
- Additional offices: Mombasa, Eldoret
- Phone format: +254 (Kenya country code)
- Currency: KES (where applicable)

## 📝 Mock Data

All user data, applicants, jobs, and team members are currently **mock data** for demonstration purposes. In production, integrate with a proper database (PostgreSQL, MongoDB, etc.).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Design inspired by modern SaaS platforms
- Built with Next.js and Tailwind CSS
- Icons by Lucide React
- Animations by Framer Motion

## 📞 Support

For support, email support@xentrix.com or open an issue in this repository.

---

**Built with ❤️ in Nairobi, Kenya**
