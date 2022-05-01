from fastapi import FastAPI
import uvicorn
from app.api import router
from app.utills import user_initialization
from mangum import Mangum

app = FastAPI()
app.include_router(router)
handler = Mangum(app)


@app.on_event('startup')
async def startup_event():
    user_initialization()

if __name__ == '__main__':
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
