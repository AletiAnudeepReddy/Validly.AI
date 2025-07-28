# keywordClusterer.py
import spacy
from sklearn.cluster import KMeans
import numpy as np

nlp = spacy.load("en_core_web_md")

def cluster_keywords(keywords, num_clusters=2):
    vectors = np.array([nlp(text).vector for text in keywords])
    kmeans = KMeans(n_clusters=num_clusters, random_state=0).fit(vectors)
    result = {keywords[i]: f"Cluster {kmeans.labels_[i]}" for i in range(len(keywords))}
    return result

if __name__ == "__main__":
    from keyword_extractor import extract_keywords

    idea_text = "A platform connecting farmers and laborers to solve labor shortage in agriculture"
    keywords = extract_keywords(idea_text)
    print("🧠 Extracted Keywords:", keywords)

    clustered = cluster_keywords(keywords)
    print("\n🔗 Clustered Keywords:\n", clustered)
