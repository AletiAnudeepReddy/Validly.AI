from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import time

def get_competitor_startups(user_keywords):
    options = Options()
    options.add_argument('--headless')
    options.add_argument('--disable-gpu')
    options.add_argument('--no-sandbox')

    driver = webdriver.Chrome(options=options)

    query = '+'.join(user_keywords)
    search_url = f"https://www.producthunt.com/search?q={query}"
    driver.get(search_url)
    time.sleep(5)  # Allow time for JS content to load

    startups = []
    posts = driver.find_elements(By.CSS_SELECTOR, 'ul[class*=postsList] li')

    for post in posts:
        try:
            name = post.find_element(By.TAG_NAME, 'h3').text
            desc = post.find_element(By.TAG_NAME, 'p').text
            link = post.find_element(By.TAG_NAME, 'a').get_attribute('href')

            startups.append({
                'name': name,
                'description': desc,
                'link': link
            })
        except:
            continue

    driver.quit()
    return startups

# For testing
if __name__ == "__main__":
    from keyword_extractor import extract_keywords

    idea_text = "A platform connecting farmers and laborers to solve labor shortage in agriculture"
    keywords = extract_keywords(idea_text)
    print("Extracted keywords:", keywords)

    competitors = get_competitor_startups(keywords)
    for s in competitors:
        print(s)
