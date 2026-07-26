import glob
import re

def fix_card_gap(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    
    # We want to replace 'mb-5 pb-4' with 'mb-3 pb-3' in TabHeader classNames
    if 'mb-5 pb-4' in content and 'TabHeader' in content:
        content = content.replace('-mt-2 md:-mt-4 mb-5 pb-4', '-mt-2 md:-mt-4 mb-3 pb-3')
        # Just in case some use slightly different negative margins but same padding:
        content = content.replace('mb-5 pb-4 border-b', 'mb-3 pb-3 border-b')
        
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

if __name__ == "__main__":
    files = glob.glob('src/modules/**/*.tsx', recursive=True)
    count = 0
    for file in files:
        with open(file, 'r', encoding='utf-8') as f:
            if 'mb-5 pb-4' in f.read():
                fix_card_gap(file)
                count += 1
    print(f"Done updating card gaps. Total files modified: {count}")
