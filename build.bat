rem 1 - Building application.js

del ".\dist\application.js"

call npm install
call npx gulp

rem 2 - Copying dependencies to dist

if not exist ".\dist\assets\js" mkdir ".\dist\assets\js"
if not exist ".\dist\assets\css" mkdir ".\dist\assets\css"

If not exist ".\dist\assets\js\system.min.js" copy ".\node_modules\systemjs\dist\system.min.js" ".\dist\assets\js\system.min.js"
If not exist ".\dist\assets\js\named-register.min.js" copy ".\node_modules\systemjs\dist\extras\named-register.min.js" ".\dist\assets\js\named-register.min.js"
If not exist ".\dist\assets\js\amd.min.js" copy ".\node_modules\systemjs\dist\extras\amd.min.js" ".\dist\assets\js\amd.min.js"

if not exist ".\dist\assets\css\modern-normalize" mkdir ".\dist\assets\css\modern-normalize"
If not exist ".\dist\assets\css\modern-normalize\modern-normalize.css" copy ".\node_modules\modern-normalize\modern-normalize.css" ".\dist\assets\css\modern-normalize\modern-normalize.css"

rem ... Additional dependencies ...