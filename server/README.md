# SpaceScope Backend (Node.js + Express + MongoDB)

Production-grade authentication and community profile synchronization API for SpaceScope.

## Features

- JWT-based auth (`register`, `login`, `refresh-token`, `logout`, `logout-all`)
- Refresh token persistence and rotation
- Password hashing with `bcryptjs`
- Input validation using `express-validator`
- Security middleware (`helmet`, CORS with credentials, cookie parser)
- Auth and global rate limiting
- Centralized error handling
- Community profile synchronization across:
  - Other users' stored connection snapshots
  - Existing community posts authored by that user
- Unit/integration tests with `Jest`, `Supertest`, `mongodb-memory-server`

## Folder Structure

```text
server/
  src/
    config/
    controllers/
    middleware/
    models/
    routes/
    services/
    utils/
    validators/
    app.js
    server.js
  tests/
  postman/
```

## Prerequisites

- Node.js 20+
- npm 10+
- Local MongoDB instance (for development runtime)

## Setup

1. Install dependencies:

   ```bash
   cd server
   npm install
   ```

2. Create local environment file:

   ```bash
   copy .env.example .env
   ```

3. Start your local MongoDB service and ensure `MONGO_URI` in `.env` is reachable.

4. Start development server:

   ```bash
   npm run dev
   ```

5. Health check:

   - `GET http://localhost:5000/api/health`

## Running Tests

```bash
npm test
```

Notes:
- Tests use `mongodb-memory-server`, so they do not require your local MongoDB.
- Test config is loaded from `.env.test`.

## Auth API Summary

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/refresh-token`
- `POST /api/auth/logout`
- `POST /api/auth/logout-all`
- `GET /api/users/me` (Bearer access token)

## Community Sync API Summary

- `GET /api/community/posts` (public global feed for all users)
- `PATCH /api/users/community-profile` (Bearer access token)
- `POST /api/users/connections` (Bearer access token)
- `POST /api/users/community-posts` (Bearer access token)

When a user updates community profile data, the backend automatically syncs:
- Their snapshot inside other users' `community.connections`
- Their author identity inside existing `community-posts`

## Manual QA (Postman)

- Import collection:
  - `server/postman/Spacescope-Auth.postman_collection.json`
- Recommended flow:
  1. Register User A
  2. Register User B
  3. Login as B, add connection to A (`targetUserId`)
  4. Login as A, create community post
  5. Call `GET /api/community/posts` and verify A's post is visible globally
  6. Update A's community profile
  7. Fetch affected data or inspect MongoDB to confirm propagation
