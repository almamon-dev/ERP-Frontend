import os
import glob

files = glob.glob('src/modules/Administration/Settings/*/pages/List/index.tsx')
for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = content.replace('className="p-6 md:p-8 mx-auto', 'className="w-full p-6 md:p-8')
    content = content.replace('max-w-4xl', 'w-full')
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print('Updated classes successfully!')
