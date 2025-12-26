#!/bin/bash
set -e

echo "Building and deploying presentations..."

# Get current commit hash
COMMIT_HASH=$(git rev-parse HEAD)
COMMIT_HASH_SHORT=$(git rev-parse --short HEAD)

echo "Current commit: $COMMIT_HASH_SHORT ($COMMIT_HASH)"

# Build demo presentation
echo "Building demo presentation..."
cd demo
npx slidev build --out .
cd ..

# Inject commit hash into index.html
echo "Injecting commit hash into index.html..."
sed -i.bak "s/__COMMIT_HASH__/$COMMIT_HASH/g" index.html
sed -i.bak "s/__COMMIT_HASH_SHORT__/$COMMIT_HASH_SHORT/g" index.html
rm -f index.html.bak

echo "Build complete!"
echo "Commit info injected: $COMMIT_HASH_SHORT"
echo ""
echo "To deploy, run: git add -A && git commit -m 'Deploy' && git push origin main"
