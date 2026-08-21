import os
import subprocess
import sys

repo = r"C:\Users\marck\OneDrive\Dokumente\Empax\Website\empax"
os.chdir(repo)

print('PWD:', os.getcwd())
for cmd in [
    ['git', 'status', '--short'],
    ['git', 'add', '.'],
    ['git', 'commit', '-m', 'Update website content and styling'],
    ['git', 'push'],
]:
    print('> ' + ' '.join(cmd))
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.stdout:
        print(result.stdout, end='')
    if result.stderr:
        print(result.stderr, end='')
    if result.returncode != 0:
        print('EXIT', result.returncode)
        sys.exit(result.returncode)
