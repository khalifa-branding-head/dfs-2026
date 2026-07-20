import urllib.request
import urllib.parse
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

proxies = [
    "https://thingproxy.freeboard.io/fetch/{}",
    "https://api.codetabs.com/v1/proxy?quest={}",
    "https://cors-anywhere.azm.workers.dev/{}",
    "https://corsproxy.io/?{}"
]

target_url = "https://dubaifintechsummit.com/wp-content/uploads/2026/01/connecting-the-world-bg-img-latest.svg"
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

for proxy_tpl in proxies:
    proxy_url = proxy_tpl.format(urllib.parse.quote(target_url) if "codetabs" in proxy_tpl or "corsproxy.io" in proxy_tpl else target_url)
    print(f"Testing proxy: {proxy_url}")
    try:
        req = urllib.request.Request(proxy_url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as response:
            code = response.getcode()
            data = response.read()
            print(f"  Status: {code}, Length: {len(data)}")
            if len(data) > 0:
                print("  Content starts with:", data[:150])
                # Check for actual SVG content
                if b"<svg" in data.lower():
                    dest = r"c:\Users\Khalifat\Documents\DIFC\public\assets\images\world-map.svg"
                    with open(dest, "wb") as f:
                        f.write(data)
                    print(f"  OK - Saved SVG to {dest}")
                    break
                else:
                    print("  SKIP - Not an SVG file")
    except Exception as e:
        print(f"  FAILED - Error: {e}")
