# 📚 EduLearn - E-Learning Platform

A comprehensive e-learning platform built with the MERN stack, designed to facilitate seamless interaction between teachers and students through course management, assignments, quizzes, and real-time collaboration.

![EduLearn Banner](https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&h=400&fit=crop)

## 🌟 Features

### 👨‍🏫 Teacher Module

- **Course Management**
  - Create and manage multiple courses
  - Upload course materials (notes, pictures, documents)
  - Share online class links
  
- **Student Management**
  - Approve/reject student enrollment requests
  - Ban students from courses when necessary
  - View list of enrolled students
  
- **Assessment Tools**
  - Create assignments with file attachments
  - Generate quizzes with easy paste-and-format feature
  - Schedule CATs (Continuous Assessment Tests)
  - Grade submissions and provide feedback
  
- **Content Sharing**
  - Upload and share study notes
  - Share images and reference materials
  - Post class meeting links (Zoom, Google Meet, etc.)

### 👨‍🎓 Student Module

- **Course Discovery**
  - Browse available courses in the community
  - Request enrollment in courses
  - View course details and instructor information
  
- **Dashboard**
  - View all enrolled courses
  - Track upcoming assignments and deadlines
  - Monitor quiz schedules
  - Access CAT dates and times
  - Check attendance and grades
  
- **Learning Tools**
  - Submit assignments with file uploads
  - Take quizzes and CATs
  - Download course notes and materials
  - Access online class links
  - View progress and performance analytics

### 🎨 UI/UX Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Dark/Light Theme** - Toggle between themes for comfortable viewing
- **Real-time Notifications** - Get instant updates on assignments, quizzes, and announcements
- **Progress Tracking** - Visual progress bars for course completion
- **Intuitive Navigation** - Clean and easy-to-use interface similar to iCampus

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Axios** - HTTP client
- **React Router** - Navigation

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Multer** - File uploads
- **Socket.io** - Real-time features

### Cloud Services
- **AWS S3** / **Cloudinary** - File storage
- **MongoDB Atlas** - Database hosting

## 📁 Project Structure

```
edulearn/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── context/       # Context API
│   │   ├── utils/         # Helper functions
│   │   ├── services/      # API calls
│   │   └── App.js
│   └── package.json
│
├── server/                # Express backend
│   ├── config/           # Configuration files
│   ├── controllers/      # Route controllers
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   ├── utils/            # Helper functions
│   ├── uploads/          # Temporary file storage
│   └── server.js
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Geeksjayjay388/EduLearn
   cd edulearn
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables**

   Create a `.env` file in the `server` directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRE=7d
   
   # File Upload (choose one)
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_key
   CLOUDINARY_API_SECRET=your_cloudinary_secret
   
   # OR
   AWS_ACCESS_KEY_ID=your_aws_key
   AWS_SECRET_ACCESS_KEY=your_aws_secret
   AWS_BUCKET_NAME=your_bucket_name
   AWS_REGION=your_region
   ```

   Create a `.env` file in the `client` directory:
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   REACT_APP_SOCKET_URL=http://localhost:5000
   ```

5. **Run the application**

   Terminal 1 (Server):
   ```bash
   cd server
   npm run dev
   ```

   Terminal 2 (Client):
   ```bash
   cd client
   npm start
   ```

6. **Access the application**
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:5000`

## 📡 API Endpoints

### Authentication
```
POST   /api/auth/register          Register new user
POST   /api/auth/login             Login user
GET    /api/auth/profile           Get user profile
PUT    /api/auth/profile           Update profile
```

### Teacher Routes
```
POST   /api/teacher/courses                              Create course
GET    /api/teacher/courses                              Get teacher's courses
PUT    /api/teacher/courses/:id                          Update course
DELETE /api/teacher/courses/:id                          Delete course

GET    /api/teacher/courses/:courseId/pending-students   Get pending enrollments
PUT    /api/teacher/courses/:courseId/approve/:studentId Approve student
PUT    /api/teacher/courses/:courseId/ban/:studentId     Ban student

POST   /api/teacher/courses/:courseId/assignments        Create assignment
POST   /api/teacher/courses/:courseId/quizzes            Create quiz
POST   /api/teacher/courses/:courseId/notes              Upload notes
POST   /api/teacher/courses/:courseId/cats               Schedule CAT
POST   /api/teacher/courses/:courseId/class-links        Share class link

GET    /api/teacher/assignments/:assignmentId/submissions Get submissions
PUT    /api/teacher/submissions/:submissionId/grade       Grade submission
```

### Student Routes
```
GET    /api/student/courses/available                Browse courses
POST   /api/student/courses/:courseId/enroll         Request enrollment
GET    /api/student/dashboard                        Get dashboard data
GET    /api/student/courses/:courseId                Get course details

GET    /api/student/courses/:courseId/assignments    Get assignments
POST   /api/student/assignments/:assignmentId/submit Submit assignment
GET    /api/student/courses/:courseId/quizzes        Get quizzes
POST   /api/student/quizzes/:quizId/attempt          Attempt quiz
GET    /api/student/courses/:courseId/notes          Get notes
GET    /api/student/courses/:courseId/cats           Get CATs
```

## 🎯 Roadmap

- [ ] Email notifications for assignments and deadlines
- [ ] Video conferencing integration
- [ ] Discussion forums for each course
- [ ] Mobile app (React Native)
- [ ] Advanced analytics dashboard
- [ ] Automated grading for multiple-choice quizzes
- [ ] Certificate generation upon course completion
- [ ] Payment integration for premium courses
- [ ] Multi-language support
- [ ] Peer-to-peer study groups

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Jacob Sihul** - *Software Engineer* - [Geeksjayjay388](https://github.com/Geeksjayjay388)

## 🙏 Acknowledgments

- Inspired by iCampus and modern e-learning platforms
- Built with love for education and technology
- Thanks to the open-source community for amazing tools

## 📧 Contact

For questions or support, please reach out:
- Email: jacobsihul911@gmail.com


---

⭐ **Star this repo if you find it helpful!** ⭐
