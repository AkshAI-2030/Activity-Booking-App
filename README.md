# 🏕️ Activity Booking App - Node.js

A **Node.js** project that enables users to book activities by integrating with a **MongoDB** database. It allows users to register, log in, create activities, and book them.

[![Postman Collection](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)](https://documenter.getpostman.com/view/29351727/2sB2j97URD#5730c1aa-f6e4-4423-b230-8a102bff6883)

## 📂 Project Structure

```
📦 activity-booking-app
├── 📁 controllers
│   ├── authController.js      # API logic for user registration & login
│   ├── activityController.js  # API logic for creating, fetching activities
│   └── bookingController.js   # API logic for booking activities
├── 📁 models
│   ├── User.js                # User schema and model
│   ├── Activity.js            # Activity schema and model
│   └── Booking.js             # Booking schema and model
├── 📁 routes
│   ├── authRoutes.js          # Routes for user authentication (register/login)
│   ├── activityRoutes.js      # Routes for activities (create/get)
│   └── bookingRoutes.js       # Routes for booking activities (create/get)
├── 📁 middleware
│   ├── authMiddleware.js      # Middleware for user authentication
│   └── validationMiddleware.js # Middleware for input validation
├── 📁 validators
│   └── validations.js         # Request validation logic using express-validator
├── server.js                  # Express server entry point
├── .env                       # Environment variables (e.g., MongoDB URI, JWT_SECRET)
├── package.json               # Dependencies & scripts
└── README.md                  # Project documentation
```

## 🛠️ Setup & Installation

### **1️⃣ Clone the Repository**

```bash
git clone https://github.com/AkshAI-2030/Activity-Booking-App.git
cd activity-booking-app
```

### **2️⃣ Install Dependencies**

```bash
npm install
```

### **3️⃣ Create a .env File**

Create a `.env` file in the root directory and add the following environment variables:

```
PORT=3000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
```

### **4️⃣ Run the Server**

Start the server using the following command:

```bash
node server.js
```

or

```bash
npm start
```

The API will run on `http://localhost:3000/`.

## 🔄 API Endpoints

### **1. User Authentication**

#### Register a User
**Endpoint**: `POST /api/auth/register`

**Request Body**:
```json
{
    "name": "Akshay Arelli",
    "email": "akshayarelli@example.com",
    "phone": "1234567890",
    "password": "password123"
}
```

**Response**:
```json
{
    "message": "User registered successfully"
}
```

#### Login a User
**Endpoint**: `POST /api/auth/login`

**Request Body**:
```json
{
    "email": "akshayarelli@example.com",
    "password": "password123"
}
```

**Response**:
```json
{
  "message": "User logged in successfully",
  "token": "token_from_jwt"
}
```

### **2. Activity Routes**

#### Get All Activities
**Endpoint**: `GET /api/activities`

**Response**:
```json
[
    {
        "title": "Hiking Adventure",
        "description": "A day-long hike to the mountains.",
        "location": "Western Ghats",
        "datetime": "2025-06-20T10:00:00Z"
    },
    {
        "title": "Beach Day",
        "description": "A relaxing day at the beach.",
        "location": "Goa",
        "datetime": "2025-07-15T09:00:00Z"
    }
]
```

#### Create an Activity (Admin Only)
**Endpoint**: `POST /api/activities`

**Request Body**:
```json
{
    "title": "Mountain Trekking",
    "description": "A challenging trek through the mountains.",
    "location": "Himalayas",
    "datetime": "2025-08-01T07:00:00Z"
}
```

**Response**:
```json
{
  "message": "Activity created successfully",
  "activity": {
    "title": "AI Class",
    "description": "A calming and rejuvenating AI class for all levels.",
    "location": "Park Avenue, New York",
    "datetime": "2025-05-15T10:00:00.000Z",
    "_id": "681db62cacc1ece59f2535db",
    "createdAt": "2025-05-09T08:00:44.484Z",
    "updatedAt": "2025-05-09T08:00:44.484Z",
    "__v": 0
  }
}
```

### **3. Booking Routes**

#### Book an Activity
**Endpoint**: `POST /api/bookings/:activityId`

**Response**:
```json
{
  "message": "Activity booked",
  "booking": {
    "user": "681db48b9fe5a62727a1005f",
    "activity": "681db675acc1ece59f2535df",
    "_id": "681dbb51b3510a65b6a17757",
    "bookedAt": "2025-05-09T08:22:41.476Z",
    "createdAt": "2025-05-09T08:22:41.479Z",
    "updatedAt": "2025-05-09T08:22:41.479Z",
    "__v": 0
  }
}
```

#### Get My Bookings
**Endpoint**: `GET /api/bookings/my`

**Response**:
```json
[
  {
    "_id": "681dbb51b3510a65b6a17757",
    "activity": {
      "_id": "681db675acc1ece59f2535df",
      "title": "Chaava",
      "description": "Movie",
      "location": "PVR",
      "datetime": "2025-05-15T10:00:00.000Z",
      "createdAt": "2025-05-09T08:01:57.965Z",
      "updatedAt": "2025-05-09T08:01:57.965Z",
      "__v": 0
    },
    "bookedAt": "2025-05-09T08:22:41.476Z",
    "createdAt": "2025-05-09T08:22:41.479Z",
    "updatedAt": "2025-05-09T08:22:41.479Z",
    "__v": 0
  },
  {
    "_id": "681dbc0073d6623e620a744d",
    "activity": {
      "_id": "681db665acc1ece59f2535dd",
      "title": "Cricket",
      "description": "IPL indian premiure league",
      "location": "Wankhede",
      "datetime": "2025-05-15T10:00:00.000Z",
      "createdAt": "2025-05-09T08:01:41.013Z",
      "updatedAt": "2025-05-09T08:01:41.013Z",
      "__v": 0
    },
    "bookedAt": "2025-05-09T08:25:36.205Z",
    "createdAt": "2025-05-09T08:25:36.209Z",
    "updatedAt": "2025-05-09T08:25:36.209Z",
    "__v": 0
  },
  {
    "_id": "681dbc9871e4cc1d3d40baea",
    "activity": {
      "_id": "681db665acc1ece59f2535dd",
      "title": "Cricket",
      "description": "IPL indian premiure league",
      "location": "Wankhede",
      "datetime": "2025-05-15T10:00:00.000Z",
      "createdAt": "2025-05-09T08:01:41.013Z",
      "updatedAt": "2025-05-09T08:01:41.013Z",
      "__v": 0
    },
    "bookedAt": "2025-05-09T08:28:08.078Z",
    "createdAt": "2025-05-09T08:28:08.081Z",
    "updatedAt": "2025-05-09T08:28:08.081Z",
    "__v": 0
  },
  {
    "_id": "681dbcab71e4cc1d3d40baed",
    "activity": {
      "_id": "681db665acc1ece59f2535dd",
      "title": "Cricket",
      "description": "IPL indian premiure league",
      "location": "Wankhede",
      "datetime": "2025-05-15T10:00:00.000Z",
      "createdAt": "2025-05-09T08:01:41.013Z",
      "updatedAt": "2025-05-09T08:01:41.013Z",
      "__v": 0
    },
    "bookedAt": "2025-05-09T08:28:27.683Z",
    "createdAt": "2025-05-09T08:28:27.684Z",
    "updatedAt": "2025-05-09T08:28:27.684Z",
    "__v": 0
  },
  {
    "_id": "681dbd47a40122dd09920a45",
    "activity": {
      "_id": "681db5cb9fe5a62727a10069",
      "title": "Yoga Class",
      "description": "A calming and rejuvenating yoga class for all levels.",
      "location": "Park Avenue, New York",
      "datetime": "2025-05-15T10:00:00.000Z",
      "createdAt": "2025-05-09T07:59:07.966Z",
      "updatedAt": "2025-05-09T07:59:07.966Z",
      "__v": 0
    },
    "bookedAt": "2025-05-09T08:31:03.570Z",
    "createdAt": "2025-05-09T08:31:03.573Z",
    "updatedAt": "2025-05-09T08:31:03.573Z",
    "__v": 0
  }
]
```

## 📱 API Documentation

For detailed API documentation with request and response examples, check out our Postman Collection:

[![View in Postman](https://img.shields.io/badge/View%20in%20Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)](https://documenter.getpostman.com/view/29351727/2sB2j97URD#5730c1aa-f6e4-4423-b230-8a102bff6883)

```

### ✅ Test Coverage

- ✔ User Registration & Login
- ✔ Activity Creation & Listing
- ✔ Booking Activities
- ✔ Validation Handling
