def test_root(client):
    response = client.get("/")

    assert response.status_code == 200

    data = response.json()

    assert data["message"] == "Welcome to Project Rock API"
    assert data["version"] == "0.1.0"
