import os
import glob
import re

def update_colors(folder):
    for root, _, files in os.walk(folder):
        for file in files:
            if file.endswith(('.tsx', '.ts')):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()

                # Replace some common old tailwind classes
                new_content = re.sub(r'bg-red-(\d+)', r'bg-primary', content)
                new_content = re.sub(r'text-red-(\d+)', r'text-primary', new_content)
                new_content = re.sub(r'border-red-(\d+)', r'border-primary', new_content)
                new_content = re.sub(r'hover:bg-red-(\d+)', r'hover:bg-secondary', new_content)
                new_content = re.sub(r'hover:text-red-(\d+)', r'hover:text-secondary', new_content)
                
                # Replace specific CTA buttons if they were red
                
                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)

update_colors('./src')
update_colors('./app')
