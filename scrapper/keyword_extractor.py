from sklearn.feature_extraction.text import TfidfVectorizer

def extract_keywords(text, max_keywords=3):
    vectorizer = TfidfVectorizer(stop_words='english', max_features=max_keywords)
    X = vectorizer.fit_transform([text])
    return vectorizer.get_feature_names_out().tolist()

# For testing
if __name__ == "__main__":
    idea_text = "A platform connecting farmers and laborers to solve labor shortage in agriculture"
    keywords = extract_keywords(idea_text)
    print(keywords)
