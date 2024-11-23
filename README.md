

# Homyz Real Estate Project

Welcome to the **Homyz Real Estate Project**! This is a full-stack MERN (MongoDB, Express, React, Node) application where users can browse and interact with real estate listings.

## Project Overview

The Homyz Real Estate website is a responsive platform for searching, viewing, and interacting with property listings. It allows users to browse properties, view detailed information about each listing, and get in touch with agents or property owners. This project demonstrates the power of the **MERN stack** combined with **Auth0** for authentication and **Cloudinary** for image management.

## Features

- **User Authentication**: Secure login and signup using **Auth0**.
- **Property Listings**: Users can view a list of properties with details like price, location, and description.
- **Property Images**: Upload and display property images using **Cloudinary**.
- **Responsive Design**: The website is fully responsive and looks great on both desktop and mobile devices.
- **React Hooks**: Utilized **React hooks** for state management and side effects.
- **Animations**: Added smooth transitions and animations using **Framer Motion**.
- **Backend**: Built with **Express** to handle API requests and interact with **MongoDB**.

## Tech Stack

- **Frontend**: 
  - React
  - React Router
  - Mantine UI
  - Framer Motion
- **Backend**:
  - Node.js
  - Express
  - MongoDB
- **Authentication**: Auth0
- **Cloud Storage**: Cloudinary
- **Styling**: Modern CSS

## Installation & Setup

To run the project locally, follow the steps below:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/homyz-real-estate-project.git
```

### 2. Install Dependencies

#### Frontend

Navigate to the frontend directory and install the dependencies:

```bash
cd frontend
npm install
```

#### Backend

Navigate to the backend directory and install the dependencies:

```bash
cd backend
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in backend directories with the following details:

#### Backend `.env`:

```env
MONGO_URI=mongodb://localhost:27017/homyz
PORT=8000
JWT_SECRET=your-jwt-secret
```

### 4. Run the Application

Start the backend server:

```bash
cd backend
node index.js
```

Start the frontend development server:

```bash
cd frontend
npm run dev
```

## Challenges Faced

-   **Port Conflicts**: At times, the system was running on multiple ports, causing conflicts. This took some time to troubleshoot.
-   **Typo Issues**: A minor typo (`bookingVisit` to `BookingVisit`) caused a full day of debugging, but eventually was resolved.
-   **Learning React Hooks**: Some React concepts, especially hooks, were difficult to grasp initially, but with practice, it got easier.

## Project Link

You can access the live project here: [Homyz Real Estate Project](https://homyz-real-estate-project.vercel.app/)

## Conclusion

This project helped me refine my skills with the MERN stack, authentication (Auth0), and cloud storage (Cloudinary). It was a challenging yet rewarding experience, and I look forward to improving it further!

## License

MIT License © Vighnesh Gaddam
