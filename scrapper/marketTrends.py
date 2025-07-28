# marketTrends.py
from pytrends.request import TrendReq

def get_trend_data(keywords):
    pytrends = TrendReq(hl='en-US', tz=330)
    pytrends.build_payload(keywords, cat=0, timeframe='today 3-m')

    data = pytrends.interest_over_time()
    related = pytrends.related_queries()

    return data, related

if __name__ == "__main__":
    from keyword_extractor import extract_keywords

    idea_text = "A platform connecting farmers and laborers to solve labor shortage in agriculture"
    keywords = extract_keywords(idea_text)
    print("🧠 Extracted Keywords:", keywords)

    trend_data, related_data = get_trend_data(keywords)
    print("\n📈 Google Trends Data:\n", trend_data.head())
    print("\n🔗 Related Queries:\n", related_data)
