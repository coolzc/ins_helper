rm -rf client/
mkdir client
cd ./app
npm install
NODE_ENV=production webpack --bail --progress --profile
cp -rp dist/ ../client/app
rm -rf ./dist
