
# NetworkX - Professional Social Media Platform

A full-stack social media application built with Next.js and Node.js that enables users to connect professionally, share content, and build meaningful networks.

## 🚀 Features

- **User Authentication** - Secure registration and login system with token-based authentication
- **Profile Management** - Customizable user profiles with bio, work history, and profile pictures
- **Post Creation** - Share text and media content with your network
- **Engagement** - Like and comment on posts
- **Connections** - Send and accept connection requests
- **Discovery** - Explore and connect with other professionals
- **Resume Generation** - Download user profiles as PDF resumes
- **Real-time Updates** - Dynamic feed with latest posts and activities

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 15.5.4
- **State Management:** Redux Toolkit
- **HTTP Client:** Axios
- **Styling:** CSS Modules

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js 5.1.0
- **Database:** MongoDB with Mongoose
- **Authentication:** bcrypt for password hashing
- **File Upload:** Multer
- **PDF Generation:** PDFKit

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- npm or yarn package manager

## 🔧 Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/networkx.git
cd networkx
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
PORT=9090
MONGODB_URI=your_mongodb_connection_string
```

Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend
npm install
```

Update the `BASE_URL` in `frontend/config/index.jsx`:
```javascript
export const BASE_URL = "http://localhost:9090"; // for local development
```

Start the frontend development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure
```
networkx/
├── backend/
│   ├── controllers/
│   │   ├── post.controller.js
│   │   └── user.controller.js
│   ├── models/
│   │   ├── user.model.js
│   │   ├── posts.model.js
│   │   ├── comments.model.js
│   │   ├── connections.model.js
│   │   └── profile.model.js
│   ├── routes/
│   │   ├── posts.routes.js
│   │   └── user.routes.js
│   ├── uploads/
│   └── server.js
│
└── frontend/
    ├── components/
    │   └── Navbar/
    ├── config/
    │   └── redux/
    │       ├── actions/
    │       ├── reducers/
    │       └── store.js
    ├── layout/
    │   ├── DashboardLayout/
    │   └── UserLayout/
    ├── pages/
    │   ├── dashboard/
    │   ├── discover/
    │   ├── login/
    │   ├── profile/
    │   ├── my_connections/
    │   └── view_profile/
    └── public/
```

## 🔑 Key API Endpoints

### Authentication
- `POST /register` - Register new user
- `POST /login` - User login

### Posts
- `GET /posts` - Get all posts
- `POST /post` - Create new post
- `DELETE /delete_post` - Delete a post
- `POST /comment` - Add comment to post
- `GET /get_comments` - Get post comments
- `POST /increment_post_like` - Like a post

### User & Profile
- `GET /get_user_and_profile` - Get user profile
- `POST /update_profile_picture` - Update profile picture
- `POST /update_profile_data` - Update profile information
- `GET /user/get_all_users` - Get all user profiles
- `GET /user/download_resume` - Download profile as PDF

### Connections
- `POST /user/send_connection_request` - Send connection request
- `GET /user/getConnectionRequests` - Get sent connection requests
- `GET /user/user_connection_request` - Get received connection requests
- `POST /user/accept_connection_request` - Accept/reject connection

## 🎨 Features in Detail

### Dashboard
- View personalized feed with posts from your network
- Create and share posts with text and media
- Like and comment on posts
- Delete your own posts
- Share posts to Twitter

### Discover
- Browse all user profiles
- View detailed profile information
- Send connection requests

### Profile Management
- Edit bio and work history
- Upload profile picture
- View recent activity
- Add multiple work experiences

### Connections
- Accept or reject connection requests
- View your professional network
- Track connection status

## 🔒 Security Features

- Password hashing with bcrypt
- Token-based authentication
- User authorization for sensitive operations
- Input validation and sanitization

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:
- Desktop computers
- Tablets
- Mobile devices

## 🚀 Deployment

### Backend (Render)
The backend is configured for Render deployment:
```bash
npm run prod
```

### Frontend (Vercel/Netlify)
```bash
npm run build
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Hemant Chauhan**

## 🙏 Acknowledgments

- MongoDB for database solutions
- Next.js team for the amazing framework
- Redux team for state management
- All contributors and users of this platform

## 📧 Support

For support, email hemantschauhan042@example.com or open an issue in the repository.

---

**Note:** Remember to update the MongoDB connection string and other sensitive information in production environments. Never commit `.env` files to version control.
