from pytrends.request import TrendReq

pytrends = TrendReq(hl='en-US', tz=330)
keywords = ["agritech", "farm jobs", "agriculture startup"]

# Fetch interest over time
pytrends.build_payload(keywords, cat=0, timeframe='today 3-m')
data = pytrends.interest_over_time()
print(data.head())

# Related queries
related = pytrends.related_queries()
print(related)
