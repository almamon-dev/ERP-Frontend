import glob

files = glob.glob('src/modules/Administration/Settings/*/pages/List/index.tsx')
for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix Application Name and App Description (items-start)
    content = content.replace('<FormLabel required>Application Name</FormLabel>', '<FormLabel required className="!mb-0 mt-2">Application Name</FormLabel>')
    content = content.replace('<FormLabel>App Description</FormLabel>', '<FormLabel className="!mb-0 mt-2">App Description</FormLabel>')
    
    # Fix Support Email (items-center)
    content = content.replace('<FormLabel required>Support Email</FormLabel>', '<FormLabel required className="!mb-0">Support Email</FormLabel>')
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print('Updated form label alignments successfully!')
