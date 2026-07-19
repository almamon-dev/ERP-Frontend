import glob

files = glob.glob('src/modules/Administration/Settings/*/pages/List/index.tsx')
for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace the card wrapper padding to fix TabHeader margins
    content = content.replace('w-full p-6 space-y-6', 'w-full p-6 md:p-8')
    content = content.replace('w-full p-6"', 'w-full p-6 md:p-8"')
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print('Updated card wrapper padding successfully!')
