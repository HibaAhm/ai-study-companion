from fastapi import FastAPI
from pydantic import BaseModel


class PredictRequest(BaseModel):
    text: str


class PredictResponse(BaseModel):
    topics: list[str]
    confidence: float


app = FastAPI(title="AI Study Companion ML Service")


@app.get("/health")
def health():
    return {
        "status": "OK",
        "message": "ML service is running",
    }


@app.post("/predict", response_model=PredictResponse)
def predict(payload: PredictRequest) -> PredictResponse:
    # Placeholder implementation – replace with real ML logic later
    text = payload.text.strip()
    if not text:
        return PredictResponse(topics=[], confidence=0.0)

    # Dummy topic inference
    topic = "general"
    return PredictResponse(topics=[topic], confidence=0.1)

