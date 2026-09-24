'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand info */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-lg text-white tracking-wider">
                SKILLFORGE
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Empowering developers worldwide with practical courses, hands-on projects, and real-world tech challenges.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 hover:text-violet-400 transition">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 hover:text-violet-400 transition">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 hover:text-violet-400 transition">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Platform</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/courses" className="hover:text-white transition">Course Catalogue</Link></li>
              <li><Link href="/courses#categories" className="hover:text-white transition">Explore Categories</Link></li>
              <li><Link href="/dashboard" className="hover:text-white transition">Student Dashboard</Link></li>
              <li><Link href="/login" className="hover:text-white transition">Account Access</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Categories</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/courses?category=Web+Development" className="hover:text-white transition">Web Development</Link></li>
              <li><Link href="/courses?category=Programming" className="hover:text-white transition">Programming</Link></li>
              <li><Link href="/courses?category=Data+%26+AI" className="hover:text-white transition">Data & Artificial Intelligence</Link></li>
              <li><Link href="/courses?category=Cybersecurity" className="hover:text-white transition">Cybersecurity & Cloud</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Contact & Support</h4>
            <p className="text-sm text-slate-400 mb-3">Have questions or need assistance with your learning journey?</p>
            <div className="flex items-center gap-2 text-sm text-violet-400 font-medium">
              <Mail className="w-4 h-4" /> support@skillforge.io
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 SKILLFORGE Inc. TECH ODYSSEY 2026 — TECH EMERGENCY ROOM edition.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
