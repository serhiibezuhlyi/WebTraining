FROM python:3.12-slim

WORKDIR /app

COPY main.py .

RUN pip install mysql-connector-python

CMD ["python", "main.py"]
