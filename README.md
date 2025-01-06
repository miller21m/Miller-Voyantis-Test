# Miller-Voyantis-Test
# Queue Management Application

This project consists of two parts:

1. **Backend**: A Node.js server running on `http://localhost:5000`.
2. **Frontend**: A React.js application running on `http://localhost:3000`.

## How to Run the Application

### Backend
1. Navigate to the `backend` folder in your terminal:
   ```bash
   cd backend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000`.

### Frontend
1. Navigate to the `frontend` folder in your terminal:
   ```bash
   cd frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the frontend application:
   ```bash
   npm start
   ```
   The frontend will run on `http://localhost:3000`.

## Features
- **Render Queues**: Displays all available queues and the number of messages in each queue.
- **Message Management**:
  - Add a message to a specific queue.
  - Retrieve the next message from a queue.

## Notes
- **Hardcoded Data**: For demonstration purposes, the backend includes hardcoded data for responses to the client.
- **Proxy Configuration**: The frontend is configured to proxy API requests to the backend at `http://localhost:5000`. Ensure both the backend and frontend are running simultaneously.

## Endpoints
### Backend Endpoints
1. **POST** `/api/:queue_name`
   - Adds a new message to the specified queue.
2. **GET** `/api/:queue_name`
   - Retrieves the next message from the specified queue. Returns `204` if the queue is empty.
3. **GET** `/api/queues`
   - Returns a summary of all queues and the number of messages in each.

---
Feel free to customize or extend the application as needed!

