from sklearn.feature_extraction.text import TfidfVectorizer

def extract_keywords(text, max_keywords=5):
    vectorizer = TfidfVectorizer(stop_words='english', max_features=max_keywords)
    X = vectorizer.fit_transform([text])
    return vectorizer.get_feature_names_out().tolist()

# Example usage:
if __name__ == "__main__":
    sample = "Smart farming using drones and IoT sensors to improve crop yield"
    print(extract_keywords(sample))
