import React, { useState } from 'react';
import { BookOpen, Sun, Moon, Search, Bell, User, Home, Book, Calendar, FileText, Video, Menu, X } from 'lucide-react';

const StudentHomePage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const courses = [
    { id: 1, title: 'Web Development', instructor: 'Dr. Smith', progress: 65, students: 120, image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop' },
    { id: 2, title: 'Data Structures', instructor: 'Prof. Johnson', progress: 40, students: 95, image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop' },
    { id: 3, title: 'Mobile App Dev', instructor: 'Dr. Williams', progress: 80, students: 78, image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop' },
  ];

  const upcomingTasks = [
    { type: 'Assignment', title: 'React Project', course: 'Web Development', due: '2 days' },
    { type: 'CAT', title: 'Midterm Test', course: 'Data Structures', due: '5 days' },
    { type: 'Quiz', title: 'Arrays & Pointers', course: 'Data Structures', due: '1 day' },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navbar */}
      <nav className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b transition-colors`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <BookOpen className={`w-8 h-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                EduLearn
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className={`flex items-center space-x-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'} font-medium`}>
                <Home className="w-5 h-5" />
                <span>Home</span>
              </a>
              <a href="#" className={`flex items-center space-x-2 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition`}>
                <Book className="w-5 h-5" />
                <span>My Courses</span>
              </a>
              <a href="#" className={`flex items-center space-x-2 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition`}>
                <Calendar className="w-5 h-5" />
                <span>Schedule</span>
              </a>
              <a href="#" className={`flex items-center space-x-2 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition`}>
                <Video className="w-5 h-5" />
                <span>Classes</span>
              </a>
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="hidden sm:block">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search courses..."
                    className={`pl-10 pr-4 py-2 rounded-lg ${
                      darkMode 
                        ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600' 
                        : 'bg-gray-100 text-gray-900 placeholder-gray-500 border-gray-300'
                    } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  <Search className={`w-5 h-5 absolute left-3 top-2.5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                </div>
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${
                  darkMode ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                } transition`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Notifications */}
              <button className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition relative`}>
                <Bell className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* Profile */}
              <button className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition`}>
                <User className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden p-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition`}
              >
                {mobileMenuOpen ? (
                  <X className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
                ) : (
                  <Menu className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className={`md:hidden py-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <a href="#" className={`flex items-center space-x-2 px-4 py-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'} font-medium`}>
                <Home className="w-5 h-5" />
                <span>Home</span>
              </a>
              <a href="#" className={`flex items-center space-x-2 px-4 py-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <Book className="w-5 h-5" />
                <span>My Courses</span>
              </a>
              <a href="#" className={`flex items-center space-x-2 px-4 py-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <Calendar className="w-5 h-5" />
                <span>Schedule</span>
              </a>
              <a href="#" className={`flex items-center space-x-2 px-4 py-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <Video className="w-5 h-5" />
                <span>Classes</span>
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className={`${darkMode ? 'bg-gradient-to-r from-blue-900 to-purple-900' : 'bg-gradient-to-r from-blue-600 to-purple-600'} rounded-2xl p-8 mb-8 text-white`}>
          <h1 className="text-3xl font-bold mb-2">Welcome back, Student! 👋</h1>
          <p className="text-blue-100">You have 3 courses in progress and 3 pending tasks</p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Courses */}
          <div className="lg:col-span-2">
            <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              My Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className={`rounded-xl overflow-hidden ${
                    darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:shadow-lg'
                  } transition cursor-pointer border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
                >
                  <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className={`font-bold text-lg mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {course.title}
                    </h3>
                    <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {course.instructor}
                    </p>
                    <div className="mb-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Progress</span>
                        <span className={`font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                          {course.progress}%
                        </span>
                      </div>
                      <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {course.students} students enrolled
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Upcoming Tasks */}
          <div>
            <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Upcoming Tasks
            </h2>
            <div className="space-y-4">
              {upcomingTasks.map((task, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border ${
                    darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        task.type === 'Assignment'
                          ? 'bg-blue-100 text-blue-700'
                          : task.type === 'CAT'
                          ? 'bg-red-100 text-red-700'
                          : 'bg-green-100 text-green-700'
                      }`}
                    >
                      {task.type}
                    </span>
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Due in {task.due}
                    </span>
                  </div>
                  <h3 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {task.title}
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {task.course}
                  </p>
                </div>
              ))}

              {/* Quick Stats */}
              <div
                className={`mt-6 p-6 rounded-xl border ${
                  darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                }`}
              >
                <h3 className={`font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Quick Stats
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Completed Assignments</span>
                    <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>12/15</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Average Score</span>
                    <span className={`font-semibold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Attendance</span>
                    <span className={`font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>92%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentHomePage;