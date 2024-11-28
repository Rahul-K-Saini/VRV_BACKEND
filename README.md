# Role-Based Access System (RBAC)

## Overview
This is a Node.js Express-based Role-Based Access System (RBAC) that provides secure user authentication and authorization with different user roles.

## Features
- User registration and authentication
- Role-based access control
- Secure password hashing
- JWT-based authentication
- Protected routes based on user roles

## Prerequisites
- Node.js (v18+ recommended)
- npm
- Supabase account
- PostgreSQL database

## Technology Stack
- Express.js
- PostgreSQL (via Supabase)
- JSON Web Tokens (JWT)
- bcrypt for password hashing
- Helmet for security
- Cors for cross-origin resource sharing

## Environment Setup

### 1. Clone the Repository
```bash
git clone https://your-repo-url.git
cd your-project-name
npm install
```

# ENV
PORT=5000
DB_URI=your_supabase_connection_string
JWT_SECRET=your_jwt_secret_key

``` bash
npm run dev
```
For Development

``` bash
npm run start
```
For Production

# TEST
- Register
``` bash
curl -X POST http://localhost:5000/api/auth/register \
     -H "Content-Type: application/json" \
     -d '{
         "username": "johndoe",
         "email": "john@example.com",
         "password": "securePassword123"
     }'

```
- Login
``` bash
curl -X POST http://localhost:5000/api/auth/login \
     -H "Content-Type: application/json" \
     -d '{
         "email": "john@example.com",
         "password": "securePassword123"
     }'
```
- GET USER
``` bash
 curl -X GET http://localhost:5000/api/users/123 \
     -H "Authorization: Bearer your_jwt_token_here"
```

- UPDATE USER
``` bash
curl -X PATCH http://localhost:5000/api/users/role \
     -H "Authorization: Bearer your_jwt_token_here" \
      -d '{
            "userId":"1",
            "role:"admin"
          }'
``` 
