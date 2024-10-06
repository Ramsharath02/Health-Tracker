# React Registration and Login Page

## Overview

This project is a simple React.js application that implements a registration and login page. Users can register with their details and log in to access a protected area of the application.

## Features

- User registration with email and password.
- User login with email and password.
- Form validation for user inputs.
- Error handling for incorrect credentials.
- JWT-based authentication for secure sessions.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)

## Installation

To set up the project locally, follow these steps:

### Prerequisites

Make sure you have the following installed:

- Node.js (version 14 or later)
- npm (Node package manager)
- MongoDB (or access to a MongoDB Atlas cluster)

### Clone the Repository

```bash
git clone <repository-url>
cd <repository-directory>
Install Dependencies
Navigate to both the frontend and backend directories and install dependencies:

Frontend
cd client
npm install
Backend
cd server
npm install

Environment Variables
Create a .env file in the backend directory and add the following environment variables:
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<database-name>?retryWrites=true&w=majority
JWT_SECRET=my_super_secret_key
PORT=5000
