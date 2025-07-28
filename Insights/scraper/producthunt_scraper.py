from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time


def get_competitor_startups(user_keywords):
    options = Options()
    # Comment this line during debugging to see the browser
    #options.add_argument('--headless')  
    options.add_argument('--disable-gpu')
    options.add_argument('--no-sandbox')
    options.add_argument('--window-size=1920,1080')

    driver = webdriver.Chrome(options=options)

    query = '+'.join(user_keywords)
    search_url = f"https://www.producthunt.com/search?q={query}"
    print("🔍 Opening URL:", search_url)
    driver.get(search_url)

    time.sleep(3)  # wait for any redirection

    print("📍 Current URL after load:", driver.current_url)

    try:
        # Wait until at least one post is visible
        WebDriverWait(driver, 30).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, 'div[data-test="post-item"]'))
        )
    except Exception as e:
        print("❌ Error: Page took too long to load posts or structure changed:", str(e))
        driver.quit()
        return []

    time.sleep(2)  # Allow additional time for rendering

    def scroll_to_bottom(driver, pause_time=2, max_scrolls=5):
        last_height = driver.execute_script("return document.body.scrollHeight")
        for _ in range(max_scrolls):
            driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
            time.sleep(pause_time)
            new_height = driver.execute_script("return document.body.scrollHeight")
            if new_height == last_height:
                break
            last_height = new_height

    scroll_to_bottom(driver)

    posts = driver.find_elements(By.CSS_SELECTOR, 'div[data-test="post-item"]')
    print(f"✅ Number of posts found: {len(posts)}")

    startups = []
    for index, post in enumerate(posts):
        try:
            print(f"\n📌 Post #{index + 1} raw content:\n{post.text}\n")

            try:
                name = post.find_element(By.TAG_NAME, 'h3').text
            except:
                name = 'N/A'

            try:
                desc = post.find_element(By.TAG_NAME, 'p').text
            except:
                desc = 'N/A'

            try:
                link_elem = post.find_element(By.TAG_NAME, 'a')
                link = link_elem.get_attribute('href')
            except:
                link = 'N/A'

            startups.append({
                'name': name,
                'description': desc,
                'link': link
            })

        except Exception as e:
            print("⚠️ Skipped a post due to error:", str(e))
            continue

    driver.quit()
    return startups


# ============================
# 🔁 For testing (standalone run)
# ============================
if __name__ == "__main__":
    # Simple static keyword extractor (you can replace with your own)
    def extract_keywords(text):
        import re
        stopwords = {'and', 'to', 'a', 'in', 'the', 'of', 'for', 'on'}
        words = re.findall(r'\b\w+\b', text.lower())
        return list(set([word for word in words if word not in stopwords and len(word) > 2]))

    idea_text = "A platform connecting farmers and laborers to solve labor shortage in agriculture"
    keywords = extract_keywords(idea_text)
    print("\n🧠 Extracted keywords:", keywords)

    competitors = get_competitor_startups(keywords)

    print("\n🚀 Competitor Startups Found:")
    if competitors:
        for startup in competitors:
            print(f"- {startup['name']}\n  {startup['description']}\n  🔗 {startup['link']}\n")
    else:
        print("No competitors found or scraping issue.")
