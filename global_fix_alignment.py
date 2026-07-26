import glob
import re
import os

def fix_alignment(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    
    # We want to find:
    # <FormLabel...>...</FormLabel>
    # <p className="...text-slate-400...">:</p>
    
    # Regex to match FormLabel that doesn't already have className (or if we want to just append to it)
    # We can match the FormLabel followed by the colon p tag.
    
    # Let's match the whole block:
    # <FormLabel(.*?)>(.*?)</FormLabel>\s*<p className="([^"]*text-slate-400[^"]*)">:</p>
    
    def replacer(match):
        attrs = match.group(1)
        text = match.group(2)
        p_classes = match.group(3)
        
        # If it already has className, skip for safety or modify
        if 'className=' in attrs:
            if '!mb-0' not in attrs:
                # Add to existing className
                attrs = attrs.replace('className="', 'className="!mb-0 mt-2 ')
        else:
            attrs += ' className="!mb-0 mt-2"'
            
        return f'<FormLabel{attrs}>{text}</FormLabel>\n                                        <p className="{p_classes}">:</p>'

    pattern = re.compile(r'<FormLabel([^>]*)>(.*?)</FormLabel>\s*<p className="([^"]*text-slate-400[^"]*)">:</p>')
    content = pattern.sub(replacer, content)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

if __name__ == "__main__":
    files = glob.glob('src/modules/**/*.tsx', recursive=True)
    for file in files:
        fix_alignment(file)
    print("Done applying alignment fixes.")
