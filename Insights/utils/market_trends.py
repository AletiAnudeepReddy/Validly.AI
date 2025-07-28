from pytrends.request import TrendReq

def get_trend_data(keywords):
    pytrends = TrendReq(hl='en-US', tz=330)
    pytrends.build_payload(keywords, cat=0, timeframe='today 3-m')

    data = pytrends.interest_over_time()
    if 'isPartial' in data.columns:
        data = data.drop(columns=['isPartial'])

    related = pytrends.related_queries()
    return data, related
