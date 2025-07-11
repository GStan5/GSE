"use client";

import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface AdminLayoutProps {
  children: ReactNode;
  onLogout: () => void;
}

export default function AdminLayout({ children, onLogout }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-nautical-blue to-digital-teal bg-clip-text text-transparent">
              Analytics Dashboard
            </h1>
            <p className="text-slate-600 mt-2 text-lg">
              Real-time insights and performance metrics
            </p>
          </div>

          <button
            onClick={onLogout}
            className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 font-medium"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span>Logout</span>
          </button>
        </div>

        {children}
      </div>

      <Footer />
    </div>
  );
}
