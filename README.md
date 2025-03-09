# Runners Project

A web application for visualizing running data with a FastAPI backend and React frontend. This project features:

- **FastAPI** Python backend
- **React** + **Vite** frontend
- **Tailwind CSS v4** for styling
- **Recharts** for data visualization

## Prerequisites

- Python 3.13+ (3.13.2 recommended)
- Node.js 18+ and npm
- Git

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd runners-project
```

### Backend Setup

1. Navigate to the backend directory:
2. Set up a Python virtual environment, preferable with python 3.13.2:

```bash
python -m venv venv
```

3. Activate the virtual environment:

```bash
# On Windows
venv\Scripts\activate

# On macOS/Linux
source venv/bin/activate
```

4. Install dependencies:

```bash
pip install -r requirements.txt
```

### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd runners-frontend
```

2. Install npm packages:

```bash
npm install
```

3. Create `.env.development` file (if not already present):

```bash
echo "VITE_API_URL=http://localhost:8000" > .env.development
```

## Running the Application

### Start the Backend Server

Run with uvicorn from the backend project.

```bash

# Start the FastAPI server, (in the backend folder)
uvicorn app.main:app --reload
```

The backend API will be running at http://localhost:8000

- Access the API documentation at http://localhost:8000/docs
- Test the API endpoint at http://localhost:8000/api/data

### Start the Frontend Development Server

1. In a new terminal, navigate to the frontend directory:

```bash
cd runners-frontend
```

2. Start the Vite development server:

```bash
npm run dev
```

The frontend will be running at http://localhost:5173

## Development Notes

- The backend is configured to allow CORS from the frontend (http://localhost:5173)
- Tailwind CSS v4 is configured via Vite plugin in the frontend
- The API service in the frontend automatically connects to the backend
- Sample data visualization is available at the root path of the frontend

## Environment Variables

### Frontend

Create `.env.development` for local development:
```
VITE_API_URL=http://localhost:8000
```

For production, create `.env.production` with your production API URL.

