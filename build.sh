#!/bin/bash

# 1 - Building application.js

rm dist/application.js
rm application-dist.zip

npx gulp

# 2 - Copying dependencies to dist

[ ! -f dist/assets/js ] && mkdir dist/assets/js

[ ! -f dist/assets/js/system.min.js ] && /bin/cp -rf node_modules/systemjs/dist/system.min.js dist/assets/js/system.min.js
[ ! -f dist/assets/js/named-register.min.js ] && /bin/cp -rf node_modules/systemjs/dist/extras/named-register.min.js dist/assets/js/named-register.min.js
[ ! -f dist/assets/js/amd.min.js ] && /bin/cp -rf node_modules/systemjs/dist/extras/amd.min.js dist/assets/js/amd.min.js

# ... Additional dependencies ...

# 3 - Creates a "release" zip (of the dist folder)

zip -r "application-dist.zip" dist/*