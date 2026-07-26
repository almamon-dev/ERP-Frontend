import glob
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    
    # We will search for all <div> tags that immediately contain a <FormLabel>
    # and don't contain other nested <div>s before closing.
    
    # Pattern explanation:
    # <div(?: className="[^"]*")?> : opening div (with or without className, though usually it's just <div>)
    # \s* : whitespace
    # <FormLabel([^>]*)>(.*?)</FormLabel> : the label
    # (.*?) : the rest of the content (input, select, p, etc.)
    # </div> : closing div
    # To prevent matching across multiple divs, we ensure the rest of the content does not contain '</div>' or '<div'
    
    pattern = re.compile(
        r'(<div>)\s*(<FormLabel[^>]*>.*?</FormLabel>)\s*(((?!<div|</div>).)*?)\s*(</div>)', 
        re.DOTALL
    )

    def replacer(match):
        div_open = match.group(1)
        label_full = match.group(2)
        inner_content = match.group(3)
        
        # Modify label to add !mb-0 mt-2
        if 'className="' in label_full:
            if '!mb-0' not in label_full:
                label_full = label_full.replace('className="', 'className="!mb-0 mt-2 ')
        else:
            label_full = label_full.replace('<FormLabel', '<FormLabel className="!mb-0 mt-2"')
            
        return f'<div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">\n    {label_full}\n    <p className="text-[14px] text-slate-400 mt-2">:</p>\n    <div>\n        {inner_content.strip()}\n    </div>\n</div>'

    # Run the substitution
    new_content = pattern.sub(replacer, content)

    if new_content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

files = glob.glob('src/modules/**/*.tsx', recursive=True)
count = 0
for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        text = f.read()
    if '<FormLabel' in text:
        process_file(file)
        count += 1
print(f"Checked {count} files.")
