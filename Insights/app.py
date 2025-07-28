from flask import Flask, request, jsonify
from utils.keyword_extractor import extract_keywords
from utils.keyword_clusterer import cluster_keywords
from utils.market_trends import get_trend_data

from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/analyze", methods=["POST"])
def analyze_idea():
    data = request.get_json()
    idea_text = data.get("idea", "")

    if not idea_text:
        return jsonify({"error": "Idea text is required"}), 400

    # Step 1: Extract Keywords
    keywords = extract_keywords(idea_text)

    # Step 2: Cluster Keywords
    clustered = cluster_keywords(keywords)

    # Step 3: Get Trend Data
    trend_data, related_queries = get_trend_data(keywords)

    # Format trend data for frontend
    formatted_trends = {kw: trend_data[kw].tolist() for kw in keywords}
    dates = trend_data.index.strftime("%Y-%m-%d").tolist()

    # Format related queries
    formatted_related = {
        kw: queries["top"].to_dict(orient="records") if queries and "top" in queries else []
        for kw, queries in related_queries.items()
    }

    return jsonify({
        "keywords": keywords,
        "clusters": clustered,
        "trendData": {
            "keywords": formatted_trends,
            "dates": dates
        },
        "relatedQueries": formatted_related
    })

if __name__ == "__main__":
    app.run(debug=True)
