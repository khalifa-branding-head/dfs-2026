import urllib.request
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

url = "https://dubaifintechsummit.com/wp-content/uploads/2026/01/connecting-the-world-bg-img-latest.svg"
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'image/svg+xml,application/xml,text/xml;q=0.9,*/*;q=0.8'
}

dest = r"c:\Users\Khalifat\Documents\DIFC\public\assets\images\world-map.svg"

print(f"Downloading SVG via local user connection...")
try:
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req, timeout=15) as response:
        code = response.getcode()
        data = response.read()
        print(f"Status Code: {code}, Length: {len(data)}")
        
        # Verify it's actually SVG content
        if b"<svg" in data.lower() or b"<xml" in data.lower():
            with open(dest, "wb") as f:
                f.write(data)
            print(f"SUCCESS: Saved raw SVG to {dest}")
        else:
            print("WARNING: Downloaded content does not appear to be an SVG file. Response snippet:")
            print(data[:300].decode('utf-8', errors='ignore'))
except Exception as e:
    print("Error:", e)
