import requests
import time

while True:
    x = requests.get('http://192.168.8.17:5001/koszciuszkon2/us-central1/checkOnline')
    time.sleep(30)