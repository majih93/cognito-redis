from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# 허용할 origin (FE 주소)
origins = ["http://localhost:3000", "http://127.0.0.1:3000"]  # React

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # 허용할 origin
    allow_credentials=True,  # 쿠키 사용 시 True
    allow_methods=["*"],  # 허용할 메서드 (GET, POST 등)
    allow_headers=["*"],  # 허용할 헤더 (Authorization 등)
)


@app.get("/")
def read_root():
    return {"Hello": "World is hello"}
