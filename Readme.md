# Reset Password Backend

## Overview
A backend service for handling password reset functionality with secure token generation and email verification.

## Features
- Secure password reset request handling
- Email-based verification tokens
- Token expiration and validation
- Password update with hashing
- Error handling and logging

## Tech Stack
- Node.js / Express (or your framework)
- Database: MongoDB / PostgreSQL (specify yours)
- Authentication: JWT tokens
- Email Service: Nodemailer / SendGrid (specify yours)

## Installation
```bash
npm install
```

## Configuration
Create a `.env` file with:
```
DB_CONNECTION_STRING=your_db_url
JWT_SECRET=your_secret_key
EMAIL_SERVICE=your_email_service
EMAIL_USER=your_email
EMAIL_PASSWORD=your_password
```

## Usage
```bash
npm start
```

## API Endpoints
- `POST /reset-password` - Request password reset
- `POST /verify-token` - Verify reset token
- `POST /update-password` - Update password

## License
MIT

## Deployment
Deployed the API using Render : https://reset-password-a9lq.onrender.com