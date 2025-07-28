# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from utils.keyword_extractor import extract_keywords
from utils.keyword_clusterer import cluster_keywords
from utils.market_trends import get_trend_data

app = Flask(__name__)
CORS(app)

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.get_json()
    name = data.get("name", "")
    description = data.get("description", "")
    problem = data.get("problem", "")

    # Step 1: Combine the fields into a single idea text
    idea_text = f"{name}. {description}. {problem}".strip()

    if not idea_text:
        return jsonify({"error": "Idea text is required"}), 400

    # Step 2: Extract keywords
    keywords = extract_keywords(idea_text)

    # Step 3: Cluster keywords
    clustered = cluster_keywords(keywords)

    # Step 4: Fetch Google Trends data
    trend_data, related_queries = get_trend_data(keywords)

    # Format trend data for frontend (chart-friendly)
    formatted_trends = {kw: trend_data[kw].tolist() for kw in keywords}
    dates = trend_data.index.strftime("%Y-%m-%d").tolist()

    # Format related queries (top & rising)
    formatted_related = {
        kw: {
            "top": queries["top"].to_dict(orient="records") if queries.get("top") is not None else [],
            "rising": queries["rising"].to_dict(orient="records") if queries.get("rising") is not None else [],
        } for kw, queries in related_queries.items()
    }
    print(formatted_related)

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
