import os
import time
import mysql.connector
import random

DB_HOST = os.getenv("DB_HOST")
DB_NAME = os.getenv("DB_NAME")
DB_USER = os.getenv("DB_USER")
DB_PASS = os.getenv("DB_PASS")

time.sleep(10)

conn = mysql.connector.connect(
    host=DB_HOST,
    database=DB_NAME,
    user=DB_USER,
    password=DB_PASS,
)

cursor = conn.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS random_numbers (
    value INT
)
""")

for _ in range(2):
    value = random.randint(1, 100)
    cursor.execute(f"INSERT INTO random_numbers (value) VALUES ({value});")

conn.commit()

cursor.execute("SELECT * FROM random_numbers")
for row in cursor.fetchall():
    print(row)

cursor.close()
conn.close()
