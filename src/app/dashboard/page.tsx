'use client';

import React from 'react';
import Link from 'next/link';
import { COURSES } from '@/data/courses';
import { useLearning } from '@/context/LearningContext';
import { BookOpen, CheckCircle, Clock, Flame, PlayCircle, ArrowRight, Award } from 'lucide-react';

export default function StudentDashboardPage() {
  const { user, enrolledCourseIds, getCourseProgress, completedLessonIds } = useLearning();

  const enrolledCourses = COURSES.filter((c) => enrolledCourseIds.includes(c.id));

  // Count courses fully completed
  const completedCoursesCount = enrolledCourses.filter((course) => {
    const total = course.modules.flatMap((m) => m.lessons).length;
    const completed = (completedLessonIds[course.id] || []).length;
    return completed >= total && total > 0;
  }).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Welcome Greeting Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950/70 to-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 space-y-3">
          <div className="inline-block px-3 py-1 rounded bg-violet-900/80 text-violet-300 text-xs font-bold uppercase tracking-wider">
            Student Learning Hub
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white">
            Welcome back, {user?.name || 'Student'}!
          </h1>
          <p className="text-slate-300 text-sm max-w-xl">
            Track your ongoing tech courses, view learning stats, and jump straight back into your active lessons.
          </p>
        </div>
      </div>

      {/* Dashboard Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Courses Enrolled */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center gap-4 shadow-lg">
          <div className="w-12 h-12 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30 flex items-center justify-center shrink-0">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-white">{enrolledCourses.length}</div>
            <div className="text-xs text-slate-400 font-medium">Courses Enrolled</div>
          </div>
        </div>

        {/* Courses Completed */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center gap-4 shadow-lg">
          <div className="w-12 h-12 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
            <CheckCircle className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-white">{completedCoursesCount}</div>
            <div className="text-xs text-slate-400 font-medium">Courses Completed</div>
          </div>
        </div>

        {/* Learning Hours */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center gap-4 shadow-lg">
          <div className="w-12 h-12 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center shrink-0">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-white">24.5 hrs</div>
            <div className="text-xs text-slate-400 font-medium">Learning Hours</div>
          </div>
        </div>

        {/* Current Streak */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center gap-4 shadow-lg">
          <div className="w-12 h-12 rounded-xl bg-amber-600/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
            <Flame className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-white">7 Days</div>
            <div className="text-xs text-slate-400 font-medium">Current Streak</div>
          </div>
        </div>
      </div>

      {/* My Learning Enrolled Courses */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">My Learning</h2>
          <Link
            href="/courses"
            className="text-xs font-semibold text-violet-400 hover:text-violet-300 transition"
          >
            Explore More Courses →
          </Link>
        </div>

        {enrolledCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {enrolledCourses.map((course) => {
              // Renders progress from getCourseProgress (BUG 4 active)
              const progressPct = getCourseProgress(course.id);
              const firstLesson = course.modules[0]?.lessons[0];

              return (
                <div
                  key={course.id}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col sm:flex-row gap-5 hover:border-violet-500/40 transition shadow-xl"
                >
                  <div className="w-full sm:w-44 h-32 rounded-xl overflow-hidden bg-slate-950 shrink-0 relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-slate-950/80 text-[10px] font-bold text-violet-400 uppercase">
                      {course.category}
                    </span>
                  </div>

                  <div className="flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-white line-clamp-1">
                        {course.title}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-1">
                        Instructor: {course.instructor.name}
                      </p>
                    </div>

                    {/* Progress Bar & Percentage */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">Course Progress</span>
                        <span className="font-bold text-violet-400">{progressPct}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                        <div
                          className="h-full bg-gradient-to-r from-violet-600 to-indigo-500 transition-all duration-300"
                          style={{ width: `${Math.min(progressPct, 100)}%` }}
                        />
                      </div>
                    </div>

                    {/* Action */}
                    {firstLesson && (
                      <Link
                        href={`/courses/${course.id}/learn?lesson=${firstLesson.id}`}
                        className="inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-xl bg-violet-600/20 hover:bg-violet-600 text-violet-300 hover:text-white border border-violet-500/30 text-xs font-semibold transition"
                      >
                        <PlayCircle className="w-4 h-4" /> Continue Learning
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 text-center space-y-4">
            <BookOpen className="w-10 h-10 text-slate-500 mx-auto" />
            <h3 className="text-lg font-bold text-white">No enrolled courses yet</h3>
            <p className="text-sm text-slate-400">
              Browse our course catalogue and start building modern tech skills today.
            </p>
            <Link
              href="/courses"
              className="inline-block px-5 py-2.5 rounded-xl bg-violet-600 text-white font-semibold text-sm hover:bg-violet-500 transition"
            >
              Explore Catalogue
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
