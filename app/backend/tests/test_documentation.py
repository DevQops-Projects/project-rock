def test_documentation_categories(client):
    response = client.get("/api/v1/documentation/categories")

    assert response.status_code == 200

    data = response.json()

    assert len(data) == 4
    assert data[0]["name"] == "AWS"
