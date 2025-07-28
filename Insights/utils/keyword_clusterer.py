import spacy
from sklearn.cluster import KMeans
import numpy as np

nlp = spacy.load("en_core_web_md")

def cluster_keywords(keywords, num_clusters=2):
    vectors = np.array([nlp(text).vector for text in keywords])
    if len(vectors) < num_clusters:
        num_clusters = len(vectors)
    kmeans = KMeans(n_clusters=num_clusters, random_state=0).fit(vectors)
    return {keywords[i]: f"Cluster {kmeans.labels_[i]}" for i in range(len(keywords))}
