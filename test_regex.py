import re
import glob

files = glob.glob('src/modules/**/*.tsx', recursive=True)
pattern = re.compile(r'<div>\s*<FormLabel([^>]*)>(.*?)</FormLabel>\s*(.*?)\s*</div>', re.DOTALL)

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    matches = pattern.findall(content)
    if matches:
        print(f"Found {len(matches)} matches in {file}")

