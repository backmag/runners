from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Runners Backend API")

# Configur CORS for local development
app.add_middleware(CORSMiddleware,
                   allow_origins=["http://localhost:5173"],
                   allow_credentials=True,
                   allow_methods=["*"],
                   allow_headers=["*"],
                   )

@app.get("/")
async def root():
    return {"message": "Welcome to testing API!"}

@app.get("/api/data")
async def get_sample_data():
    """
    Sample endpoint that returns some dummy data
    """
    return {
            "chart_data": [
                {"name": "Jan", "value": 400},
                {"name": "Feb", "value": 300},
                {"name": "Mar", "value": 600},
                {"name": "Apr", "value": 800},
                {"name": "May", "value": 500},
                ]
            }



if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)


