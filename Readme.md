
# Reset Password Backend

## Overview
This is a backend service for handling password reset functionality.

## Features
- User authentication
- Password reset request generation
- Email verification
- Secure password update

## Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Database (MongoDB/PostgreSQL)
- Email service (SMTP/SendGrid)

## Installation
```bash
npm install
```

## Configuration
Create a `.env` file in the root directory:
```
PORT=5000
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
EMAIL_SERVICE=your_email_service
```

## Running the Project
```bash
npm start
```

## API Endpoints
- `POST /api/reset-password/request` - Request password reset
- `POST /api/reset-password/verify` - Verify reset token
- `POST /api/reset-password/update` - Update password

## Technologies Used
- Node.js
- Express.js
- Database: [Your choice]
- Authentication: JWT

## License
MIT
