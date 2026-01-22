Heirs E-Invoicing Admin Dashboard
A comprehensive admin portal for managing clients and invoices in the Heirs E-Invoicing system. Built with Next.js and Tailwind CSS.
📋 Overview
This project is a design-only implementation of an admin dashboard that provides complete client management capabilities including onboarding, viewing, editing, and monitoring client activities.
✨ Features
Authentication

Login page with form validation
Forgot password flow with email confirmation
Clean, modern UI design

Dashboard

Real-time statistics cards (Total Clients, Active Clients, Pending Invoices, Revenue)
Recent activity feed
Quick action cards for common tasks

Client Management

Client List: Comprehensive table view with filters and search
Client Details: Full client information display
Client Edit: Update client information
Client Onboarding: Add new clients to the system

Settings

Profile management
Notification preferences with toggle switches
Security settings

🛠️ Tech Stack

Framework: Next.js 15 (App Router)
Styling: Tailwind CSS
Language: JavaScript (JSX)
Icons: Heroicons (inline SVG)

📁 Project Structure
src/
├── app/
│   ├── (auth)/              # Authentication pages
│   │   ├── login/
│   │   └── forgot-password/
│   ├── (dashboard)/         # Protected dashboard pages
│   │   ├── dashboard/
│   │   ├── clients/
│   │   │   ├── [id]/        # Dynamic client details
│   │   │   ├── edit/[id]/   # Dynamic client edit
│   │   │   └── onboard/
│   │   └── settings/
│   └── layout.jsx
├── components/              # Reusable components
│   ├── Sidebar.jsx
│   ├── Header.jsx
│   └── StatsCard.jsx
└── data/
    └── mockData.js         # Mock client data
🚀 Getting Started
Prerequisites

Node.js 18+ installed
npm or yarn package manager

Installation

Clone the repository:

bashgit clone https://github.com/Codegoddexx/einvoicing-admin-dashboard.git
cd einvoicing-admin-dashboard

Install dependencies:

bashnpm install

Run the development server:

bashnpm run dev

Open http://localhost:3000 in your browser

🔐 Authentication Note
This is a design-only implementation. Login accepts any email/password combination and redirects to the dashboard. No backend authentication is implemented.
📊 Mock Data
All client data, statistics, and activities are sourced from src/data/mockData.js. This allows for quick testing and demonstration without a backend API.
🎨 Design System

Primary Color: Indigo (#4F46E5)
Typography: System fonts with Geist Sans fallback
Spacing: Consistent Tailwind spacing scale
Components: Clean, modern design following current web standards

📝 Pages
RouteDescription/Redirects to login/loginUser authentication/forgot-passwordPassword recovery/dashboardMain dashboard with stats/clientsClient list with filters/clients/[id]Individual client details/clients/edit/[id]Edit client information/clients/onboardOnboard new client/settingsUser settings and preferences
🚧 Future Enhancements

Real authentication with JWT
Backend API integration
Real-time data updates
Invoice generation functionality
Payment tracking
Advanced reporting and analytics

👤 Author
Precious Adachi
Email: Precious.Iwuala@heirstechnologies.com
📄 License
This project is part of a technical assessment for Heirs Technologies.

Built with ❤️ using Next.js and Tailwind CSS