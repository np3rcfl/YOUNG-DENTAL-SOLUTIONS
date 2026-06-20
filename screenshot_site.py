"""Take full-page screenshots of youngdentalsolutions.com using Selenium + Chrome."""
import time
import os
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager

OUTPUT_DIR = r"d:\claude\young dental solutions\screenshots"
os.makedirs(OUTPUT_DIR, exist_ok=True)

PAGES = [
    ("home", "https://www.youngdentalsolutions.com/"),
    ("about", "https://www.youngdentalsolutions.com/about"),
    ("services", "https://www.youngdentalsolutions.com/services"),
    ("who-we-are", "https://www.youngdentalsolutions.com/who-we-are"),
    ("recruiting", "https://www.youngdentalsolutions.com/recruiting-services"),
    ("job-openings", "https://www.youngdentalsolutions.com/current-job-openings"),
    ("employment-seekers", "https://www.youngdentalsolutions.com/employment-seekers"),
    ("digital-downloads", "https://www.youngdentalsolutions.com/digital-downloads"),
]

options = Options()
options.add_argument("--headless=new")
options.add_argument("--window-size=1440,900")
options.add_argument("--disable-gpu")
options.add_argument("--no-sandbox")
options.add_argument("--disable-dev-shm-usage")
options.binary_location = r"C:\Program Files\Google\Chrome\Application\chrome.exe"

driver = webdriver.Chrome(
    service=Service(ChromeDriverManager().install()),
    options=options,
)

for name, url in PAGES:
    try:
        print(f"Capturing {name}: {url}")
        driver.get(url)
        time.sleep(4)  # wait for Wix JS to render

        # Set full page height
        total_height = driver.execute_script("return document.body.scrollHeight")
        driver.set_window_size(1440, total_height)
        time.sleep(1)

        path = os.path.join(OUTPUT_DIR, f"{name}.png")
        driver.save_screenshot(path)
        print(f"  Saved: {path} ({os.path.getsize(path)//1024}KB)")
    except Exception as e:
        print(f"  ERROR: {e}")

driver.quit()
print("Done.")
