import urllib.request

url = "https://raw.githubusercontent.com/flekschas/simple-world-map/master/world-map.svg"
dest = r"c:\Users\Khalifat\Documents\DIFC\public\assets\images\world-map.svg"

print(f"Downloading world-map.svg...")
try:
    with urllib.request.urlopen(url) as response:
        data = response.read().decode('utf-8')
        print(f"Successfully downloaded {len(data)} characters.")
        
        # Print a sample of the path element to see how it's styled
        path_idx = data.find("<path")
        if path_idx != -1:
            print("Path element sample:", data[path_idx:path_idx+200])
            
        with open(dest, "w", encoding="utf-8") as f:
            f.write(data)
        print(f"Saved clean SVG to {dest}")
except Exception as e:
    print("Error:", e)
