import spacy
from sklearn.cluster import KMeans
import numpy as np

nlp = spacy.load("en_core_web_md")

keywords = ["farm jobs", "organic farming", "tractor rental", "irrigation systems", "smart farming"]
vectors = np.array([nlp(text).vector for text in keywords])

kmeans = KMeans(n_clusters=2, random_state=0).fit(vectors)

for idx, label in enumerate(kmeans.labels_):
    print(f"{keywords[idx]} => Cluster {label}")
