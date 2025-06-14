import requests
import json

data  = requests.get("https://api.jsonbin.io/v3/b/684bf3cf8960c979a5a91f56")

response = data.json()

print(response)
