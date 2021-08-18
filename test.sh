cat package.json > package.json.bak

sed -e '/private/d' package.json > package.json.bak2

cat package.json.bak2 > package.json
