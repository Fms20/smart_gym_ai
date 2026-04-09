# Smart Gym AI System

## Overview
An intelligent gym management system powered by AI. The system connects users, trainers, wearable sensors, and an AI engine to track performance, predict injury risks, and generate personalized training plans.

## Features
- **Roles:** Athlete, Coach, Admin
- **Authentication:** Login system with user role assignment
- **Real-time AI Features:** Fatigue tracking, injury risk prediction, and dynamic workout plans.
- **Biometric Monitoring:** Dynamic charts replicating live sensor streaming.
- **Frontend UI:** Responsive dark-mode dashboard switching between sections dynamically and rendering different layouts/views based on the logged-in user's role.
- **Backend Server:** Node.js Express server handling SQL/mock connections.

## Tech Stack
- Frontend: HTML5, CSS3, JavaScript (Vanilla with Vanilla CSS scaling)
- Backend: Node.js (Express.js, CORS)
- Database: MySQL (MySQL2 library)

## Prerequisites
- Node.js installed (v14 or above)
- MySQL Server (optional, the server has a fallback demo mode if MySQL gives connection errors)

## How to Run

1. **Install Dependencies**
Open a terminal in this directory (`c:\grad project`) and install the required Node.js packages:
```bash
npm install express mysql2 cors
```

2. **Initialize Database (Optional but recommended)**
- Open your MySQL console or a tool like XAMPP / phpMyAdmin.
- Run the SQL queries found in the `db_schema.sql` file. This sets up the database `smart_gym` and creates the `Users`, `SensorData`, `AI_Predictions`, `TrainingPlans`, and `PerformanceMetrics` tables.
- A few default mock users will be generated in `Users`.
- Note: Make sure the connection info in `server.js` (like root password or port) matches your MySQL instance.

3. **Start the Backend Server**
```bash
node server.js
```
The server should log that it is running successfully on `http://localhost:3000`. If MySQL is turned down, the app works entirely over dummy simulation memory.

4. **Access the Application**
- Open your browser and navigate to `http://localhost:3000`.
- The login panel will appear. Use one of the Demo Accounts detailed on the screen depending on the role you wish to test:
  - Admin: `admin@smartgym.ai` / `admin`
  - Coach: `coach@smartgym.ai` / `coach`
  - Athlete: `omar@smartgym.ai` / `athlete`
- The system will detect the role and adjust the UI capabilities (for example, Athletes don't see Coaches management sections).

## Extending for Future
This codebase is organized to be highly modular.
- API logic can be broken down from `server.js` to `/routes` and `/controllers`.
- Chart structures in `script.js` directly interface seamlessly with simulated or fetched endpoints. Replacing simulated random `fetch` responses with AI Model predictions (such as TensorFlow or a Python Microservice) is trivial.
- For Python integration, set up a Flask/FastAPI microservice handling `/api/ai/predictions` and link it to the Node backend via standard HTTP proxying.
